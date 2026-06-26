import { biseccion } from '../../../src/no-lineales/biseccion.js';
import { ErrorParametros } from '../../../src/core/errores.js';

describe('biseccion - intervalo inválido', () => {
  test('lanza ErrorParametros cuando f(a)·f(b) >= 0 (x^2+1 no tiene raíz real)', () => {
    const f = (x) => x ** 2 + 1; // siempre positiva, sin cambio de signo

    expect(() => biseccion({ f, a: 0, b: 1, tolerancia: 1e-5 }))
      .toThrow(ErrorParametros);
  });

  test('el mensaje de error menciona el problema de signo', () => {
    const f = (x) => x ** 2 + 1;

    expect(() => biseccion({ f, a: 0, b: 1 }))
      .toThrow(/f\(a\) · f\(b\) >= 0/);
  });
});