/**
 * Evalúa un polinomio usando el algoritmo de Horner.
 * @param {number[]} coefficients - Coeficientes del polinomio
 * @param {number} x - Valor donde evaluar
 * @returns {number}
 */
export function polyEval(coefficients, x) {
  if (!Array.isArray(coefficients) || coefficients.length === 0) {
    throw new Error("El array de coeficientes no puede estar vacío");
  }

  let result = coefficients[0];

  for (let i = 1; i < coefficients.length; i++) {
    result = result * x + coefficients[i];
  }

  return result;
}