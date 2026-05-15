export function biseccion({ f, a, b, tolerancia = 1e-6, maxIter = 100 }) {
    if (f(a) * f(b) >= 0) {
        throw new Error("f(a) y f(b) deben tener signos opuestos");
    }

    let iteraciones = [];
    let c = a;
    let convergio = false;

    for (let i = 0; i < maxIter; i++) {
        c = (a + b) / 2;
        const fc = f(c);

        iteraciones.push({ iteracion: i + 1, a, b, c, fc });

        if (Math.abs(fc) < tolerancia || (b - a) / 2 < tolerancia) {
            convergio = true;
            break;
        }

        if (f(a) * fc < 0) {
            b = c;
        } else {
            a = c;
        }
    }

    return { resultado: c, iteraciones, convergio };
}
