/**
 * Módulo de operaciones básicas de álgebra de matrices.
 */

function validarMatriz(matriz, nombre = 'matriz') {
  if (!Array.isArray(matriz) || matriz.length === 0) {
    throw new Error(`${nombre} debe ser un array de arrays no vacío`);
  }
  const numColumnas = matriz[0].length;
  if (numColumnas === 0) throw new Error(`${nombre} no puede tener filas vacías`);
  for (let i = 0; i < matriz.length; i++) {
    if (!Array.isArray(matriz[i])) throw new Error(`${nombre}[${i}] no es un array`);
    if (matriz[i].length !== numColumnas) {
      throw new Error(`${nombre} no es rectangular: fila 0 tiene ${numColumnas} columnas, pero fila ${i} tiene ${matriz[i].length} columnas`);
    }
    for (let j = 0; j < matriz[i].length; j++) {
      if (typeof matriz[i][j] !== 'number' || !isFinite(matriz[i][j])) {
        throw new Error(`${nombre}[${i}][${j}] no es un número finito: ${matriz[i][j]}`);
      }
    }
  }
}

function dimensiones(matriz) {
  return [matriz.length, matriz[0].length];
}

export function sumaMatrices(A, B) {
  validarMatriz(A, 'A');
  validarMatriz(B, 'B');
  const [filasA, colsA] = dimensiones(A);
  const [filasB, colsB] = dimensiones(B);
  if (filasA !== filasB || colsA !== colsB) {
    throw new Error(`Dimensiones incompatibles para suma: A es ${filasA}x${colsA}, B es ${filasB}x${colsB}. Ambas deben ser del mismo tamaño.`);
  }
  const resultado = [];
  for (let i = 0; i < filasA; i++) {
    const fila = [];
    for (let j = 0; j < colsA; j++) fila.push(A[i][j] + B[i][j]);
    resultado.push(fila);
  }
  return resultado;
}

export function restaMatrices(A, B) {
  validarMatriz(A, 'A');
  validarMatriz(B, 'B');
  const [filasA, colsA] = dimensiones(A);
  const [filasB, colsB] = dimensiones(B);
  if (filasA !== filasB || colsA !== colsB) {
    throw new Error(`Dimensiones incompatibles para resta: A es ${filasA}x${colsA}, B es ${filasB}x${colsB}. Ambas deben ser del mismo tamaño.`);
  }
  const resultado = [];
  for (let i = 0; i < filasA; i++) {
    const fila = [];
    for (let j = 0; j < colsA; j++) fila.push(A[i][j] - B[i][j]);
    resultado.push(fila);
  }
  return resultado;
}

export function multiplicarMatrices(A, B) {
  validarMatriz(A, 'A');
  validarMatriz(B, 'B');
  const [filasA, colsA] = dimensiones(A);
  const [filasB, colsB] = dimensiones(B);
  if (colsA !== filasB) {
    throw new Error(`Dimensiones incompatibles para multiplicación: A es ${filasA}x${colsA}, B es ${filasB}x${colsB}. Las columnas de A (${colsA}) deben igualar las filas de B (${filasB}).`);
  }
  const resultado = [];
  for (let i = 0; i < filasA; i++) {
    const fila = [];
    for (let j = 0; j < colsB; j++) {
      let suma = 0;
      for (let k = 0; k < colsA; k++) suma += A[i][k] * B[k][j];
      fila.push(suma);
    }
    resultado.push(fila);
  }
  return resultado;
}

export function transpuesta(A) {
  validarMatriz(A, 'A');
  const [filas, cols] = dimensiones(A);
  const resultado = [];
  for (let j = 0; j < cols; j++) {
    const fila = [];
    for (let i = 0; i < filas; i++) fila.push(A[i][j]);
    resultado.push(fila);
  }
  return resultado;
}

export function multiplicarEscalar(escalar, A) {
  if (typeof escalar !== 'number' || !isFinite(escalar)) {
    throw new Error(`El escalar debe ser un número finito, recibido: ${escalar}`);
  }
  validarMatriz(A, 'A');
  const [filas, cols] = dimensiones(A);
  const resultado = [];
  for (let i = 0; i < filas; i++) {
    const fila = [];
    for (let j = 0; j < cols; j++) fila.push(escalar * A[i][j]);
    resultado.push(fila);
  }
  return resultado;
}
