/**
 * Módulo de integración numérica por el método de Monte Carlo.
 *
 * Utiliza muestreo aleatorio para estimar integrales definidas.
 * Incluye reporte del error estándar estimado usando utilidades estadísticas.
 */

import { media, desviacionEstandar } from '../utils/estadistica.js';

/**
 * Realiza integración numérica por el método de Monte Carlo.
 *
 * Estima la integral de una función f en el intervalo [a, b] generando
 * puntos aleatorios uniformemente distribuidos y evaluando la función.
 *
 * @param {Function} f - Función a integrar. Recibe un número y devuelve un número.
 * @param {number} a - Límite inferior de integración
 * @param {number} b - Límite superior de integración
 * @param {number} [n=10000] - Número de muestras aleatorias
 * @returns {Object} Resultado con la estimación de la integral y error estándar
 * @returns {number} resultado.valor - Estimación de la integral
 * @returns {number} resultado.errorEstandar - Error estándar estimado de la aproximación
 * @returns {number} resultado.n - Número de muestras utilizadas
 * @returns {number} resultado.intervaloA - Límite inferior del intervalo
 * @returns {number} resultado.intervaloB - Límite superior del intervalo
 *
 * @example
 * // Integrar f(x) = x^2 en [0, 1]
 * // Resultado teórico: 1/3 ≈ 0.333...
 * const resultado = integracionMonteCarlo(x => x * x, 0, 1, 100000);
 * console.log(resultado.valor); // ≈ 0.333
 * console.log(resultado.errorEstandar); // Error estándar estimado
 */
export function integracionMonteCarlo(f, a, b, n = 10000) {
  // Validaciones
  if (typeof f !== 'function') {
    throw new Error('El primer argumento debe ser una función');
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Los límites de integración deben ser números');
  }
  if (a >= b) {
    throw new Error('El límite inferior debe ser menor que el superior');
  }
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error('El número de muestras debe ser un entero positivo');
  }

  const muestras = [];
  const ancho = b - a;

  // Generar muestras y evaluar función
  for (let i = 0; i < n; i++) {
    const x = a + Math.random() * ancho;
    const fx = f(x);

    if (typeof fx !== 'number' || !isFinite(fx)) {
      throw new Error(`La función devolvió un valor no numérico o infinito para x=${x}`);
    }

    muestras.push(fx);
  }

  // Calcular estadísticos usando las utilidades del issue #659
  const mediaMuestral = media(muestras);
  const desviacionMuestral = desviacionEstandar(muestras, false); // muestral

  // Error estándar de la media: s / sqrt(n)
  const errorEstandar = desviacionMuestral / Math.sqrt(n);

  // La integral estimada es la media de f(x) multiplicada por el ancho del intervalo
  const valorIntegral = mediaMuestral * ancho;
  const errorEstandarIntegral = errorEstandar * ancho;

  return {
    valor: valorIntegral,
    errorEstandar: errorEstandarIntegral,
    n: n,
    intervaloA: a,
    intervaloB: b
  };
}
