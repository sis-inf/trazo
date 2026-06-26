/**
 * Regla de Simpson 1/3 para aproximacion de integrales.
 *
 * @param {Object} params Parametros del metodo.
 * @param {Function} params.f Funcion a integrar.
 * @param {number} params.a Extremo inferior.
 * @param {number} params.b Extremo superior.
 * @param {number} [params.n=100] Numero de subintervalos (par).
 * @returns {Object} Resultado del metodo.
 */
function simpson13({ f, a, b, n = 100 }) {
  if (typeof f !== "function") {
    throw new TypeError("f debe ser una función.");
  }

  if (typeof a !== "number" || typeof b !== "number" || a >= b) {
    throw new Error("Intervalo inválido.");
  }

  if (!Number.isInteger(n) || n <= 0 || n % 2 !== 0) {
    throw new Error("n debe ser un entero positivo y par.");
  }

  const h = (b - a) / n;

  let suma = 0;

  const iteraciones = [];

  for (let i = 0; i <= n; i++) {
    const xi = a + i * h;
    const fxi = f(xi);

    let coeficiente;

    if (i === 0 || i === n) {
      coeficiente = 1;
    } else if (i % 2 === 0) {
      coeficiente = 2;
    } else {
      coeficiente = 4;
    }

    suma += coeficiente * fxi;

    iteraciones.push({
      i,
      xi,
      fxi,
      coeficiente,
    });
  }

  const resultado = (h / 3) * suma;

  return {
    metodo: "Regla de Simpson 1/3",
    resultado,
    iteraciones,
  };
}

export { simpson13 };

export default simpson13;
