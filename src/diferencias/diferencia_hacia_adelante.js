/**
 * Calcula la derivada numérica usando diferencias finitas hacia adelante.
 *
 * Fórmula:
 * f'(x) ≈ (f(x + h) - f(x)) / h
 *
 * @param {Function} f Función a derivar.
 * @param {number} x Punto donde se evalúa la derivada.
 * @param {number} h Paso de aproximación.
 * @returns {number} Aproximación de la derivada.
 *
 * @throws {Error} Si h es igual a 0.
 *
 * @example
 * const resultado = diferenciasAdelanteGrado1(x => x ** 2, 2, 0.001);
 * console.log(resultado);
 */
function diferenciasAdelanteGrado1(f, x, h) {
  if (h === 0) {
    throw new Error("El parámetro h no puede ser 0.");
  }

  return (f(x + h) - f(x)) / h;
}

export { diferenciasAdelanteGrado1 };