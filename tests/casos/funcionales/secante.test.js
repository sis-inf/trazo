import { secante } from '../../../src/no-lineales/secante.js';

describe('secante', () => {
  const f = (x) => x ** 3 - x - 2;

  test('encuentra raíz de x^3 - x - 2 desde x0=1, x1=2 con tolerancia 1e-5', () => {
    const res = secante({ f, x0: 1, x1: 2, tolerancia: 1e-5 });

    expect(res.convergio).toBe(true);
    expect(res.resultado).toBeCloseTo(1.5214, 4);
    expect(res.iteraciones).toBeInstanceOf(Array);
    expect(res.iteraciones.length).toBeGreaterThan(0);
    expect(res.meta.metodo).toBe('secante');
  });
});