import { normaFrobenius } from './norma_matriz.js';

/**
 * Calcula el número de condición de una matriz.
 *
 * cond(A) = ||A|| * ||A^-1||
 *
 * @param {number[][]} A Matriz original
 * @param {number[][]} inversaA Matriz inversa de A
 * @returns {number} Número de condición
 */
export function calcularNumeroCondicion(A, inversaA) {
    if (!Array.isArray(A) || !Array.isArray(inversaA)) {
        throw new Error('Las entradas deben ser matrices');
    }

    const normaA = normaFrobenius(A);
    const normaInversa = normaFrobenius(inversaA);

    return normaA * normaInversa;
}
