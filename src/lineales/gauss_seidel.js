import { crearResultado } from "../core/contrato.js";
import { ErrorDominio } from "../core/errores.js";
import {
  validarMatrizCuadrada,
  validarVector,
  validarTolerancia,
  validarIteraciones,
} from "../utils/validaciones.js";

/**
 * Resuelve un sistema lineal A·x = b mediante el metodo iterativo de Gauss-Seidel.
 *
 * @param {Object} params
 * @param {number[][]} params.A
 * @param {number[]} params.b
 * @param {number[]} [params.x0]
 * @param {number} [params.tolerancia=1e-6]
 * @param {number} [params.maxIter=100]
 * @returns {Object}
 */
function gaussSeidel({
  A,
  b,
  x0,
  tolerancia = 1e-6,
  maxIter = 100,
}) {
  validarMatrizCuadrada(A);

  const n = A.length;

  validarVector(b, n);
  validarTolerancia(tolerancia);
  validarIteraciones(maxIter);

  const xInicial = x0 ?? new Array(n).fill(0);

  validarVector(xInicial, n);

  for (let i = 0; i < n; i++) {
    if (A[i][i] === 0) {
      throw new ErrorDominio(
        `Trazo.gaussSeidel: el elemento diagonal A[${i}][${i}] es cero.`
      );
    }
  }

  let x = [...xInicial];
  const iteraciones = [];
  let convergio = false;

  for (let iter = 0; iter < maxIter; iter++) {
    const xViejo = [...x];

    for (let i = 0; i < n; i++) {
      let suma1 = 0;
      let suma2 = 0;

      for (let j = 0; j < i; j++) {
        suma1 += A[i][j] * x[j];
      }

      for (let j = i + 1; j < n; j++) {
        suma2 += A[i][j] * xViejo[j];
      }

      x[i] = (b[i] - suma1 - suma2) / A[i][i];
    }

    const error = Math.sqrt(
      x.reduce((acum, val, i) => acum + (val - xViejo[i]) ** 2, 0)
    );

    iteraciones.push({
      n: iter + 1,
      x: [...x],
      error,
    });

    if (error < tolerancia) {
      convergio = true;
      break;
    }
  }

  return crearResultado({
    resultado: x,
    iteraciones,
    convergio,
    mensaje: convergio
      ? `Convergió en ${iteraciones.length} iteraciones.`
      : `Se alcanzó el máximo de ${maxIter} iteraciones sin converger.`,
    meta: {
      metodo: "gauss-seidel",
      parametros: {
        A,
        b,
        x0: xInicial,
        tolerancia,
        maxIter,
      },
      tiempo_ms: 0,
    },
  });
}

export { gaussSeidel };