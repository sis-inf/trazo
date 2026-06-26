/**
 * Redondea un número a la cantidad de decimales indicada.
 *
 * @param {number} valor - El número a redondear.
 * @param {number} decimales - Cantidad de decimales deseados.
 * @returns {number} El número redondeado.
 */
export function redondear(valor, decimales) {
    const factor = Math.pow(10, decimales);
    return Math.round(valor * factor) / factor;
}

/**
 * Calcula el error absoluto entre dos valores.
 *
 * @param {number} actual - Valor actual de la iteración.
 * @param {number} anterior - Valor de la iteración anterior.
 * @returns {number} El error absoluto |actual - anterior|.
 */
export function errorAbsoluto(actual, anterior) {
    return Math.abs(actual - anterior);
}

/**
 * Calcula el error relativo entre dos valores.
 * Devuelve Infinity si el valor actual es cero.
 *
 * @param {number} actual - Valor actual de la iteración.
 * @param {number} anterior - Valor de la iteración anterior.
 * @returns {number} El error relativo |(actual - anterior) / actual|
 *                   o Infinity si actual es cero.
 */
export function errorRelativo(actual, anterior) {
    if (actual === 0) return Infinity;
    return Math.abs((actual - anterior) / actual);
}

/**
 * Calcula el error porcentual entre dos valores.
 *
 * @param {number} actual - Valor actual de la iteración.
 * @param {number} anterior - Valor de la iteración anterior.
 * @returns {number} El error porcentual (error relativo * 100).
 */
export function errorPorcentual(actual, anterior) {
    return errorRelativo(actual, anterior) * 100;
}

/**
 * Verifica si dos valores son aproximadamente iguales
 * dentro de una tolerancia dada.
 *
 * @param {number} a - Primer valor.
 * @param {number} b - Segundo valor.
 * @param {number} tolerancia - Margen de tolerancia aceptado.
 * @returns {boolean} true si |a - b| < tolerancia, false en caso contrario.
 */
export function aproximadamenteIgual(a, b, tolerancia) {
    return Math.abs(a - b) < tolerancia;
}