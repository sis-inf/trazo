import {
  validarFuncion,
  validarNumero,
} from "../utils/validaciones.js";

// METODO DE BISECCION

function biseccion({ f, a, b, tolerancia = 1e-6, maxIter = 100 }) {

  validarFuncion(f, "f");
  validarNumero(a, "a");
  validarNumero(b, "b");
  validarNumero(tolerancia, "tolerancia");

  if (a >= b) {
    throw new Error(
      `Trazo.biseccion: 'a' (${a}) debe ser menor que 'b' (${b}).`
    );
  }

  if (
    typeof maxIter !== "number" ||
    maxIter < 1 ||
    !Number.isInteger(maxIter)
  ) {
    throw new TypeError(
      "Trazo.biseccion: 'maxIter' debe ser un entero mayor a 0."
    );
  }

  if (f(a) * f(b) >= 0) {
    throw new Error(
      `Trazo.biseccion: f(a) * f(b) >= 0. ` +
      `f(${a}) = ${f(a)}, f(${b}) = ${f(b)}. ` +
      `El método de Bisección requiere que f cambie de signo en [a, b]. ` +
      `Elige un intervalo donde f(a) y f(b) tengan signos opuestos.`
    );
  }

  let izq = a;
  let der = b;
  let c = izq;

  const iteraciones = [];

  let convergencia = false;

  for (let iter = 0; iter < maxIter; iter++) {

    c = (izq + der) / 2;

    iteraciones.push(c);

    const fc = f(c);

    if (Math.abs(fc) < tolerancia) {
      convergencia = true;
      break;
    }

    if (f(izq) * fc < 0) {
      der = c;
    } else {
      izq = c;
    }
  }

  return {
    resultado: c,
    iteraciones,
    convergencia,
  };
}

export { biseccion };