/**
 * @file descomposicion_qr.js
 * @description Descomposición QR de una matriz mediante el proceso de
 * Gram-Schmidt modificado (MGS).
 *
 * Dada una matriz A de m×n con columnas linealmente independientes, calcula:
 *   A = Q · R
 * donde:
 *   - Q es una matriz m×n con columnas ortonormales (Qᵀ·Q = I_n)
 *   - R es una matriz n×n triangular superior con elementos diagonales positivos
 *
 * ## Gram-Schmidt clásico vs. modificado
 *
 * El proceso de Gram-Schmidt clásico y el modificado producen el mismo resultado
 * en aritmética exacta, pero difieren en estabilidad numérica:
 *
 * - **Clásico**: ortogonaliza cada vector `vj` contra todos los vectores `q_i`
 *   ya calculados usando las proyecciones originales de `vj`. Acumula errores
 *   de cancelación cuando las columnas son casi linealmente dependientes.
 *
 * - **Modificado (este módulo)**: en cada paso i, actualiza el vector residual
 *   `vj` después de restar cada proyección, de forma que la siguiente
 *   proyección se calcula contra el residual ya parcialmente ortogonalizado.
 *   Esto reduce el error de cancelación significativamente y produce vectores
 *   Q más cercanos a la ortogonalidad real en aritmética de punto flotante.
 *
 * ## Aplicaciones
 *
 * - **Mínimos cuadrados**: resolver Ax ≈ b de forma más estable que las
 *   ecuaciones normales (A^T·A·x = A^T·b), que elevan al cuadrado el número
 *   de condición.
 * - **Base de algoritmos de autovalores**: la iteración QR es el algoritmo
 *   estándar para calcular todos los autovalores de una matriz.
 * - **Ortogonalización de bases**: producir una base ortonormal a partir de
 *   un conjunto de vectores linealmente independientes.
 */

import { crearResultado } from '../core/contrato.js';
import { ErrorParametros, ErrorDominio } from '../core/errores.js';

/**
 * Descompone la matriz A en el producto Q·R mediante Gram-Schmidt modificado.
 *
 * @param {Object}     params
 * @param {number[][]} params.A - Matriz de m×n (m ≥ n) con columnas
 *   linealmente independientes. Se acepta tanto matrices cuadradas (m=n)
 *   como rectangulares con más filas que columnas (m>n, caso de mínimos
 *   cuadrados sobredeterminado). No se aceptan matrices con más columnas
 *   que filas (n>m).
 *
 * @returns {Object} Objeto de resultado uniforme según el contrato de Trazo:
 *   - `resultado`: `{ Q, R }` donde Q (m×n) y R (n×n) son arrays 2D.
 *   - `iteraciones`: historial de pasos con la norma de cada columna y el
 *     vector q_i generado.
 *   - `convergio`: siempre `true` si las columnas son linealmente independientes.
 *   - `mensaje`: descripción del resultado con las dimensiones de Q y R.
 *   - `meta.metodo`: `'gram-schmidt-modificado'`.
 *
 * @throws {ErrorParametros} Si A no es un array 2D válido, tiene n > m, o
 *   alguna fila tiene longitud distinta.
 * @throws {ErrorDominio} Si alguna columna de A es linealmente dependiente de
 *   las anteriores (norma del residual ≤ 1e-14), lo que impide la
 *   ortogonalización.
 *
 * @example
 * import { descomposicionQR } from 'trazo/src/lineales/descomposicion_qr.js';
 *
 * const resultado = descomposicionQR({
 *   A: [
 *     [1, 1, 0],
 *     [1, 0, 1],
 *     [0, 1, 1],
 *   ],
 * });
 *
 * const { Q, R } = resultado.resultado;
 * // Q·R ≈ A  (dentro de tolerancia de punto flotante ~1e-15)
 * // Qᵀ·Q ≈ I (ortogonalidad verificable)
 */
export function descomposicionQR({ A }) {
  // --- Validación ---
  if (!Array.isArray(A) || A.length === 0) {
    throw new ErrorParametros(
      'Trazo.descomposicionQR: "A" debe ser un array 2D no vacío.'
    );
  }

  const m = A.length;        // filas
  const n = A[0].length;     // columnas

  if (!Array.isArray(A[0]) || n === 0) {
    throw new ErrorParametros(
      'Trazo.descomposicionQR: "A" debe ser una matriz 2D (array de arrays).'
    );
  }

  if (A.some(fila => !Array.isArray(fila) || fila.length !== n)) {
    throw new ErrorParametros(
      'Trazo.descomposicionQR: todas las filas de "A" deben tener la misma longitud.'
    );
  }

  if (n > m) {
    throw new ErrorParametros(
      `Trazo.descomposicionQR: la matriz tiene más columnas (${n}) que filas (${m}). ` +
      'La descomposición QR por Gram-Schmidt requiere m ≥ n.'
    );
  }

  // --- Gram-Schmidt modificado ---
  // Inicializar V como copia de las columnas de A (trabajamos por columnas)
  // V[j] = columna j de A como array de m elementos
  const V = Array.from({ length: n }, (_, j) =>
    A.map(fila => fila[j])
  );

  // Q[j] = j-ésimo vector ortonormal (columna de Q)
  const Q = [];
  // R es n×n, inicializada en cero
  const R = Array.from({ length: n }, () => new Array(n).fill(0));

  const iteraciones = [];

  for (let i = 0; i < n; i++) {
    // Norma del residual actual para la columna i
    const norma = _norma(V[i]);

    if (norma <= 1e-14) {
      throw new ErrorDominio(
        `Trazo.descomposicionQR: la columna ${i} de A es linealmente dependiente ` +
        `de las columnas anteriores (norma del residual = ${norma.toExponential(3)}). ` +
        'Las columnas de A deben ser linealmente independientes.'
      );
    }

    // R[i][i] = norma del i-ésimo vector residual
    R[i][i] = norma;

    // q_i = V[i] / norma  (vector ortonormal i-ésimo)
    const qi = V[i].map(v => v / norma);
    Q.push(qi);

    iteraciones.push({
      n: i + 1,
      columna: i,
      normaResidual: norma,
      qi: [...qi],
    });

    // Gram-Schmidt MODIFICADO: actualizar los vectores restantes V[j] (j > i)
    // restando su proyección sobre q_i ya calculado.
    // Esto es la diferencia clave con el clásico: se usa q_i (ya normalizado)
    // en lugar de volver a calcular la proyección sobre el v_i original.
    for (let j = i + 1; j < n; j++) {
      // R[i][j] = qᵢᵀ · V[j]  (proyección escalar)
      R[i][j] = _productoInterior(qi, V[j]);
      // V[j] = V[j] - R[i][j] · q_i  (restar componente en dirección q_i)
      V[j] = V[j].map((v, k) => v - R[i][j] * qi[k]);
    }
  }

  // Convertir Q de lista de columnas a matriz m×n (lista de filas)
  const Qmatriz = Array.from({ length: m }, (_, fila) =>
    Q.map(col => col[fila])
  );

  return crearResultado({
    resultado: { Q: Qmatriz, R },
    iteraciones,
    convergio: true,
    mensaje:
      `Descomposición QR completada. Q: ${m}×${n}, R: ${n}×${n}. ` +
      `Método: Gram-Schmidt modificado.`,
    meta: {
      metodo: 'gram-schmidt-modificado',
      parametros: { m, n },
      tiempo_ms: 0,
    },
  });
}

// ---------------------------------------------------------------------------
// Helpers internos
// ---------------------------------------------------------------------------

/** Norma euclideana de un vector. */
function _norma(v) {
  return Math.sqrt(v.reduce((acc, vi) => acc + vi * vi, 0));
}

/** Producto interior (punto) de dos vectores de igual longitud. */
function _productoInterior(u, v) {
  return u.reduce((acc, ui, i) => acc + ui * v[i], 0);
}