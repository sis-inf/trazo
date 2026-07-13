/**
 * Aplica el método de punto fijo para aproximar una raíz usando x_{n+1} = g(x_n).
 *
 * @param {Function} g - Función de iteración. Debe recibir un número y devolver un número.
 * @param {number} x0 - Aproximación inicial.
 * @param {number} tolerancia - Criterio de parada basado en |x_{n+1} - x_n|.
 * @param {number} maxIteraciones - Número máximo de iteraciones permitidas.
 * @returns {{
 *   raiz: number,
 *   iteraciones: number,
 *   convergio: boolean,
 *   tabla: Array<{
 *     iteracion: number,
 *     x: number,
 *     gx: number,
 *     error: number
 *   }>
 * }} Objeto con la raíz aproximada, número de iteraciones, estado de convergencia y tabla del proceso.
 * @throws {ErrorDivergencia} Si g(x) produce NaN o Infinity durante la iteración.
 */
function puntoFijo(g, x0, tolerancia, maxIteraciones) {
  let x = x0;
  let raiz = x0;
  const tabla = [];

  for (let iteracion = 1; iteracion <= maxIteraciones; iteracion++) {
    const gx = g(x);

    // Verificar divergencia numérica inmediatamente después de evaluar g(x)
    if (typeof gx !== "number" || Number.isNaN(gx) || !isFinite(gx)) {
      throw new ErrorDivergencia(
        `Trazo.puntoFijo: divergencia numérica detectada en la iteración ${iteracion}. ` +
        `g(x) = ${gx}, lo cual indica que el método no converge numéricamente ` +
        `para los parámetros dados.`
      );
    }

    const error = Math.abs(gx - x);

    tabla.push({
      iteracion,
      x,
      gx,
      error,
    });

    raiz = gx;

    if (error < tolerancia) {
      return {
        raiz,
        iteraciones: iteracion,
        convergio: true,
        tabla,
      };
    }

    x = gx;
  }

  return {
    raiz,
    iteraciones: maxIteraciones,
    convergio: false,
    tabla,
  };
}

export { puntoFijo };