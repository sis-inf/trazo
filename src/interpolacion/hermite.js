import { ErrorParametros } from '../core/errores.js';

function validarNumero(valor, nombre) {
  if (typeof valor !== 'number' || !Number.isFinite(valor)) {
    throw new ErrorParametros(
      `Trazo.hermite: '${nombre}' debe ser un número finito. Se recibió: ${valor}.`
    );
  }
}

function validarEntrada({ puntos, derivadas, x }) {
  if (!Array.isArray(puntos) || puntos.length === 0) {
    throw new ErrorParametros(
      "Trazo.hermite: 'puntos' debe ser un arreglo no vacío de pares [xi, yi]."
    );
  }

  if (!Array.isArray(derivadas) || derivadas.length !== puntos.length) {
    throw new ErrorParametros(
      "Trazo.hermite: 'derivadas' debe ser un arreglo paralelo con la misma longitud que 'puntos'."
    );
  }

  validarNumero(x, 'x');

  const nodos = new Set();

  puntos.forEach((punto, i) => {
    if (!Array.isArray(punto) || punto.length !== 2) {
      throw new ErrorParametros(
        `Trazo.hermite: puntos[${i}] debe ser un par [xi, yi].`
      );
    }

    const [xi, yi] = punto;

    validarNumero(xi, `puntos[${i}][0]`);
    validarNumero(yi, `puntos[${i}][1]`);
    validarNumero(derivadas[i], `derivadas[${i}]`);

    if (nodos.has(xi)) {
      throw new ErrorParametros(
        `Trazo.hermite: los nodos xi deben ser distintos. El valor ${xi} está repetido.`
      );
    }

    nodos.add(xi);
  });
}

function baseLagrange(i, puntos, x) {
  const xi = puntos[i][0];
  let producto = 1;

  for (let j = 0; j < puntos.length; j++) {
    if (j !== i) {
      const xj = puntos[j][0];
      producto *= (x - xj) / (xi - xj);
    }
  }

  return producto;
}

function derivadaBaseLagrangeEnNodo(i, puntos) {
  const xi = puntos[i][0];
  let suma = 0;

  for (let j = 0; j < puntos.length; j++) {
    if (j !== i) {
      const xj = puntos[j][0];
      suma += 1 / (xi - xj);
    }
  }

  return suma;
}

/**
 * Evalúa el polinomio interpolante de Hermite en un punto x.
 *
 * La interpolación de Hermite usa tanto los valores de la función como las
 * derivadas conocidas en cada nodo. Por eso el polinomio resultante cumple:
 *
 * H(xi) = yi
 * H'(xi) = y'i
 *
 * para cada nodo xi de entrada.
 *
 * @param {Object} params - Parámetros de interpolación.
 * @param {Array<[number, number]>} params.puntos - Pares [xi, yi].
 * @param {number[]} params.derivadas - Derivadas y'i en cada nodo xi.
 * @param {number} params.x - Punto donde se evaluará el polinomio de Hermite.
 * @returns {number} Valor interpolado H(x).
 *
 * @example
 * const valor = hermite({
 *   puntos: [[0, 1], [1, 2]],
 *   derivadas: [0, 3],
 *   x: 0.5,
 * });
 */
function hermite({ puntos, derivadas, x }) {
  validarEntrada({ puntos, derivadas, x });

  let resultado = 0;

  for (let i = 0; i < puntos.length; i++) {
    const [xi, yi] = puntos[i];
    const derivadaYi = derivadas[i];

    const li = baseLagrange(i, puntos, x);
    const liDerivadaEnXi = derivadaBaseLagrangeEnNodo(i, puntos);

    const hBase =
      (1 - 2 * (x - xi) * liDerivadaEnXi) * li * li;

    const kBase =
      (x - xi) * li * li;

    resultado += yi * hBase + derivadaYi * kBase;
  }

  return resultado;
}

export { hermite };