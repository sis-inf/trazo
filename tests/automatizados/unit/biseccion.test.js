import { biseccion } from '../../../src/no-lineales/biseccion.js';

describe('biseccion - casos de borde', () => {
  test('encuentra la raíz de x² - 4 en [0,3]', () => {
    const f = (x) => x * x - 4;

    const res = biseccion({
      f,
      a: 0,
      b: 3,
      tolerancia: 1e-6
    });

    expect(res.convergio).toBe(true);
    expect(res.resultado).toBeCloseTo(2, 5);
  });

  test('intervalo sin cambio de signo lanza error', () => {
    const f = (x) => x * x + 1;

    expect(() =>
      biseccion({
        f,
        a: 0,
        b: 3
      })
    ).toThrow();
  });

  test('tolerancia 1e-10 produce resultado preciso', () => {
    const f = (x) => x * x - 4;

    const res = biseccion({
      f,
      a: 0,
      b: 3,
      tolerancia: 1e-10
    });

    expect(res.resultado).toBeCloseTo(2, 9);
  });

  test('las iteraciones contienen a, b, c y fc', () => {
    const f = (x) => x * x - 4;

    const res = biseccion({
      f,
      a: 0,
      b: 3
    });

    const iteracion = res.iteraciones[0];

    expect(iteracion).toHaveProperty('a');
    expect(iteracion).toHaveProperty('b');
    expect(iteracion).toHaveProperty('c');
    expect(iteracion).toHaveProperty('fc');
  });
});