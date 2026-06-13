// tests/automatizados/unit/gauss.test.js
// Issue #277

import { gauss } from '../../../src/lineales/gauss.js';
import { gaussJordan } from '../../../src/lineales/gauss-jordan.js';

describe('Método de Gauss', () => {
  
  test('Sistema 2x2 - solución conocida', () => {
    const A = [[2, 3], [3, 2]];
    const b = [8, 7];
    const result = gauss({ A, b });
    expect(result.resultado[0]).toBeCloseTo(1, 5);
    expect(result.resultado[1]).toBeCloseTo(2, 5);
  });

  test('Sistema 3x3 - solución conocida', () => {
    const A = [[1, 1, 1], [2, 1, 0], [1, 0, 1]];
    const b = [6, 4, 4];
    const result = gauss({ A, b });
    expect(result.resultado[0]).toBeCloseTo(1, 5);
    expect(result.resultado[1]).toBeCloseTo(2, 5);
    expect(result.resultado[2]).toBeCloseTo(3, 5);
  });

  test('Matriz singular - lanza error', () => {
    const A = [[1, 2], [2, 4]];
    const b = [3, 6];
    expect(() => gauss({ A, b })).toThrow();
  });

  test('Resultado tiene dimensiones correctas', () => {
    const A = [[2, 1], [1, 1]];
    const b = [5, 3];
    const result = gauss({ A, b });
    expect(result.resultado.length).toBe(2);
    expect(Array.isArray(result.resultado)).toBe(true);
  });
});

describe('Método de Gauss-Jordan', () => {
  
  test('Sistema 2x2 - solución conocida', () => {
    const A = [[2, 3], [3, 2]];
    const b = [8, 7];
    const result = gaussJordan({ A, b });
    expect(result.resultado[0]).toBeCloseTo(1, 5);
    expect(result.resultado[1]).toBeCloseTo(2, 5);
  });

  test('Sistema 3x3 - solución conocida', () => {
    const A = [[1, 1, 1], [2, 1, 0], [1, 0, 1]];
    const b = [6, 4, 4];
    const result = gaussJordan({ A, b });
    expect(result.resultado[0]).toBeCloseTo(1, 5);
    expect(result.resultado[1]).toBeCloseTo(2, 5);
    expect(result.resultado[2]).toBeCloseTo(3, 5);
  });

  test('Matriz singular - lanza error', () => {
    const A = [[1, 2], [2, 4]];
    const b = [3, 6];
    expect(() => gaussJordan({ A, b })).toThrow();
  });

  test('Resultado tiene dimensiones correctas', () => {
    const A = [[2, 1], [1, 1]];
    const b = [5, 3];
    const result = gaussJordan({ A, b });
    expect(result.resultado.length).toBe(2);
    expect(Array.isArray(result.resultado)).toBe(true);
  });
});
