/**
 * Módulo para cálculo de derivadas por diferencias hacia atrás
 * @module diferencias/diferencia_hacia_atras
 */

/**
 * Calcula la derivada numérica usando diferencias hacia atrás (grado 1)
 * @param {Function} f - Función a derivar
 * @param {number} x - Punto donde evaluar la derivada
 * @param {number} h - Tamaño del paso (debe ser != 0)
 * @returns {number} Aproximación de la derivada
 * @throws {Error} Si h === 0
 * @example
 * diferenciasAtrasGrado1(x => x**2, 2, 0.001) // ~4.0
 */
export function diferenciasAtrasGrado1(f, x, h) {
    // Validar que f sea una función
    if (typeof f !== 'function') {
        throw new TypeError('El argumento f debe ser una función');
    }

    // Validar que x sea un número
    if (typeof x !== 'number' || isNaN(x)) {
        throw new TypeError('El argumento x debe ser un número válido');
    }

    // Validar que h sea un número y diferente de 0
    if (typeof h !== 'number' || isNaN(h)) {
        throw new TypeError('El argumento h debe ser un número válido');
    }
    if (h === 0) {
        throw new Error('El paso h no puede ser 0');
    }

    // Fórmula: (f(x) - f(x-h)) / h
    return (f(x) - f(x - h)) / h;
}
