import { gaussSeidel } from '../../../src/lineales/gauss-seidel.js';

describe('gauss-seidel - método iterativo para sistemas lineales', () => {
  describe('convergencia con sistema diagonalmente dominante', () => {
    test('resuelve sistema 3x3 diagonalmente dominante', () => {
      // Sistema diagonalmente dominante con solución (1, 2, 3):
      // 4x1 +  x2 +  x3 = 9
      //  x1 + 5x2 +  x3 = 14
      //  x1 +  x2 + 4x3 = 15
      const A = [
        [4, 1, 1],
        [1, 5, 1],
        [1, 1, 4]
      ];
      const b = [9, 14, 15];

      const res = gaussSeidel({ A, b });

      expect(res.convergio).toBe(true);
      expect(res.resultado[0]).toBeCloseTo(1, 5);
      expect(res.resultado[1]).toBeCloseTo(2, 5);
      expect(res.resultado[2]).toBeCloseTo(3, 5);
    });

    test('resuelve sistema 4x4 diagonalmente dominante', () => {
      // Sistema diagonalmente dominante con solución (1, 1, 1, 1):
      // 4x1 +  x2 +  x3 +  x4 = 7
      //  x1 + 4x2 +  x3 +  x4 = 7
      //  x1 +  x2 + 4x3 +  x4 = 7
      //  x1 +  x2 +  x3 + 4x4 = 7
      const A = [
        [4, 1, 1, 1],
        [1, 4, 1, 1],
        [1, 1, 4, 1],
        [1, 1, 1, 4]
      ];
      const b = [7, 7, 7, 7];

      const res = gaussSeidel({ A, b });

      expect(res.convergio).toBe(true);
      expect(res.resultado[0]).toBeCloseTo(1, 5);
      expect(res.resultado[1]).toBeCloseTo(1, 5);
      expect(res.resultado[2]).toBeCloseTo(1, 5);
      expect(res.resultado[3]).toBeCloseTo(1, 5);
    });

    test('converge con vector inicial personalizado', () => {
      const A = [
        [4, 1, 1],
        [1, 5, 1],
        [1, 1, 4]
      ];
      const b = [9, 14, 15];
      const x0 = [0, 0, 0];

      const res = gaussSeidel({ A, b, x0 });

      expect(res.convergio).toBe(true);
      expect(res.resultado[0]).toBeCloseTo(1, 5);
      expect(res.resultado[1]).toBeCloseTo(2, 5);
      expect(res.resultado[2]).toBeCloseTo(3, 5);
    });

    test('converge con tolerancia personalizada', () => {
      const A = [
        [4, 1, 1],
        [1, 5, 1],
        [1, 1, 4]
      ];
      const b = [9, 14, 15];

      const res = gaussSeidel({ A, b, tolerancia: 1e-10 });

      expect(res.convergio).toBe(true);
      expect(res.resultado[0]).toBeCloseTo(1, 9);
      expect(res.resultado[1]).toBeCloseTo(2, 9);
      expect(res.resultado[2]).toBeCloseTo(3, 9);
    });
  });

  describe('el error decrece con más iteraciones', () => {
    test('error disminuye monotónicamente en cada iteración', () => {
      const A = [
        [4, 1, 1],
        [1, 5, 1],
        [1, 1, 4]
      ];
      const b = [9, 14, 15];

      const res = gaussSeidel({ A, b });

      expect(res.iteraciones.length).toBeGreaterThan(1);

      // Verificar que el error decrece o se mantiene igual
      for (let i = 1; i < res.iteraciones.length; i++) {
        const errorActual = res.iteraciones[i].error;
        const errorAnterior = res.iteraciones[i - 1].error;
        expect(errorActual).toBeLessThanOrEqual(errorAnterior);
      }
    });

    test('error final es menor que error inicial', () => {
      const A = [
        [4, 1, 1],
        [1, 5, 1],
        [1, 1, 4]
      ];
      const b = [9, 14, 15];

      const res = gaussSeidel({ A, b });

      const errorInicial = res.iteraciones[0].error;
      const errorFinal = res.iteraciones[res.iteraciones.length - 1].error;

      expect(errorFinal).toBeLessThan(errorInicial);
    });

    test('más iteraciones producen mejor resultado', () => {
      const A = [
        [4, 1, 1],
        [1, 5, 1],
        [1, 1, 4]
      ];
      const b = [9, 14, 15];

      // Ejecutar con pocas iteraciones
      const res1 = gaussSeidel({ A, b, maxIter: 2 });

      // Ejecutar con más iteraciones
      const res2 = gaussSeidel({ A, b, maxIter: 10 });

      // El resultado con más iteraciones debe estar más cerca de la solución exacta
      const solucionExacta = [1, 2, 3];
      
      const error1 = Math.sqrt(
        res1.resultado.reduce((acc, val, i) => acc + (val - solucionExacta[i]) ** 2, 0)
      );
      
      const error2 = Math.sqrt(
        res2.resultado.reduce((acc, val, i) => acc + (val - solucionExacta[i]) ** 2, 0)
      );

      expect(error2).toBeLessThan(error1);
    });
  });

  describe('manejo de elemento diagonal cero', () => {
    test('lanza error si elemento diagonal A[0][0] es cero', () => {
      const A = [
        [0, 1, 1],
        [1, 5, 1],
        [1, 1, 4]
      ];
      const b = [9, 14, 15];

      expect(() => gaussSeidel({ A, b })).toThrow();
    });

    test('lanza error si elemento diagonal A[1][1] es cero', () => {
      const A = [
        [4, 1, 1],
        [1, 0, 1],
        [1, 1, 4]
      ];
      const b = [9, 14, 15];

      expect(() => gaussSeidel({ A, b })).toThrow();
    });

    test('lanza error si elemento diagonal A[2][2] es cero', () => {
      const A = [
        [4, 1, 1],
        [1, 5, 1],
        [1, 1, 0]
      ];
      const b = [9, 14, 15];

      expect(() => gaussSeidel({ A, b })).toThrow();
    });

    test('mensaje de error incluye índice del elemento diagonal cero', () => {
      const A = [
        [4, 1, 1],
        [1, 0, 1],
        [1, 1, 4]
      ];
      const b = [9, 14, 15];

      expect(() => gaussSeidel({ A, b })).toThrow(/A\[1\]\[1\]/);
    });

    test('mensaje de error sugiere reordenar filas', () => {
      const A = [
        [0, 1, 1],
        [1, 5, 1],
        [1, 1, 4]
      ];
      const b = [9, 14, 15];

      expect(() => gaussSeidel({ A, b })).toThrow(/reordenar/);
    });
  });

  describe('validación de parámetros', () => {
    test('iteraciones contienen número de iteración, vector x y error', () => {
      const A = [
        [4, 1, 1],
        [1, 5, 1],
        [1, 1, 4]
      ];
      const b = [9, 14, 15];

      const res = gaussSeidel({ A, b });

      expect(res.iteraciones.length).toBeGreaterThan(0);
      
      res.iteraciones.forEach((iter) => {
        expect(iter).toHaveProperty('n');
        expect(iter).toHaveProperty('x');
        expect(iter).toHaveProperty('error');
        expect(Array.isArray(iter.x)).toBe(true);
        expect(typeof iter.error).toBe('number');
      });
    });

    test('número de iteración es secuencial empezando desde 1', () => {
      const A = [
        [4, 1, 1],
        [1, 5, 1],
        [1, 1, 4]
      ];
      const b = [9, 14, 15];

      const res = gaussSeidel({ A, b });

      res.iteraciones.forEach((iter, index) => {
        expect(iter.n).toBe(index + 1);
      });
    });

    test('vector x en iteraciones tiene longitud correcta', () => {
      const A = [
        [4, 1, 1],
        [1, 5, 1],
        [1, 1, 4]
      ];
      const b = [9, 14, 15];

      const res = gaussSeidel({ A, b });

      res.iteraciones.forEach((iter) => {
        expect(iter.x.length).toBe(A.length);
      });
    });
  });

  describe('casos de borde', () => {
    test('no converge si maxIter es muy pequeño', () => {
      const A = [
        [4, 1, 1],
        [1, 5, 1],
        [1, 1, 4]
      ];
      const b = [9, 14, 15];

      const res = gaussSeidel({ A, b, maxIter: 1 });

      expect(res.convergio).toBe(false);
    });

    test('converge con maxIter suficiente', () => {
      const A = [
        [4, 1, 1],
        [1, 5, 1],
        [1, 1, 4]
      ];
      const b = [9, 14, 15];

      const res = gaussSeidel({ A, b, maxIter: 100 });

      expect(res.convergio).toBe(true);
    });
  });
});
