/**
 * Verifica si el argumento es una función.
 * @param {*} fn
 */
export function validarFuncion(fn) {
  if (typeof fn !== 'function') {
    throw new Error('El argumento debe ser una función');
  }
}

/**
 * Verifica si el argumento es un número finito.
 * @param {*} n
 */
export function validarNumero(n) {
  if (typeof n !== 'number' || !Number.isFinite(n)) {
    throw new Error('El argumento debe ser un número válido');
  }
}

/**
 * Verifica si el intervalo es válido.
 * @param {number} a
 * @param {number} b
 */
export function validarIntervalo(a, b) {
  validarNumero(a);
  validarNumero(b);

  if (a >= b) {
    throw new Error('El valor a debe ser menor que b');
  }
}

/**
 * Verifica si una matriz es cuadrada.
 * @param {Array<Array<number>>} matriz
 */
export function validarMatrizCuadrada(matriz) {
  if (
    !Array.isArray(matriz) ||
    matriz.length === 0 ||
    !matriz.every(
      fila => Array.isArray(fila) && fila.length === matriz.length
    )
  ) {
    throw new Error('La matriz debe ser cuadrada');
  }
}