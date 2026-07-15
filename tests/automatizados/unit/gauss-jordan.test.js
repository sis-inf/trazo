import { gaussJordan } from '../../../src/lineales/gauss-jordan.js';
import { ErrorDominio } from '../../../src/core/errores.js';

describe('gaussJordan', () => {

  test('resuelve un sistema lineal 3x3 con solución única', () => {

    const A = [
      [2, 1, -1],
      [-3, -1, 2],
      [-2, 1, 2]
    ];

    const b = [8, -11, -3];

    const res = gaussJordan({ A, b });

    const [x, y, z] = res.resultado;

    expect(x).toBeCloseTo(2, 10);
    expect(y).toBeCloseTo(3, 10);
    expect(z).toBeCloseTo(-1, 10);

  });

  test('lanza ErrorDominio para una matriz singular', () => {

    const A = [
      [1, 2],
      [2, 4]
    ];

    const b = [3, 6];

    expect(() =>
      gaussJordan({ A, b })
    ).toThrow(ErrorDominio);

  });

});
