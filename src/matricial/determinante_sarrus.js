export function determinanteSarrus(A) {
  if (
    !Array.isArray(A) ||
    A.length !== 3 ||
    A.some(fila => !Array.isArray(fila) || fila.length !== 3)
  ) {
    throw new Error('La matriz debe ser 3x3');
  }

  const principal =
    A[0][0] * A[1][1] * A[2][2] +
    A[0][1] * A[1][2] * A[2][0] +
    A[0][2] * A[1][0] * A[2][1];

  const secundaria =
    A[0][2] * A[1][1] * A[2][0] +
    A[0][0] * A[1][2] * A[2][1] +
    A[0][1] * A[1][0] * A[2][2];

  return principal - secundaria;
}
