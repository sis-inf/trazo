/**
 * Implementación de la regla de Simpson 1/3
 * para aproximar integrales definidas.
 */

import { crearResultado } from "../core/contrato.js";
import {
  validarFuncion,
  validarIntervalo,
  ErrorParametros,
} from "../core/validaciones.js";

/**
 * Aproxima una integral definida usando
 * la regla de Simpson 1/3.
 *
 * @param {Object} params
 * @param {Function} params.f Función a integrar
 * @param {number} params.a Extremo inferior
 * @param {number} params.b Extremo superior
 * @param {number} [params.n=100] Número de subintervalos
 * @returns {Object} Resultado siguiendo el contrato del proyecto
 */
export function simpson13({ f, a, b, n = 100 }) {
  validarFuncion(f);
  validarIntervalo(a, b);

  if (!Number.isInteger(n) || n <= 0 || n % 2 !== 0) {
    throw new ErrorParametros(
      "n debe ser un entero positivo y par",
    );
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

  return crearResultado({
    metodo: "Regla de Simpson 1/3",
    resultado,
    iteraciones,
  });
}