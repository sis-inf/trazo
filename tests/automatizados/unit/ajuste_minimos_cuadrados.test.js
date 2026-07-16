import {
  regresionLineal,
  regresionPolinomial
} from '../../../src/analisis/ajuste_minimos_cuadrados.js';

describe('ajuste por mínimos cuadrados', () => {

  test('regresionLineal recupera pendiente e intercepto de una recta exacta', () => {

    const xs = [0, 1, 2, 3];
    const ys = [1, 3, 5, 7];

    const res = regresionLineal(xs, ys);

    expect(res.pendiente).toBeCloseTo(2, 10);
    expect(res.intercepto).toBeCloseTo(1, 10);
    expect(res.r2).toBeCloseTo(1, 10);

  });

  test('regresionPolinomial recupera los coeficientes de un polinomio conocido', () => {

    const xs = [0, 1, 2, 3];
    const ys = [1, 6, 17, 34];

    const res = regresionPolinomial(xs, ys, 2);

    expect(res.coeficientes[0]).toBeCloseTo(1, 10);
    expect(res.coeficientes[1]).toBeCloseTo(2, 10);
    expect(res.coeficientes[2]).toBeCloseTo(3, 10);
    expect(res.r2).toBeCloseTo(1, 10);

  });

});
