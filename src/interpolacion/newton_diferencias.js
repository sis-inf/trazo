class NumericalError extends Error {
  constructor(message) {
    super(message);
    this.name = "NumericalError";
  }
}

function newtonDiferenciasDivididas(xs, ys, x) {
  // Validaciones obligatorias del Issue #239
  if (xs.length !== ys.length) {
    throw new NumericalError("La longitud de xs e ys debe ser igual.");
  }
  if (xs.length < 2) {
    throw new NumericalError("Se requieren al menos 2 puntos para interpolar.");
  }

  const n = xs.length;
  // Crear la tabla de diferencias divididas
  const tabla = [];
  for (let i = 0; i < n; i++) {
    tabla.push(new Array(n).fill(0));
    tabla[i][0] = ys[i];
  }

  // Calcular las diferencias divididas incrementalmente
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < n - j; i++) {
      tabla[i][j] = (tabla[i + 1][j - 1] - tabla[i][j - 1]) / (xs[i + j] - xs[i]);
    }
  }

  // Evaluar el polinomio en el punto x dado
  let resultado = tabla[0][0];
  let termino = 1;

  for (let i = 1; i < n; i++) {
    termino *= (x - xs[i - 1]);
    resultado += tabla[0][i] * termino;
  }

  return resultado;
}

module.exports = { newtonDiferenciasDivididas, NumericalError };
