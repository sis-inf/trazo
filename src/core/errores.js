/**
 * Error para parámetros inválidos en la entrada.
 * @example throw new ErrorParametros("El intervalo [a, b] no contiene una raíz.");
 */
export class ErrorParametros extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "ErrorParametros";
  }
}

/**
 * Error cuando un método no converge en las iteraciones permitidas.
 * @example throw new ErrorConvergencia("Se alcanzó el máximo de iteraciones sin converger.");
 */
export class ErrorConvergencia extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "ErrorConvergencia";
  }
}

/**
 * Error cuando una operación no está definida (división por cero, raíz negativa, etc.).
 * @example throw new ErrorDominio("División por cero detectada en el pivote.");
 */
export class ErrorDominio extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "ErrorDominio";
  }
}

/**
 * Error cuando las dimensiones de matrices o vectores no coinciden.
 * @example throw new ErrorTamano("La matriz A debe ser n×n y el vector b de tamaño n.");
 */
export class ErrorTamano extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "ErrorTamano";
  }
}