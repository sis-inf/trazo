/**
 * Calcula la primera derivada de una función usando el método de diferencias finitas atrasadas.
 * * @param {function} f - La función objetivo a derivar.
 * @param {number} x - El punto en el cual se evalúa la derivada.
 * @param {number} h - El tamaño del paso (incremento). No debe ser 0.
 * @returns {number} El valor aproximado de la derivada en el punto x.
 * @throws {Error} Si el tamaño del paso h es igual a cero.
 */
export function diferenciasAtrasGrado1(f, x, h) {
    if (h === 0) {
        throw new Error("El tamaño del paso h no puede ser cero.");
    }
    
    return (f(x) - f(x - h)) / h;
}