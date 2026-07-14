import { romberg } from '../../../src/integracion/romberg.js';
import { simpsonCompuesto } from '../../../src/integracion/simpson_compuesto.js';

describe('romberg - integración numérica', () => {
  const valorExacto = 1 / 3; // ∫₀¹ x² dx = 1/3

  test('integra f(x) = x² en [0,1]', () => {
    const f = (x) => x * x;

    const res = romberg({
      f,
      a: 0,
      b: 1
    });

    expect(res.convergio).toBe(true);
    expect(res.resultado).toBeCloseTo(valorExacto, 8);
  });

  test('devuelve la tabla completa de Romberg', () => {
    const f = (x) => x * x;

    const res = romberg({
      f,
      a: 0,
      b: 1
    });

    expect(Array.isArray(res.iteraciones)).toBe(true);
    expect(res.iteraciones.length).toBeGreaterThan(0);
    expect(Array.isArray(res.iteraciones[0])).toBe(true);
  });

  test('incluye meta con método y parámetros', () => {
    const f = (x) => x * x;

    const res = romberg({
      f,
      a: 0,
      b: 1
    });

    expect(res.meta).toHaveProperty('metodo');
    expect(res.meta).toHaveProperty('parametros');

    expect(res.meta.metodo).toBe('romberg');

    expect(res.meta.parametros).toEqual({
      a: 0,
      b: 1,
      nMax: 10,
      tolerancia: 1e-8
    });
  });
});