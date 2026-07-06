import { newtonDD } from '../../../src/interpolacion/newton-dd.js';
import { lagrange } from '../../../src/interpolacion/lagrange.js';

describe('newtonDD - interpolación por diferencias divididas de Newton', () => {
  test('interpola puntos de f(x) = x² correctamente', () => {
    // Puntos de f(x) = x²: (0,0), (1,1), (2,4), (3,9)
    const puntos = [
      [0, 0],
      [1, 1],
      [2, 4],
      [3, 9],
    ];
    const x = 1.5;
    const valorEsperado = 2.25; // f(1.5) = 1.5² = 2.25

    const res = newtonDD({ puntos, x });

    expect(res.resultado).toBeCloseTo(valorEsperado, 5);
  });

  test('interpola puntos de f(x) = x³ correctamente', () => {
    // Puntos de f(x) = x³: (0,0), (1,1), (2,8), (3,27)
    const puntos = [
      [0, 0],
      [1, 1],
      [2, 8],
      [3, 27],
    ];
    const x = 1.5;
    const valorEsperado = 3.375; // f(1.5) = 1.5³ = 3.375

    const res = newtonDD({ puntos, x });

    expect(res.resultado).toBeCloseTo(valorEsperado, 5);
  });

  test('coincide con lagrange para el mismo conjunto de puntos', () => {
    const puntos = [
      [0, 1],
      [1, 2],
      [2, 5],
      [3, 10],
    ];
    const x = 1.5;

    const resNewton = newtonDD({ puntos, x });
    const resLagrange = lagrange({ puntos, x });

    expect(resNewton.resultado).toBeCloseTo(resLagrange.resultado, 10);
  });

  test('coincide con lagrange para polinomio lineal', () => {
    const puntos = [
      [0, 0],
      [2, 4],
    ];
    const x = 1;

    const resNewton = newtonDD({ puntos, x });
    const resLagrange = lagrange({ puntos, x });

    expect(resNewton.resultado).toBeCloseTo(resLagrange.resultado, 10);
    expect(resNewton.resultado).toBeCloseTo(2, 5); // f(x) = 2x, f(1) = 2
  });

  test('coincide con lagrange para polinomio cuadrático', () => {
    const puntos = [
      [0, 0],
      [1, 1],
      [2, 4],
    ];
    const x = 0.5;

    const resNewton = newtonDD({ puntos, x });
    const resLagrange = lagrange({ puntos, x });

    expect(resNewton.resultado).toBeCloseTo(resLagrange.resultado, 10);
    expect(resNewton.resultado).toBeCloseTo(0.25, 5); // f(x) = x², f(0.5) = 0.25
  });

  test('coincide con lagrange para polinomio cúbico', () => {
    const puntos = [
      [0, 0],
      [1, 1],
      [2, 8],
      [3, 27],
    ];
    const x = 2.5;

    const resNewton = newtonDD({ puntos, x });
    const resLagrange = lagrange({ puntos, x });

    expect(resNewton.resultado).toBeCloseTo(resLagrange.resultado, 10);
    expect(resNewton.resultado).toBeCloseTo(15.625, 5); // f(x) = x³, f(2.5) = 15.625
  });

  test('puntos con x repetidos lanza error', () => {
    const puntos = [
      [0, 0],
      [1, 1],
      [1, 2], // x repetido
      [3, 9],
    ];

    expect(() => newtonDD({ puntos, x: 1.5 })).toThrow(
      'existen dos o más puntos con el mismo valor de x'
    );
  });

  test('menos de 2 puntos lanza error', () => {
    const puntos = [[0, 0]];

    expect(() => newtonDD({ puntos, x: 1.5 })).toThrow(
      'debe ser un array con al menos dos pares'
    );
  });

  test('punto no es array lanza error', () => {
    const puntos = [
      [0, 0],
      'not an array',
      [2, 4],
    ];

    expect(() => newtonDD({ puntos, x: 1.5 })).toThrow(
      'debe ser un par [xi, yi]'
    );
  });

  test('punto sin suficientes elementos lanza error', () => {
    const puntos = [
      [0, 0],
      [1], // solo un elemento
      [2, 4],
    ];

    expect(() => newtonDD({ puntos, x: 1.5 })).toThrow(
      'debe ser un par [xi, yi]'
    );
  });

  test('x no válido lanza error', () => {
    const puntos = [
      [0, 0],
      [1, 1],
      [2, 4],
    ];

    expect(() => newtonDD({ puntos, x: 'not a number' })).toThrow();
    expect(() => newtonDD({ puntos, x: NaN })).toThrow();
  });

  test('las iteraciones contienen nivel y valores', () => {
    const puntos = [
      [0, 0],
      [1, 1],
      [2, 4],
    ];
    const res = newtonDD({ puntos, x: 1.5 });

    expect(res.iteraciones).toHaveLength(3);
    expect(res.iteraciones[0]).toHaveProperty('nivel');
    expect(res.iteraciones[0]).toHaveProperty('valores');
    expect(res.iteraciones[0].nivel).toBe(0);
  });

  test('el resultado contiene meta con método, parámetros y coeficientes', () => {
    const puntos = [
      [0, 0],
      [1, 1],
      [2, 4],
    ];
    const res = newtonDD({ puntos, x: 1.5 });

    expect(res.meta).toHaveProperty('metodo');
    expect(res.meta).toHaveProperty('parametros');
    expect(res.meta.metodo).toBe('newtonDD');
    expect(res.meta.parametros).toHaveProperty('puntos');
    expect(res.meta.parametros).toHaveProperty('x');
    expect(res.meta.parametros).toHaveProperty('coeficientes');
  });
});
