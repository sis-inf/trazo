import { crearResultado } from '../core/contrato.js';
import { ErrorDominio } from '../core/errores.js';
import { validarMatrizCuadrada } from '../core/validaciones.js';

/**
 * Resolución de sistemas de ecuaciones lineales Ax = b
 * mediante eliminación gaussiana con sustitución hacia atrás.
 *
 * @param {Object} params
 * @param {number[][]} params.A - Matriz de coeficientes (n x n)
 * @param {number[]}   params.b - Vector de términos independientes (n)
 * @returns {Object} Objeto de resultado uniforme según el contrato de Trazo
 * @throws {ErrorDominio} Si se detecta un pivote nulo que impide la operación
 */
export function gauss({ A, b }) {
    validarMatrizCuadrada(A);
    const n = A.length;

    if (!Array.isArray(b) || b.length !== n) {
        throw new Error('El vector b debe tener la misma dimensión que la matriz de coeficientes');
    }

    const M = A.map((fila, i) => [...fila, b[i]]);
    const iteraciones = [];
    let contadorIteracion = 1;

    const registrarPaso = (paso, descripcion) => {
        const matrizActual = M.map(fila => fila.slice(0, n));
        const vectorActual = M.map(fila => fila[n]);

        iteraciones.push({
            n: contadorIteracion++,
            paso,
            descripcion,
            matriz: matrizActual,
            vector: vectorActual
        });
    };

    registrarPaso('eliminacion', 'Estado inicial del sistema aumentado');

    for (let col = 0; col < n; col++) {
        const pivote = M[col][col];

        if (Math.abs(pivote) < 1e-12) {
            throw new ErrorDominio(
                `Pivote nulo en la columna ${col + 1}. El sistema no puede resolverse con este método sin pivoteo.`
            );
        }

        for (let fila = col + 1; fila < n; fila++) {
            const factor = M[fila][col] / pivote;

            for (let k = col; k <= n; k++) {
                M[fila][k] -= factor * M[col][k];
            }

            registrarPaso(
                'eliminacion',
                `Eliminación de la fila ${fila + 1} usando la columna pivote ${col + 1}`
            );
        }
    }

    const x = new Array(n).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        let suma = 0;

        for (let j = i + 1; j < n; j++) {
            suma += M[i][j] * x[j];
        }

        x[i] = (M[i][n] - suma) / M[i][i];

        registrarPaso(
            'sustitucion',
            `Cálculo de la variable x[${i + 1}] mediante sustitución hacia atrás`
        );
    }

    return crearResultado({
        resultado: x,
        iteraciones,
        convergio: true,
        mensaje: "El sistema de ecuaciones se resolvió con éxito.",
        meta: {
            metodo: "Eliminación Gaussiana",
            parametros: { n }
        }
    });
}