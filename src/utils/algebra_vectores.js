import { ErrorParametros } from '../core/errores.js';

function validarVector(v, nombre) {
  if (!Array.isArray(v)) {
    throw new ErrorParametros(`Trazo.algebraVectores: '${nombre}' debe ser un vector.`);
  }

  if (v.length === 0) {
    throw new ErrorParametros(`Trazo.algebraVectores: '${nombre}' no puede estar vacío.`);
  }

  for (const valor of v) {
    if (typeof valor !== 'number' || !Number.isFinite(valor)) {
      throw new ErrorParametros(
        `Trazo.algebraVectores: '${nombre}' solo debe contener números finitos.`
      );
    }
  }
}

function validarMismaDimension(v1, v2) {
  if (v1.length !== v2.length) {
    throw new ErrorParametros(
      `Trazo.algebraVectores: los vectores deben tener la misma dimensión. ` +
      `Se recibió ${v1.length} y ${v2.length}.`
    );
  }
}

/**
 * Suma dos vectores de la misma dimensión.
 */
export function sumaVectores(v1, v2) {
  validarVector(v1, 'v1');
  validarVector(v2, 'v2');
  validarMismaDimension(v1, v2);

  return v1.map((valor, i) => valor + v2[i]);
}

/**
 * Resta dos vectores de la misma dimensión.
 */
export function restaVectores(v1, v2) {
  validarVector(v1, 'v1');
  validarVector(v2, 'v2');
  validarMismaDimension(v1, v2);

  return v1.map((valor, i) => valor - v2[i]);
}

/**
 * Calcula el producto punto entre dos vectores de la misma dimensión.
 */
export function productoPunto(v1, v2) {
  validarVector(v1, 'v1');
  validarVector(v2, 'v2');
  validarMismaDimension(v1, v2);

  return v1.reduce((suma, valor, i) => suma + valor * v2[i], 0);
}

/**
 * Calcula el producto cruz entre dos vectores de dimensión 3.
 */
export function productoCruz(v1, v2) {
  validarVector(v1, 'v1');
  validarVector(v2, 'v2');

  if (v1.length !== 3 || v2.length !== 3) {
    throw new ErrorParametros(
      'Trazo.algebraVectores: productoCruz solo está definido para vectores de dimensión 3.'
    );
  }

  return [
    v1[1] * v2[2] - v1[2] * v2[1],
    v1[2] * v2[0] - v1[0] * v2[2],
    v1[0] * v2[1] - v1[1] * v2[0],
  ];
}

/**
 * Calcula la magnitud o norma euclidiana de un vector.
 */
export function magnitudVector(v) {
  validarVector(v, 'v');

  return Math.sqrt(productoPunto(v, v));
}

/**
 * Normaliza un vector dividiéndolo entre su magnitud.
 */
export function normalizarVector(v) {
  validarVector(v, 'v');

  const magnitud = magnitudVector(v);

  if (magnitud === 0) {
    throw new ErrorParametros(
      'Trazo.algebraVectores: no se puede normalizar el vector cero.'
    );
  }

  return v.map((valor) => valor / magnitud);
}

/**
 * Multiplica un vector por un escalar.
 */
export function escalarPorVector(escalar, v) {
  if (typeof escalar !== 'number' || !Number.isFinite(escalar)) {
    throw new ErrorParametros(
      `Trazo.algebraVectores: 'escalar' debe ser un número finito. Se recibió: ${escalar}.`
    );
  }

  validarVector(v, 'v');

  return v.map((valor) => escalar * valor);
}