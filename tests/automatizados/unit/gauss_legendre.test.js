import gaussLegendre from '../../../src/integracion/gauss_legendre.js';

describe('gaussLegendre - cuadratura de Gauss-Legendre', () => {
  // Propiedad: Gauss-Legendre con n puntos es exacta para polinomios de grado <= 2n-1

  describe('con 2 puntos (exacto para polinomios grado <= 3)', () => {
    test('integra f(x) = x (grado 1) exactamente en [-1, 1]', () => {
      const f = (x) => x;
      const valorExacto = 0; // ∫₋₁¹ x dx = 0
      const resultado = gaussLegendre(f, -1, 1, 2);

      expect(resultado).toBeCloseTo(valorExacto, 14);
    });

    test('integra f(x) = x² (grado 2) exactamente en [-1, 1]', () => {
      const f = (x) => x * x;
      const valorExacto = 2 / 3; // ∫₋₁¹ x² dx = 2/3
      const resultado = gaussLegendre(f, -1, 1, 2);

      expect(resultado).toBeCloseTo(valorExacto, 14);
    });

    test('integra f(x) = x³ (grado 3) exactamente en [-1, 1]', () => {
      const f = (x) => x ** 3;
      const valorExacto = 0; // ∫₋₁¹ x³ dx = 0
      const resultado = gaussLegendre(f, -1, 1, 2);

      expect(resultado).toBeCloseTo(valorExacto, 14);
    });

    test('integra f(x) = x² en [0, 1] (transformación de intervalo)', () => {
      const f = (x) => x * x;
      const valorExacto = 1 / 3; // ∫₀¹ x² dx = 1/3
      const resultado = gaussLegendre(f, 0, 1, 2);

      expect(resultado).toBeCloseTo(valorExacto, 14);
    });
  });

  describe('con 3 puntos (exacto para polinomios grado <= 5)', () => {
    test('integra f(x) = x⁴ (grado 4) exactamente en [-1, 1]', () => {
      const f = (x) => x ** 4;
      const valorExacto = 2 / 5; // ∫₋₁¹ x⁴ dx = 2/5
      const resultado = gaussLegendre(f, -1, 1, 3);

      expect(resultado).toBeCloseTo(valorExacto, 14);
    });

    test('integra f(x) = x⁵ (grado 5) exactamente en [-1, 1]', () => {
      const f = (x) => x ** 5;
      const valorExacto = 0; // ∫₋₁¹ x⁵ dx = 0
      const resultado = gaussLegendre(f, -1, 1, 3);

      expect(resultado).toBeCloseTo(valorExacto, 14);
    });

    test('integra polinomio mixto en [0, 2]', () => {
      // f(x) = x³ + 2x² + x + 1
      const f = (x) => x ** 3 + 2 * x ** 2 + x + 1;
      // ∫₀² (x³ + 2x² + x + 1) dx = [x⁴/4 + 2x³/3 + x²/2 + x]₀²
      // = 16/4 + 16/3 + 4/2 + 2 = 4 + 5.333... + 2 + 2 = 13.333...
      const valorExacto = 40 / 3;
      const resultado = gaussLegendre(f, 0, 2, 3);

      expect(resultado).toBeCloseTo(valorExacto, 14);
    });
  });

  test('puntos inválido lanza error', () => {
    const f = (x) => x * x;

    expect(() => gaussLegendre(f, 0, 1, 1)).toThrow('puntos debe ser 2 o 3');
    expect(() => gaussLegendre(f, 0, 1, 4)).toThrow('puntos debe ser 2 o 3');
    expect(() => gaussLegendre(f, 0, 1, 5)).toThrow('puntos debe ser 2 o 3');
  });

  test('más puntos dan mejor precisión para polinomios de alto grado', () => {
    // f(x) = x⁶ (grado 6) - fuera del rango de exactitud para ambos
    const f = (x) => x ** 6;
    const valorExacto = 2 / 7; // ∫₋₁¹ x⁶ dx = 2/7

    const resultado2Puntos = gaussLegendre(f, -1, 1, 2);
    const resultado3Puntos = gaussLegendre(f, -1, 1, 3);

    const error2Puntos = Math.abs(resultado2Puntos - valorExacto);
    const error3Puntos = Math.abs(resultado3Puntos - valorExacto);

    // 3 puntos deben ser más precisos que 2 puntos para polinomios de alto grado
    expect(error3Puntos).toBeLessThan(error2Puntos);
  });
});
