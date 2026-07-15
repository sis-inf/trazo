import { crearResultado } from '../core/contrato.js';
import { ErrorParametros } from '../core/errores.js';
import {
  validarFuncion,
  validarIntervalo,
  validarTolerancia,
  validarIteraciones,
} from '../utils/validaciones.js';

function validarValorFuncion(valor, nombre) {
  if (typeof valor !== 'number' || !Number.isFinite(valor)) {
    throw new ErrorParametros(
      `Trazo.brent: '${nombre}' debe devolver un número finito. Se recibió: ${valor}.`
    );
  }
}

function intercambiarEstado(estado) {
  const tempA = estado.a;
  const tempFa = estado.fa;

  estado.a = estado.b;
  estado.fa = estado.fb;
  estado.b = tempA;
  estado.fb = tempFa;
}

function estaEntre(valor, extremo1, extremo2) {
  const minimo = Math.min(extremo1, extremo2);
  const maximo = Math.max(extremo1, extremo2);

  return valor > minimo && valor < maximo;
}

/**
 * Encuentra una raíz de f(x) = 0 usando el método de Brent.
 *
 * El método de Brent combina bisección, secante e interpolación cuadrática
 * inversa. Mantiene la robustez de un intervalo con cambio de signo, pero
 * puede acelerar la convergencia cuando la interpolación produce un paso
 * confiable.
 *
 * @param {Object} params - Parámetros del método.
 * @param {Function} params.f - Función f(x).
 * @param {number} params.a - Extremo izquierdo del intervalo.
 * @param {number} params.b - Extremo derecho del intervalo.
 * @param {number} [params.tolerancia=1e-6] - Tolerancia de convergencia.
 * @param {number} [params.maxIter=100] - Máximo de iteraciones.
 * @returns {Object} Resultado siguiendo el contrato de Trazo.
 * @throws {ErrorParametros} Si los parámetros son inválidos o f(a) y f(b)
 * no tienen signos opuestos.
 */
function brent({ f, a, b, tolerancia = 1e-6, maxIter = 100 }) {
  validarFuncion(f, 'f');
  validarIntervalo(a, b);
  validarTolerancia(tolerancia);
  validarIteraciones(maxIter);

  let fa = f(a);
  let fb = f(b);

  validarValorFuncion(fa, 'f(a)');
  validarValorFuncion(fb, 'f(b)');

  if (fa === 0) {
    return crearResultado({
      resultado: a,
      iteraciones: [],
      convergio: true,
      mensaje: 'La raíz se encontró en el extremo izquierdo del intervalo.',
      meta: {
        metodo: 'brent',
        parametros: { a, b, tolerancia, maxIter },
        tiempo_ms: 0,
      },
    });
  }

  if (fb === 0) {
    return crearResultado({
      resultado: b,
      iteraciones: [],
      convergio: true,
      mensaje: 'La raíz se encontró en el extremo derecho del intervalo.',
      meta: {
        metodo: 'brent',
        parametros: { a, b, tolerancia, maxIter },
        tiempo_ms: 0,
      },
    });
  }

  if (fa * fb > 0) {
    throw new ErrorParametros(
      `Trazo.brent: f(a) y f(b) deben tener signos opuestos. ` +
      `f(${a}) = ${fa}, f(${b}) = ${fb}.`
    );
  }

  const estado = { a, b, fa, fb };

  if (Math.abs(estado.fa) < Math.abs(estado.fb)) {
    intercambiarEstado(estado);
  }

  let c = estado.a;
  let fc = estado.fa;
  let d = c;
  let usarBiseccion = true;
  let convergio = false;
  let raiz = estado.b;

  const iteraciones = [];

  for (let n = 1; n <= maxIter; n++) {
    let s;
    let metodoPaso;

    if (
      estado.fa !== fc &&
      estado.fb !== fc
    ) {
      s =
        (estado.a * estado.fb * fc) / ((estado.fa - estado.fb) * (estado.fa - fc)) +
        (estado.b * estado.fa * fc) / ((estado.fb - estado.fa) * (estado.fb - fc)) +
        (c * estado.fa * estado.fb) / ((fc - estado.fa) * (fc - estado.fb));

      metodoPaso = 'interpolacion_cuadratica_inversa';
    } else {
      s = estado.b - estado.fb * ((estado.b - estado.a) / (estado.fb - estado.fa));
      metodoPaso = 'secante';
    }

    const limiteInferior = (3 * estado.a + estado.b) / 4;

    const condicion1 = !estaEntre(s, limiteInferior, estado.b);
    const condicion2 = usarBiseccion && Math.abs(s - estado.b) >= Math.abs(estado.b - c) / 2;
    const condicion3 = !usarBiseccion && Math.abs(s - estado.b) >= Math.abs(c - d) / 2;
    const condicion4 = usarBiseccion && Math.abs(estado.b - c) < tolerancia;
    const condicion5 = !usarBiseccion && Math.abs(c - d) < tolerancia;

    if (
      condicion1 ||
      condicion2 ||
      condicion3 ||
      condicion4 ||
      condicion5
    ) {
      s = (estado.a + estado.b) / 2;
      usarBiseccion = true;
      metodoPaso = 'biseccion';
    } else {
      usarBiseccion = false;
    }

    const fs = f(s);
    validarValorFuncion(fs, 'f(s)');

    d = c;
    c = estado.b;
    fc = estado.fb;

    if (estado.fa * fs < 0) {
      estado.b = s;
      estado.fb = fs;
    } else {
      estado.a = s;
      estado.fa = fs;
    }

    if (Math.abs(estado.fa) < Math.abs(estado.fb)) {
      intercambiarEstado(estado);
    }

    raiz = estado.b;

    const error = Math.abs(estado.b - estado.a);

    iteraciones.push({
      n,
      a: estado.a,
      b: estado.b,
      c,
      s,
      fa: estado.fa,
      fb: estado.fb,
      fc,
      fs,
      error,
      metodoPaso,
    });

    if (Math.abs(estado.fb) === 0 || error < tolerancia) {
      convergio = true;
      break;
    }
  }

  return crearResultado({
    resultado: raiz,
    iteraciones,
    convergio,
    mensaje: convergio
      ? `Convergió en ${iteraciones.length} iteraciones.`
      : `Se alcanzó el máximo de ${maxIter} iteraciones sin converger.`,
    meta: {
      metodo: 'brent',
      parametros: { a, b, tolerancia, maxIter },
      tiempo_ms: 0,
    },
  });
}

export { brent };