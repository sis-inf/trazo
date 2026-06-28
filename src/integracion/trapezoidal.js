function trapezoidal(f, a, b, n) {
  
    if (n < 1) {
        return "Error: n tiene que ser por lo menos 1";
    }
    if (a >= b) {
        return "Error: a debe ser menor que b";
    }
    let h = (b - a) / n;
    let suma = f(a) + f(b);

    for (let i = 1; i < n; i++) {
        let x = a + i * h;
        suma = suma + (2 * f(x));
    }
  
    let resultado = (h / 2) * suma;
    return resultado;
}
