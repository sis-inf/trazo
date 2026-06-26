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
 * Re-exporta la función pública para interpolación de Lagrange.
 */
export { lagrange } from './interpolacion/lagrange.js';

/**
 * Re-exporta la función pública para interpolación lineal.
 */
export { linearInterpolation } from './interpolacion/linear.js';

/**
 * Re-exporta el método público de eliminación de Gauss.
 */
export { gauss } from './lineales/gauss.js';

/**
 * Re-exporta el método público de Jacobi.
 */
export { jacobi } from './lineales/jacobi.js';

/**
 * Re-exporta la función pública para determinantes de matrices 2x2.
 */
export { det2x2 } from './lineales/determinant.js';

/**
 * Re-exporta la función pública para determinantes de matrices 3x3.
 */
export { det3x3 } from './lineales/determinant.js';

/**
 * Re-exporta la función pública para evaluación de polinomios.
 */
export { polyEval } from './interpolacion/polyEval.js';

/**
 * Re-exporta el método público de Newton-Raphson.
 */
export { newtonRaphson } from './no-lineales/newton-raphson.js';

/**
 * Agrupador para métodos no lineales.
 */
import { biseccion } from './no-lineales/biseccion.js';
export { biseccion };
export const noLineales = {
  biseccion
};

/**
 * Re-exporta las operaciones básicas de álgebra de matrices (issue #650).
 */
export {
  sumaMatrices,
  restaMatrices,
  multiplicarMatrices,
  transpuesta,
  multiplicarEscalar
} from './matricial/algebra_matrices.js';
