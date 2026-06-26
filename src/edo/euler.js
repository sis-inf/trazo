import { crearResultado } from '../core/contrato.js';
import { validarFuncion, validarNumero } from '../core/validaciones.js';

/**
 * Resuelve numéricamente una EDO y' = f(x, y) usando el método de Euler.
 *
 * @param {Object} opciones
 * @param {Function} opciones.f       
 * @param {number}   opciones.x0      
 * @param {number}   opciones.y0     
 * @param {number}   opciones.h       
 * @param {number}   opciones.xFinal  
 * @returns {Object} 
 * @throws {Error} 
 *
 * @example
 * const res = euler({ f: (x, y) => y, x0: 0, y0: 1, h: 0.1, xFinal: 1 });
 * // res.resultado en x=1 es aproximadamente 2.5937
 */
export function euler({ f, x0, y0, h, xFinal }) {
    validarFuncion(f);
    validarNumero(x0);
    validarNumero(y0);
    validarNumero(h);
    validarNumero(xFinal);
    if (h <= 0) {
        throw new Error('El paso h debe ser mayor que cero.');
    }
    if (xFinal <= x0) {
        throw new Error('xFinal debe ser mayor que x0.');
    }
    const iteraciones = [];
    const resultado   = [];
    let x = x0;
    let y = y0;
    let n = 0;
    while (x <= xFinal + 1e-10) {
        const fxy = f(x, y);
        iteraciones.push({ n, x, y, fxy });
        resultado.push([x, y]);
        y = y + h * fxy;
        x = x + h;
        n++;
    }
    return crearResultado({
        resultado,
        iteraciones,
        convergio: true,
        mensaje: `Método de Euler completado con ${n} iteraciones.`,
        meta: {
            metodo: 'Euler',
            parametros: { x0, y0, h, xFinal },
        },
    });
}