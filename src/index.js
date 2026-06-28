import { regresionLineal, regresionPolinomial } from './analisis/ajuste_minimos_cuadrados.js';

import {
  diferenciaCentrada,
  diferenciaCentradaSegundaDerivada
} from './diferencias/diferencia_centrada.js';
import { diferenciasAdelanteGrado1 } from './diferencias/diferencia_hacia_adelante.js';

import { euler } from './edo/euler.js';
import { eulerMejorado } from './edo/euler-mejorado.js';
import { metodHeun, metodoPuntoMedio } from './edo/runge_kutta_2.js';
import { rungeKutta4 } from './edo/runge_kutta_4.js';

import { derivative } from './integracion/derivative.js';
import { simpson13 } from './integracion/simpson-13.js';
import { simpson38 } from './integracion/simpson-38.js';
import { simpsonCompuesto } from './integracion/simpson_compuesto.js';
import { trapecio } from './integracion/trapecio.js';
import { integracionMonteCarlo } from './integracion/monte_carlo.js';

import { lagrange } from './interpolacion/lagrange.js';
import { linearInterpolation } from './interpolacion/linear.js';
import { newtonDD } from './interpolacion/newton-dd.js';
import { polyEval } from './interpolacion/polyEval.js';
import { splines } from './interpolacion/splines.js';
import { splineCubicoNatural } from './interpolacion/spline_cubico.js';

import { descomposicionCholesky, resolverCholesky } from './lineales/cholesky.js';
import { det2x2, det3x3 } from './lineales/determinant.js';
import { gauss } from './lineales/gauss.js';
import { gaussJordan } from './lineales/gauss-jordan.js';
import { gaussSeidel } from './lineales/gauss-seidel.js';
import { jacobi } from './lineales/jacobi.js';
import { lu } from './lineales/lu.js';

import { determinanteSarrus } from './matricial/determinante_sarrus.js';
import {
  normaEuclideana,
  normaInfinita,
  normaFrobenius
} from './matricial/norma_matriz.js';
import {
  sumaMatrices,
  restaMatrices,
  multiplicarMatrices,
  transpuesta,
  multiplicarEscalar
} from './matricial/algebra_matrices.js';

import { biseccion } from './no-lineales/biseccion.js';
import { falsaPosicion } from './no-lineales/falsa-posicion.js';
import { muller } from './no-lineales/muller.js';
import { newtonRaphson } from './no-lineales/newton-raphson.js';
import { puntoFijo } from './no-lineales/punto-fijo.js';
import { secante } from './no-lineales/secante.js';

import { evaluarHorner } from './polinomios/horner.js';

// Importaciones de estadística descriptiva (issue #659)
import {
  media,
  varianza,
  desviacionEstandar,
  mediana
} from './utils/estadistica.js';

const lineales = {
  gauss,
  gaussJordan,
  jacobi,
  gaussSeidel,
  lu,
  det2x2,
  det3x3,
  descomposicionCholesky,
  resolverCholesky
};

const noLineales = {
  biseccion,
  falsaPosicion,
  newtonRaphson,
  secante,
  puntoFijo,
  muller
};

const interpolacion = {
  lagrange,
  newtonDD,
  splines,
  linearInterpolation,
  polyEval,
  splineCubicoNatural
};

const integracion = {
  trapecio,
  simpson13,
  simpson38,
  derivative,
  simpsonCompuesto,
  integracionMonteCarlo
};

const edo = {
  euler,
  eulerMejorado,
  rungeKutta4,
  metodHeun,
  metodoPuntoMedio
};

const analisis = {
  regresionLineal,
  regresionPolinomial
};

const diferencias = {
  diferenciaCentrada,
  diferenciaCentradaSegundaDerivada,
  diferenciasAdelanteGrado1
};

const matricial = {
  determinanteSarrus,
  normaEuclideana,
  normaInfinita,
  normaFrobenius,
  sumaMatrices,
  restaMatrices,
  multiplicarMatrices,
  transpuesta,
  multiplicarEscalar
};

const polinomios = {
  evaluarHorner
};

const estadistica = {
  media,
  varianza,
  desviacionEstandar,
  mediana
};

export {
  lineales,
  noLineales,
  interpolacion,
  integracion,
  edo,
  analisis,
  diferencias,
  matricial,
  polinomios,
  estadistica,

  // lineales
  gauss,
  gaussJordan,
  jacobi,
  gaussSeidel,
  lu,
  det2x2,
  det3x3,
  descomposicionCholesky,
  resolverCholesky,

  // no lineales
  biseccion,
  falsaPosicion,
  newtonRaphson,
  secante,
  puntoFijo,
  muller,

  // interpolacion
  lagrange,
  newtonDD,
  splines,
  linearInterpolation,
  polyEval,
  splineCubicoNatural,

  // integracion
  trapecio,
  simpson13,
  simpson38,
  derivative,
  simpsonCompuesto,
  integracionMonteCarlo,

  // edo
  euler,
  eulerMejorado,
  rungeKutta4,
  metodHeun,
  metodoPuntoMedio,

  // analisis
  regresionLineal,
  regresionPolinomial,

  // diferencias
  diferenciaCentrada,
  diferenciaCentradaSegundaDerivada,
  diferenciasAdelanteGrado1,

  // matricial
  determinanteSarrus,
  normaEuclideana,
  normaInfinita,
  normaFrobenius,
  sumaMatrices,
  restaMatrices,
  multiplicarMatrices,
  transpuesta,
  multiplicarEscalar,

  // polinomios
  evaluarHorner,

  // estadistica (issue #659)
  media,
  varianza,
  desviacionEstandar,
  mediana
};

export default {
  lineales,
  noLineales,
  interpolacion,
  integracion,
  edo,
  analisis,
  diferencias,
  matricial,
  polinomios,
  estadistica,

  // exportaciones planas para acceso directo
  ...lineales,
  ...noLineales,
  ...interpolacion,
  ...integracion,
  ...edo,
  ...analisis,
  ...diferencias,
  ...matricial,
  ...polinomios,
  ...estadistica
};