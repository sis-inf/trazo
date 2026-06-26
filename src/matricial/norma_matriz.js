/**
 * Norma euclideana de un vector.
 * ||v|| = sqrt(sum(v_i^2))
 */
export function normaEuclideana(v) {
  if (!Array.isArray(v) || v.length === 0) {
    throw new Error("El vector no puede estar vacío");
  }

  const suma = v.reduce((acc, x) => acc + x * x, 0);
  return Math.sqrt(suma);
}

/**
 * Norma infinita de un vector.
 * max(|v_i|)
 */
export function normaInfinita(v) {
  if (!Array.isArray(v) || v.length === 0) {
    throw new Error("El vector no puede estar vacío");
  }

  return Math.max(...v.map(Math.abs));
}

/**
 * Norma de Frobenius de una matriz.
 * sqrt(sum(a_ij^2))
 */
export function normaFrobenius(A) {
  if (!Array.isArray(A) || A.length === 0) {
    throw new Error("La matriz no puede estar vacía");
  }

  const suma = A.flat().reduce((acc, x) => acc + x * x, 0);
  return Math.sqrt(suma);
}
