import { crearResultado } from '../core/contrato.js';
import { ErrorParametros, ErrorConvergencia } from '../core/errores.js';

/**
 * Encuentra la raíz de una función en un intervalo utilizando el método de falsa posición.
 *
 * @param {Object} params
 * @param {Function} params.f - Función no lineal a evaluar
 * @param {number} params.a - Extremo izquierdo del intervalo
 * @param {number} params.b - Extremo derecho del intervalo
 * @param {number} params.tolerancia - Criterio de parada para la precisión
 * @param {number} params.maxIter - Número máximo de iteraciones permitidas
 * @returns {Object} Objeto de resultado uniforme según el contrato de Trazo
 * @throws {ErrorParametros} Si f(a) * f(b) >= 0 o si los parámetros son inválidos
 * @throws {ErrorConvergencia} Si se alcanza maxIter sin lograr la convergencia
 */
export function falsaPosicion({ f, a, b, tolerancia, maxIter }) {
    let fa = f(a);
    let fb = f(b);

    if (fa * fb >= 0) {
        throw new ErrorParametros("El intervalo [a, b] no contiene una raíz válida (f(a) y f(b) deben tener signos opuestos).");
    }

    const iteraciones = [];
    let cAnterior = null;
    let convergio = false;

    for (let n = 1; n <= maxIter; n++) {
        const c = (a * fb - b * fa) / (fb - fa);
        const fc = f(c);

        let error = null;
        if (cAnterior !== null) {
            error = Math.abs(c - cAnterior);
        }

        iteraciones.push({
            n,
            a,
            b,
            c,
            fa,
            fb,
            fc,
            error
        });

        if (Math.abs(fc) < tolerancia || (error !== null && error < tolerancia)) {
            convergio = true;
            return crearResultado({
                resultado: c,
                iteraciones,
                convergio: true,
                mensaje: "El método de falsa posición convergió con éxito.",
                meta: {
                    metodo: "Falsa Posición",
                    parametros: { a, b, tolerancia, maxIter }
                }
            });
        }

        if (fa * fc < 0) {
            b = c;
            fb = fc;
        } else {
            a = c;
            fa = fc;
        }

        cAnterior = c;
    }

    throw new ErrorConvergencia(`Se alcanzó el máximo de iteraciones (${maxIter}) sin lograr la convergencia.`);
}