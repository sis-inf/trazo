class NumericalError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NumericalError';
  }
}

/**
 * Calcula la interpolación de Newton por diferencias divididas.
 *
 * @param {number[]} xs - Valores conocidos de x.
 * @param {number[]} ys - Valores conocidos de y.
 * @param {number} x - Punto donde se evalúa el polinomio interpolante.
 * @returns {number} Valor interpolado en x.
 * @throws {NumericalError} Si xs e ys no tienen igual longitud o si hay menos de 2 puntos.
 */
export function newtonDiferenciasDivididas(xs, ys, x) {
  if (!Array.isArray(xs) || !Array.isArray(ys)) {
    throw new NumericalError('xs e ys deben ser arrays.');
  }

  if (xs.length !== ys.length) {
    throw new NumericalError('xs e ys deben tener la misma longitud.');
  }

  if (xs.length < 2) {
    throw new NumericalError('Se requieren al menos 2 puntos para interpolar.');
  }

  const n = xs.length;
  const tabla = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    tabla[i][0] = ys[i];
  }

  for (let j = 1; j < n; j++) {
    for (let i = 0; i < n - j; i++) {
      tabla[i][j] = (tabla[i + 1][j - 1] - tabla[i][j - 1]) / (xs[i + j] - xs[i]);
    }
  }

  let resultado = tabla[0][0];
  let producto = 1;

  for (let i = 1; i < n; i++) {
    producto *= x - xs[i - 1];
    resultado += tabla[0][i] * producto;
  }

  return resultado;
}
