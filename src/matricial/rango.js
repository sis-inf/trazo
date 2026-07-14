import { validarMatrizCuadrada } from '../core/validaciones.js';

/**
 * Calcula el rango de una matriz mediante eliminación gaussiana.
 *
 * @param {Object} params
 * @param {number[][]} params.A - Matriz cuadrada.
 * @returns {number} Rango de la matriz.
 */
export function calcularRango({ A }) {
    validarMatrizCuadrada(A);

    const n = A.length;
    const EPSILON = 1e-12;

    // Trabajar sobre una copia para no modificar la matriz original
    const M = A.map(fila => [...fila]);

    let filaPivoteActual = 0;

    for (let col = 0; col < n && filaPivoteActual < n; col++) {

        // Buscar el mejor pivote en la columna actual
        let filaPivote = filaPivoteActual;

        for (let i = filaPivoteActual + 1; i < n; i++) {
            if (Math.abs(M[i][col]) > Math.abs(M[filaPivote][col])) {
                filaPivote = i;
            }
        }

        // Si toda la columna es cero, continuar con la siguiente
        if (Math.abs(M[filaPivote][col]) < EPSILON) {
            continue;
        }

        // Intercambiar filas si es necesario
        if (filaPivote !== filaPivoteActual) {
            [M[filaPivoteActual], M[filaPivote]] = [
                M[filaPivote],
                M[filaPivoteActual]
            ];
        }

        const pivote = M[filaPivoteActual][col];

        // Eliminar los elementos debajo del pivote
        for (let fila = filaPivoteActual + 1; fila < n; fila++) {
            const factor = M[fila][col] / pivote;

            for (let k = col; k < n; k++) {
                M[fila][k] -= factor * M[filaPivoteActual][k];
            }
        }

        filaPivoteActual++;
    }

    // Contar filas no nulas de la matriz escalonada
    let rango = 0;

    for (const fila of M) {
        const tieneElementoNoNulo = fila.some(
            valor => Math.abs(valor) > EPSILON
        );

        if (tieneElementoNoNulo) {
            rango++;
        }
    }

    return rango;
}
