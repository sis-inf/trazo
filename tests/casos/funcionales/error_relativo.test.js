import { newtonRaphson } from '../../../src/no-lineales/newton-raphson.js';

describe('error relativo - newton-raphson', () => {
  test('el error en cada iteración decrece hasta ser menor a tolerancia', () => {
    const f  = (x) => x ** 2 - 2;
    const df = (x) => 2 * x;
    const tolerancia = 1e-5;

    const res = newtonRaphson({ f, df, x0: 1, tolerancia });

    expect(res.convergio).toBe(true);

    // El error de la última iteración debe ser menor a la tolerancia
    const ultimaIter = res.iteraciones.at(-1);
    expect(ultimaIter.error).toBeLessThan(tolerancia);

    // El resultado debe estar muy cerca de √2
    expect(Math.abs(res.resultado - Math.SQRT2)).toBeLessThan(tolerancia);
  });
});