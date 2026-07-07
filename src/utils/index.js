/**
 * Índice de utilidades.
 *
 * Re-exporta funciones de estadística descriptiva (issue #659)
 * y generadores de matrices de prueba (issue #651).
 */
export {
  media,
  varianza,
  desviacionEstandar,
  mediana
} from './estadistica.js';

export {
  matrizIdentidad,
  matrizHilbert,
  matrizDiagonalDominante,
  matrizSimetricaDefinidaPositiva,
  esDiagonalDominante,
  esSimetrica,
} from './generadores_matrices.js';