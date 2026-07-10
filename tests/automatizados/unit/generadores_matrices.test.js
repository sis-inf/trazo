import {
  matrizIdentidad,
  matrizHilbert,
  matrizDiagonalDominante,
  matrizSimetricaDefinidaPositiva,
  esDiagonalDominante,
  esSimetrica,
} from '../../../src/utils/generadores_matrices.js';

// -------------------------------------------------------------------
// matrizIdentidad
// -------------------------------------------------------------------

describe('matrizIdentidad', () => {
  test('Crea matriz identidad 2x2 correctamente', () => {
    const I = matrizIdentidad(2);
    expect(I).toEqual([
      [1, 0],
      [0, 1],
    ]);
  });

  test('Crea matriz identidad 3x3 correctamente', () => {
    const I = matrizIdentidad(3);
    expect(I).toEqual([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ]);
  });

  test('Lanza ErrorDominio con n no entero', () => {
    expect(() => matrizIdentidad(2.5)).toThrow();
  });

  test('Lanza ErrorDominio con n negativo', () => {
    expect(() => matrizIdentidad(-1)).toThrow();
  });
});

// -------------------------------------------------------------------
// matrizHilbert
// -------------------------------------------------------------------

describe('matrizHilbert', () => {
  test('Crea matriz de Hilbert 2x2 correctamente', () => {
    const H = matrizHilbert(2);
    expect(H[0][0]).toBeCloseTo(1, 10);
    expect(H[0][1]).toBeCloseTo(1 / 2, 10);
    expect(H[1][0]).toBeCloseTo(1 / 2, 10);
    expect(H[1][1]).toBeCloseTo(1 / 3, 10);
  });

  test('Crea matriz de Hilbert 3x3 correctamente', () => {
    const H = matrizHilbert(3);
    expect(H[0][2]).toBeCloseTo(1 / 3, 10);
    expect(H[2][0]).toBeCloseTo(1 / 3, 10);
    expect(H[2][2]).toBeCloseTo(1 / 5, 10);
  });

  test('Lanza ErrorDominio con n no entero', () => {
    expect(() => matrizHilbert(2.5)).toThrow();
  });
});

// -------------------------------------------------------------------
// matrizDiagonalDominante
// -------------------------------------------------------------------

describe('matrizDiagonalDominante', () => {
  test('Produce matriz realmente diagonal dominante', () => {
    const A = matrizDiagonalDominante(4, 12345);
    expect(esDiagonalDominante(A)).toBe(true);
  });

  test('Es reproducible con la misma semilla', () => {
    const A1 = matrizDiagonalDominante(3, 42);
    const A2 = matrizDiagonalDominante(3, 42);
    expect(JSON.stringify(A1)).toBe(JSON.stringify(A2));
  });

  test('Matrices con semillas diferentes son diferentes', () => {
    const A1 = matrizDiagonalDominante(3, 1);
    const A2 = matrizDiagonalDominante(3, 2);
    expect(JSON.stringify(A1)).not.toBe(JSON.stringify(A2));
  });

  test('Lanza ErrorDominio con n no entero', () => {
    expect(() => matrizDiagonalDominante(2.5)).toThrow();
  });
});

// -------------------------------------------------------------------
// matrizSimetricaDefinidaPositiva
// -------------------------------------------------------------------

describe('matrizSimetricaDefinidaPositiva', () => {
  test('Produce matriz simetrica', () => {
    const A = matrizSimetricaDefinidaPositiva(4, 12345);
    expect(esSimetrica(A)).toBe(true);
  });

  test('Es reproducible con la misma semilla', () => {
    const A1 = matrizSimetricaDefinidaPositiva(3, 42);
    const A2 = matrizSimetricaDefinidaPositiva(3, 42);
    expect(JSON.stringify(A1)).toBe(JSON.stringify(A2));
  });

  test('Lanza ErrorDominio con n no entero', () => {
    expect(() => matrizSimetricaDefinidaPositiva(2.5)).toThrow();
  });
});

// -------------------------------------------------------------------
// Verificadores
// -------------------------------------------------------------------

describe('esDiagonalDominante', () => {
  test('Identidad es diagonal dominante', () => {
    expect(esDiagonalDominante(matrizIdentidad(3))).toBe(true);
  });

  test('Matriz no diagonal dominante', () => {
    const A = [
      [1, 10],
      [1, 1],
    ];
    expect(esDiagonalDominante(A)).toBe(false);
  });
});

describe('esSimetrica', () => {
  test('Identidad es simetrica', () => {
    expect(esSimetrica(matrizIdentidad(3))).toBe(true);
  });

  test('Matriz no simetrica', () => {
    const A = [
      [1, 2],
      [3, 4],
    ];
    expect(esSimetrica(A)).toBe(false);
  });
});