import { simpsonCompuesto } from '../../../src/integracion/simpson_compuesto.js';

describe('simpsonCompuesto - integración numérica', () => {
  const valorExacto = 1 / 3; // ∫₀¹ x² dx = 1/3

  test('integra f(x) = x² en [0,1] con n=2', () => {
    const f = (x) => x * x;
    const res = simpsonCompuesto(f, 0, 1, 2);

    expect(res.convergio).toBe(true);
    expect(res.resultado).toBeCloseTo(valorExacto, 1);
  });

  test('integra f(x) = x² en [0,1] con n=4', () => {
    const f = (x) => x * x;
    const res = simpsonCompuesto(f, 0, 1, 4);

    expect(res.convergio).toBe(true);
    expect(res.resultado).toBeCloseTo(valorExacto, 2);
  });

  test('integra f(x) = x² en [0,1] con n=10', () => {
    const f = (x) => x * x;
    const res = simpsonCompuesto(f, 0, 1, 10);

    expect(res.convergio).toBe(true);
    expect(res.resultado).toBeCloseTo(valorExacto, 4);
  });

  test('integra f(x) = x² en [0,1] con n=100', () => {
    const f = (x) => x * x;
    const res = simpsonCompuesto(f, 0, 1, 100);

    expect(res.convergio).toBe(true);
    expect(res.resultado).toBeCloseTo(valorExacto, 8);
  });

  test('mayor n produce mejor precisión (para x⁴)', () => {
    const f = (x) => x ** 4;
    const valorExactoX4 = 1 / 5; // ∫₀¹ x⁴ dx = 1/5

    const resN2 = simpsonCompuesto(f, 0, 1, 2);
    const resN4 = simpsonCompuesto(f, 0, 1, 4);
    const resN100 = simpsonCompuesto(f, 0, 1, 100);

    const errorN2 = Math.abs(resN2.resultado - valorExactoX4);
    const errorN4 = Math.abs(resN4.resultado - valorExactoX4);
    const errorN100 = Math.abs(resN100.resultado - valorExactoX4);

    expect(errorN4).toBeLessThan(errorN2);
    expect(errorN100).toBeLessThan(errorN4);
  });

  test('n impar lanza error', () => {
    const f = (x) => x * x;

    expect(() => simpsonCompuesto(f, 0, 1, 3)).toThrow();
    expect(() => simpsonCompuesto(f, 0, 1, 5)).toThrow();
  });

  test('n < 2 lanza error', () => {
    const f = (x) => x * x;

    expect(() => simpsonCompuesto(f, 0, 1, 1)).toThrow();
    expect(() => simpsonCompuesto(f, 0, 1, 0)).toThrow();
    expect(() => simpsonCompuesto(f, 0, 1, -2)).toThrow();
  });

  test('las iteraciones contienen i, xi, fxi y coeficiente', () => {
    const f = (x) => x * x;
    const res = simpsonCompuesto(f, 0, 1, 4);

    const iteracion = res.iteraciones[0];

    expect(iteracion).toHaveProperty('i');
    expect(iteracion).toHaveProperty('xi');
    expect(iteracion).toHaveProperty('fxi');
    expect(iteracion).toHaveProperty('coeficiente');
  });

  test('el resultado contiene meta con método y parámetros', () => {
    const f = (x) => x * x;
    const res = simpsonCompuesto(f, 0, 1, 4);

    expect(res.meta).toHaveProperty('metodo');
    expect(res.meta).toHaveProperty('parametros');
    expect(res.meta.metodo).toBe('Simpson 1/3 Compuesto');
    expect(res.meta.parametros).toEqual({ a: 0, b: 1, n: 4 });
  });
});
