import { lagrange } from '../../../src/interpolacion/lagrange.js';
import { newtonDD } from '../../../src/interpolacion/newton-dd.js';

describe('Interpolación de Lagrange', () => {
  test('reproduce exactamente un punto de interpolación', () => {
    const puntos = [
      [0, 1],
      [1, 3],
      [2, 5]
    ];

    const res = lagrange({ puntos, x: 1 });

    expect(res.resultado).toBeCloseTo(3, 10);
    expect(res.convergio).toBe(true);
  });

  test('evalúa correctamente una parábola', () => {
    const puntos = [
      [0, 0],
      [1, 1],
      [2, 4]
    ];

    const res = lagrange({ puntos, x: 3 });

    expect(res.resultado).toBeCloseTo(9, 10);
  });

  test('lanza error con menos de dos puntos', () => {
    expect(() =>
      lagrange({
        puntos: [[0, 1]],
        x: 0
      })
    ).toThrow();
  });
});

describe('Interpolación de Newton DD', () => {
  test('reproduce exactamente un punto de interpolación', () => {
    const puntos = [
      [0, 1],
      [1, 3],
      [2, 5]
    ];

    const res = newtonDD({ puntos, x: 2 });

    expect(res.resultado).toBeCloseTo(5, 10);
    expect(res.convergio).toBe(true);
  });

  test('evalúa correctamente una parábola', () => {
    const puntos = [
      [0, 0],
      [1, 1],
      [2, 4]
    ];

    const res = newtonDD({ puntos, x: 3 });

    expect(res.resultado).toBeCloseTo(9, 10);
  });

  test('lanza error cuando existen x repetidas', () => {
    expect(() =>
      newtonDD({
        puntos: [
          [1, 2],
          [1, 3]
        ],
        x: 1
      })
    ).toThrow();
  });
});