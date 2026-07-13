import { det2x2, det3x3 } from '../../../src/lineales/determinant.js';

// -------------------------------------------------------------------
// Determinantes
// -------------------------------------------------------------------

describe('Funciones de Determinante', () => {
  test('Calcula correctamente el determinante de una matriz 2x2', () => {
    // | 3  8 |
    // | 4  6 |
    //
    // Cálculo manual:
    // det = (3 × 6) − (8 × 4)
    // det = 18 − 32
    // det = -14

    const matriz = [
      [3, 8],
      [4, 6]
    ];

    expect(det2x2(matriz)).toBe(-14);
  });

  test('Calcula correctamente el determinante de una matriz 3x3', () => {
    // | 1  2  3 |
    // | 0  4  5 |
    // | 1  0  6 |
    //
    // Regla de Sarrus:
    //
    // Diagonales principales:
    // (1×4×6) + (2×5×1) + (3×0×0)
    // = 24 + 10 + 0 = 34
    //
    // Diagonales secundarias:
    // (3×4×1) + (2×0×6) + (1×5×0)
    // = 12 + 0 + 0 = 12
    //
    // det = 34 − 12 = 22

    const matriz = [
      [1, 2, 3],
      [0, 4, 5],
      [1, 0, 6]
    ];

    expect(det3x3(matriz)).toBe(22);
  });

  test('Lanza error si se pasa una matriz de dimensión incorrecta a det2x2', () => {
    const matriz = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    expect(() => det2x2(matriz)).toThrow(Error);
    expect(() => det2x2(matriz)).toThrow('La matriz debe ser 2x2');
  });
});