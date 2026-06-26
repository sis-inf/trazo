import { newtonRaphson } from '../../../src/no-lineales/newton-raphson.js';

describe('newton-raphson', () => {
  const f  = (x) => x ** 2 - 2;
  const df = (x) => 2 * x;

  test('encuentra raíz de x^2 - 2 desde x0=1 con tolerancia 1e-5', () => {
    const res = newtonRaphson({ f, df, x0: 1, tolerancia: 1e-5 });

    expect(res.convergio).toBe(true);
    expect(res.resultado).toBeCloseTo(1.4142, 4);
    expect(res.iteraciones).toBeInstanceOf(Array);
    expect(res.iteraciones.length).toBeGreaterThan(0);
    expect(res.meta.metodo).toBe('newton-raphson');
  });
});