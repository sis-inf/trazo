// METODO DE NEWTON-RAPHSON

import { crearResultado, medirTiempo } from "../core/contrato.js";
import { ErrorDominio } from "../core/errores.js";
import {
  validarFuncion,
  validarNumero,
  validarTolerancia,
  validarIteraciones,
} from "../utils/validaciones.js";

/**
 * Encuentra una raíz mediante el método de Newton-Raphson.
 *
 * @param {Object} opciones
 * @param {Function} opciones.f Función objetivo.
 * @param {Function} opciones.df Derivada de la función.
 * @param {number} opciones.x0 Aproximación inicial.
 * @param {number} [opciones.tolerancia=1e-6]
 * @param {number} [opciones.maxIter=100]
 * @returns {Object} Resultado siguiendo el contrato de Trazo.
 */
function newtonRaphson({
  f,
  df,
  x0,
  tolerancia = 1e-6,
  maxIter = 100,
}) {
  validarFuncion(f, "f");
  validarFuncion(df, "df");
  validarNumero(x0, "x0");
  validarTolerancia(tolerancia);
  validarIteraciones(maxIter);

  const { valor, tiempo_ms } = medirTiempo(() => {
    let x = x0;
    const iteraciones = [];
    let convergio = false;

    for (let n = 1; n <= maxIter; n++) {
      const fx = f(x);
      const dfx = df(x);

      if (dfx === 0) {
        throw new ErrorDominio(
          `Trazo.newtonRaphson: la derivada es cero en x = ${x}.`
        );
      }

      const siguiente = x - fx / dfx;
      const error = Math.abs(siguiente - x);

      iteraciones.push({
        n,
        x,
        fx,
        dfx,
        error,
      });

      if (error < tolerancia) {
        convergio = true;
        x = siguiente;
        break;
      }

      x = siguiente;
    }

    return {
      resultado: x,
      iteraciones,
      convergio,
    };
  });

  return crearResultado({
    resultado: valor.resultado,
    iteraciones: valor.iteraciones,
    convergio: valor.convergio,
    mensaje: valor.convergio
      ? "Método convergió correctamente."
      : "Se alcanzó el máximo de iteraciones sin converger.",
    meta: {
      metodo: "newton-raphson",
      parametros: {
        x0,
        tolerancia,
        maxIter,
      },
      tiempo_ms,
    },
  });
}

export { newtonRaphson };