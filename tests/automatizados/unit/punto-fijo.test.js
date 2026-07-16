import { puntoFijo } from '../../../src/no-lineales/punto-fijo.js';
import { ErrorConvergencia } from '../../../src/core/errores.js';

describe('puntoFijo', () => {

 test('encuentra la raíz usando una función de punto fijo convergente', () => {
  const g = (x) => (x + 2 / x) / 2;

  const res = puntoFijo({
    g,
    x0: 1,
    tolerancia: 1e-8
  });

  expect(res.convergio).toBe(true);
  expect(res.resultado).toBeCloseTo(Math.sqrt(2), 6);

  expect(res.iteraciones.length).toBeGreaterThan(0);
  expect(res.meta.metodo).toBe('Punto Fijo');
  });

  test('lanza ErrorConvergencia cuando no converge', () => {

    const g = (x) => x + 1;

    expect(() =>
      puntoFijo({
        g,
        x0: 1,
        maxIter: 5
      })
    ).toThrow(ErrorConvergencia);

  });

});
