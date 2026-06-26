function gaussLegendre(f, a, b, puntos) {
  let nodos;
  let pesos;

  if (puntos === 2) {
    nodos = [-1 / Math.sqrt(3), 1 / Math.sqrt(3)];
    pesos = [1, 1];
  } else if (puntos === 3) {
    nodos = [-Math.sqrt(3 / 5), 0, Math.sqrt(3 / 5)];
    pesos = [5 / 9, 8 / 9, 5 / 9];
  } else {
    throw new Error("puntos debe ser 2 o 3");
  }

  let suma = 0;

  for (let i = 0; i < nodos.length; i++) {
    const x =
      ((b - a) / 2) * nodos[i] +
      ((a + b) / 2);

    suma += pesos[i] * f(x);
  }

  return ((b - a) / 2) * suma;
}

export default gaussLegendre;