import { derivative } from '../../../src/integracion/derivative.js';

describe('derivative - derivada numérica por diferencias finitas centradas', () => {
  test('calcula derivada de f(x) = x² en x=2', () => {
    const f = (x) => x * x;
    const x = 2;
    const valorExacto = 4; // f'(x) = 2x, f'(2) = 4
    const resultado = derivative(f, x);

    expect(resultado).toBeCloseTo(valorExacto, 5);
  });

  test('calcula derivada de f(x) = x² en x=0', () => {
    const f = (x) => x * x;
    const x = 0;
    const valorExacto = 0; // f'(x) = 2x, f'(0) = 0
    const resultado = derivative(f, x);

    expect(resultado).toBeCloseTo(valorExacto, 5);
  });

  test('calcula derivada de f(x) = x³ en x=3', () => {
    const f = (x) => x ** 3;
    const x = 3;
    const valorExacto = 27; // f'(x) = 3x², f'(3) = 27
    const resultado = derivative(f, x);

    expect(resultado).toBeCloseTo(valorExacto, 5);
  });

  test('calcula derivada de f(x) = sin(x) en x=0', () => {
    const f = (x) => Math.sin(x);
    const x = 0;
    const valorExacto = 1; // f'(x) = cos(x), f'(0) = 1
    const resultado = derivative(f, x);

    expect(resultado).toBeCloseTo(valorExacto, 5);
  });

  test('calcula derivada de f(x) = e^x en x=1', () => {
    const f = (x) => Math.exp(x);
    const x = 1;
    const valorExacto = Math.E; // f'(x) = e^x, f'(1) = e
    const resultado = derivative(f, x);

    expect(resultado).toBeCloseTo(valorExacto, 5);
  });

  test('calcula derivada de f(x) = ln(x) en x=1', () => {
    const f = (x) => Math.log(x);
    const x = 1;
    const valorExacto = 1; // f'(x) = 1/x, f'(1) = 1
    const resultado = derivative(f, x);

    expect(resultado).toBeCloseTo(valorExacto, 5);
  });

  test('usa valor por defecto de h=1e-5', () => {
    const f = (x) => x * x;
    const x = 2;
    const resultado = derivative(f, x);

    expect(resultado).toBeCloseTo(4, 5);
  });

  test('usa valor personalizado de h', () => {
    const f = (x) => x * x;
    const x = 2;
    const h = 1e-3;
    const resultado = derivative(f, x, h);

    expect(resultado).toBeCloseTo(4, 3);
  });

  test('f no función lanza error', () => {
    expect(() => derivative('not a function', 2)).toThrow(
      "El parámetro 'f' debe ser una función"
    );
    expect(() => derivative(123, 2)).toThrow(
      "El parámetro 'f' debe ser una función"
    );
    expect(() => derivative(null, 2)).toThrow(
      "El parámetro 'f' debe ser una función"
    );
  });

  test('x no número válido lanza error', () => {
    const f = (x) => x * x;

    expect(() => derivative(f, 'not a number')).toThrow(
      "El parámetro 'x' debe ser un número válido"
    );
    expect(() => derivative(f, NaN)).toThrow(
      "El parámetro 'x' debe ser un número válido"
    );
    expect(() => derivative(f, null)).toThrow(
      "El parámetro 'x' debe ser un número válido"
    );
  });

  test('h no positivo lanza error', () => {
    const f = (x) => x * x;

    expect(() => derivative(f, 2, 0)).toThrow(
      "El parámetro 'h' debe ser un número positivo"
    );
    expect(() => derivative(f, 2, -1e-5)).toThrow(
      "El parámetro 'h' debe ser un número positivo"
    );
    expect(() => derivative(f, 2, -0.001)).toThrow(
      "El parámetro 'h' debe ser un número positivo"
    );
  });
});
