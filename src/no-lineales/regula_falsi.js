/**
 * Encuentra la raíz de una función mediante el método de Regula Falsi (Falsa Posición)
 * @param {function} f - Función no lineal a evaluar
 * @param {number} a - Extremo izquierdo del intervalo
 * @param {number} b - Extremo derecho del intervalo
 * @param {number} tolerancia - Criterio de parada para el error
 * @param {number} maxIteraciones - Número máximo de iteraciones permitidas
 * @returns {{raiz: number, iteraciones: number, convergio: boolean, tabla: object[]}} Resultados del método
 */
export function regulaFalsi(f, a, b, tolerancia, maxIteraciones) {
    const fa = f(a);
    const fb = f(b);

    if (fa * fb >= 0) {
        throw new Error("NumericalError: f(a) y f(b) deben tener signos opuestos.");
    }

    let iter = 0;
    let convergio = false;
    const tabla = [];
    
    let cCurrent = a;
    let error = info => tolerancia + 1;

    while (iter < maxIteraciones) {
        iter++;
        const f_a = f(a);
        const f_b = f(b);
        
        const cOld = cCurrent;
        cCurrent = a - (f_a * (b - a)) / (f_b - f_a);
        const f_c = f(cCurrent);

        error = iter === 1 ? Math.abs(b - a) : Math.abs(cCurrent - cOld);

        tabla.push({
            iteracion: iter,
            a: a,
            b: b,
            c: cCurrent,
            "f(c)": f_c,
            error: error
        });

        if (Math.abs(f_c) < tolerancia || error < tolerancia) {
            convergio = true;
            break;
        }

        if (f_a * f_c < 0) {
            b = cCurrent;
        } else {
            a = cCurrent;
        }
    }

    return {
        raiz: cCurrent,
        iteraciones: iter,
        convergio: convergio,
        tabla: tabla
    };
}