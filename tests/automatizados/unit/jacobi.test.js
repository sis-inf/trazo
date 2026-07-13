import { jacobi } from '../../../src/lineales/jacobi.js';
import { gaussSeidel } from '../../../src/lineales/gauss-seidel.js';

describe('Método de Jacobi', () => {
  test('Resuelve un sistema diagonalmente dominante conocido', () => {
    // Sistema:
    // 4x +  y +  z =  9
    //  x + 5y +  z = 14
    //  x +  y + 4z = 15
    //
    // Solución exacta:
    // x = 1
    // y = 2
    // z = 3

    const A = [
      [4, 1, 1],
      [1, 5, 1],
      [1, 1, 4]
    ];

    const b = [9, 14, 15];

    const res = jacobi({ A, b });

    expect(res.convergio).toBe(true);
    expect(res.resultado[0]).toBeCloseTo(1, 5);
    expect(res.resultado[1]).toBeCloseTo(2, 5);
    expect(res.resultado[2]).toBeCloseTo(3, 5);
  });

  test('Jacobi requiere igual o más iteraciones que Gauss-Seidel para el mismo sistema', () => {
    const A = [
      [4, 1, 1],
      [1, 5, 1],
      [1, 1, 4]
    ];

    const b = [9, 14, 15];

    const resJacobi = jacobi({ A, b });
    const resGaussSeidel = gaussSeidel({ A, b });

    expect(resJacobi.iteraciones.length)
      .toBeGreaterThanOrEqual(resGaussSeidel.iteraciones.length);
  });

  test('Lanza error cuando existe un elemento diagonal igual a cero', () => {
    const A = [
      [0, 1, 1],
      [1, 5, 1],
      [1, 1, 4]
    ];

    const b = [9, 14, 15];

    expect(() => jacobi({ A, b })).toThrow();
  });
});