export function diferenciaCentrada(f, x, h) {
    if (h === 0) {
        throw new Error("h no puede ser 0");
    }

    return (f(x + h) - f(x - h)) / (2 * h);
}

export function diferenciaCentradaSegundaDerivada(f, x, h) {
    if (h === 0) {
        throw new Error("h no puede ser 0");
    }

    return (f(x + h) - 2 * f(x) + f(x - h)) / (h ** 2);
}