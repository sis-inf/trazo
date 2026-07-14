import { linearInterpolation } from '../../../src/interpolacion/linear.js';
import { polyEval } from '../../../src/interpolacion/polyEval.js';

describe('linearInterpolation', () => {
  test('interpola correctamente entre dos puntos conocidos', () => {
    // Puntos: (2, 4) y (6, 12)
    // y = 4 + (4 - 2) * (12 - 4) / (6 - 2) = 8

    const resultado = linearInterpolation(2, 4, 6, 12, 4);

    expect(resultado).toBeCloseTo(8, 10);
  });
});

describe('polyEval', () => {
  test('evalúa correctamente un polinomio mediante Horner', () => {
    // P(x) = 2x² + 3x + 1
    // P(2) = 2(2²) + 3(2) + 1 = 15

    const coeficientes = [2, 3, 1];

    const resultado = polyEval(coeficientes, 2);

    expect(resultado).toBe(15);
  });
});