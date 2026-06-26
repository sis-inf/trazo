export function linearInterpolation(x0, y0, x1, y1, x) {
    if (x0 === x1) {
        throw new Error("x0 y x1 no pueden ser iguales");
    }

    return y0 + ((y1 - y0) / (x1 - x0)) * (x - x0);
}