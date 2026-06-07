/**
 * Re-exporta la función pública para cálculo de derivadas.
 */
export { derivative } from './integracion/derivative.js';

/**
 * Re-exporta el método público de integración Simpson 1/3.
 */
export { simpson13 } from './integracion/simpson-13.js';

/**
 * Re-exporta el método público de integración Simpson 3/8.
 */
export { simpson38 } from './integracion/simpson-38.js';

/**
 * Re-exporta el método público de Simpson compuesto.
 */
export { simpsonCompuesto } from './integracion/simpson_compuesto.js';

/**
 * Re-exporta el método público de integración por trapecio.
 */
export { trapecio } from './integracion/trapecio.js';

/**
 * Re-exporta la función pública para interpolación de Lagrange.
 */
export { lagrange } from './interpolacion/lagrange.js';

/**
 * Re-exporta la función pública para interpolación lineal.
 */
export { linearInterpolation } from './interpolacion/linear.js';

/**
 * Re-exporta la función pública para evaluación de polinomios.
 */
export { polyEval } from './interpolacion/polyEval.js';

/**
 * Re-exporta el método público de Newton por diferencias divididas.
 */
export { newtonDD } from './interpolacion/newton-dd.js';

/**
 * Re-exporta los métodos públicos de splines.
 */
export { splines } from './interpolacion/splines.js';

/**
 * Re-exporta el método público de spline cúbico natural.
 */
export { splineCubicoNatural } from './interpolacion/spline_cubico.js';

/**
 * Re-exporta el método público de eliminación de Gauss.
 */
export { gauss } from './lineales/gauss.js';

/**
 * Re-exporta el método público de Gauss-Jordan.
 */
export { gaussJordan } from './lineales/gauss-jordan.js';

/**
 * Re-exporta el método público de Jacobi.
 */
export { jacobi } from './lineales/jacobi.js';

/**
 * Re-exporta el método público de descomposición LU.
 */
export { lu } from './lineales/lu.js';

/**
 * Re-exporta los métodos públicos de Cholesky.
 */
export {
  descomposicionCholesky,
  resolverCholesky
} from './lineales/cholesky.js';

/**
 * Re-exporta la función pública para determinantes de matrices 2x2.
 */
export { det2x2 } from './lineales/determinant.js';

/**
 * Re-exporta la función pública para determinantes de matrices 3x3.
 */
export { det3x3 } from './lineales/determinant.js';

/**
 * Re-exporta el método público de Newton-Raphson.
 */
export { newtonRaphson } from './no-lineales/newton-raphson.js';

/**
 * Re-exporta el método público de bisección.
 */
export { biseccion } from './no-lineales/biseccion.js';

/**
 * Re-exporta el método público de falsa posición.
 */
export { falsaPosicion } from './no-lineales/falsa-posicion.js';

/**
 * Re-exporta el método público de punto fijo.
 */
export { puntoFijo } from './no-lineales/punto-fijo.js';

/**
 * Re-exporta el método público de la secante.
 */
export { secante } from './no-lineales/secante.js';

/**
 * Re-exporta el método público de Müller.
 */
export { muller } from './no-lineales/muller.js';

/**
 * Agrupador para métodos no lineales.
 */
export const noLineales = {
  biseccion
};

/**
 * Re-exporta los métodos públicos de Euler.
 */
export { euler } from './edo/euler.js';
export { eulerMejorado } from './edo/euler-mejorado.js';

/**
 * Re-exporta el método público de Horner.
 */
export { evaluarHorner } from './polinomios/horner.js';

/**
 * Re-exporta diferencias finitas.
 */
export { diferenciasAdelanteGrado1 } from './diferencias/diferencia_hacia_adelante.js';

/**
 * Re-exporta métodos de regresión por mínimos cuadrados.
 */
export {
  regresionLineal,
  regresionPolinomial
} from './analisis/ajuste_minimos_cuadrados.js';

/**
 * Re-exporta utilidades de formato.
 */
export {
  redondear,
  errorAbsoluto,
  errorRelativo,
  errorPorcentual,
  aproximadamenteIgual
} from './utils/formato.js';