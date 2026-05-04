/**
 * @file bisection.js
 * @description Implementacion del metodo de biseccion para encontrar raices.
 */

import { create, all } from 'mathjs';
const math = create(all);

/**
 * Encuentra la raiz de una funcion en un intervalo [a, b] usando biseccion.
 *
 * @param {string} expresion - La funcion matematica
 * @param {number} a - Limite inferior del intervalo.
 * @param {number} b - Limite superior del intervalo.
 * @param {number} [tolerancia=0.001] - Precision deseada.
 * @returns {{root:number, iterations:number, steps:Array}|null}
 * Objeto con la raiz aproximada, numero de iteraciones y detalle de pasos.
 */
export default function bisection(expresion, a, b, tolerancia = 0.001) {
    const f = (x) => math.evaluate(expresion, { x: x });
    const fa = f(a);
    const fb = f(b);

    if (fa * fb >= 0) {
        console.error("VALIDACION FALLIDA: f(a) y f(b) deben tener signos opuestos.");
        return null;
    }
    let steps = [];
    let c;
    let iterCount = 0;
    while ((b - a) / 2 > tolerancia) {
        iterCount++;
        c = (a + b) / 2;
        let fc = f(c);
        steps.push({
            iteracion: iterCount,
            a: a,
            b: b,
            c: c,
            fc: fc
        });
        if (fc === 0 || (b - a) / 2 < tolerancia) {
            break;
        }
        if (math.sign(fc) === math.sign(f(a))) {
            a = c;
        } else {
            b = c;
        }
    }
    return {
        root: c,
        iterations: iterCount,
        steps: steps
    };
}