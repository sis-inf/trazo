import { trapecio } from '../../../src/integracion/trapecio.js';

describe('trapecio - integración numérica', () => {
  const valorExacto = 1 / 3; // ∫₀¹ x² dx = 1/3

  test('integra f(x) = x² en [0,1] con n=10', () => {
    const f = (x) => x * x;
    const res = trapecio({ f, a: 0, b: 1, n: 10 });

    expect(res.convergio).toBe(true);
    expect(res.resultado).toBeCloseTo(valorExacto, 1);
  });

  test('integra f(x) = x² en [0,1] con n=100', () => {
    const f = (x) => x * x;
    const res = trapecio({ f, a: 0, b: 1, n: 100 });

    expect(res.convergio).toBe(true);
    expect(res.resultado).toBeCloseTo(valorExacto, 2);
  });

  test('integra f(x) = x² en [0,1] con n=1000', () => {
    const f = (x) => x * x;
    const res = trapecio({ f, a: 0, b: 1, n: 1000 });

    expect(res.convergio).toBe(true);
    expect(res.resultado).toBeCloseTo(valorExacto, 4);
  });

  test('integra f(x) = x³ en [0,1] con n=100', () => {
    const f = (x) => x ** 3;
    const valorExactoX3 = 1 / 4; // ∫₀¹ x³ dx = 1/4
    const res = trapecio({ f, a: 0, b: 1, n: 100 });

    expect(res.convergio).toBe(true);
    expect(res.resultado).toBeCloseTo(valorExactoX3, 2);
  });

  test('n no entero positivo lanza error', () => {
    const f = (x) => x * x;

    expect(() => trapecio({ f, a: 0, b: 1, n: 0 })).toThrow();
    expect(() => trapecio({ f, a: 0, b: 1, n: -5 })).toThrow();
    expect(() => trapecio({ f, a: 0, b: 1, n: 3.5 })).toThrow();
    expect(() => trapecio({ f, a: 0, b: 1, n: -2 })).toThrow();
  });

  test('intervalo inválido (a >= b) lanza error', () => {
    const f = (x) => x * x;

    expect(() => trapecio({ f, a: 1, b: 1, n: 10 })).toThrow();
    expect(() => trapecio({ f, a: 2, b: 1, n: 10 })).toThrow();
  });

  test('las iteraciones contienen i, xi, fxi y area', () => {
    const f = (x) => x * x;
    const res = trapecio({ f, a: 0, b: 1, n: 4 });

    const iteracion = res.iteraciones[0];

    expect(iteracion).toHaveProperty('i');
    expect(iteracion).toHaveProperty('xi');
    expect(iteracion).toHaveProperty('fxi');
    expect(iteracion).toHaveProperty('area');
  });

  test('el resultado contiene meta con método y parámetros', () => {
    const f = (x) => x * x;
    const res = trapecio({ f, a: 0, b: 1, n: 100 });

    expect(res.meta).toHaveProperty('metodo');
    expect(res.meta).toHaveProperty('parametros');
    expect(res.meta.metodo).toBe('trapecio');
    expect(res.meta.parametros).toEqual({ f, a: 0, b: 1, n: 100 });
  });

  test('valor por defecto de n es 100', () => {
    const f = (x) => x * x;
    const res = trapecio({ f, a: 0, b: 1 });

    expect(res.meta.parametros.n).toBe(100);
    expect(res.convergio).toBe(true);
    expect(res.resultado).toBeCloseTo(valorExacto, 2);
  });
});
