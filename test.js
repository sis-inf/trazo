import {
  validarNumero,
  validarIntervalo
} from './src/utils/validaciones.js';

import { construirResultado } from './src/core/contrato.js';

validarNumero(5);
validarIntervalo(1, 10);

console.log(construirResultado(25));
