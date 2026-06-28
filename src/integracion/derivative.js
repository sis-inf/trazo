/** Implementación de la derivada por diferencias finitas centradas */

function derivative(f, x, h = 1e-5) {
  if (typeof f !== "function") {
    throw new TypeError(
      `El parámetro 'f' debe ser una función. Se recibió: ${typeof f}`
    );
  }
 
  if (typeof x !== "number" || isNaN(x)) {
    throw new TypeError(
      `El parámetro 'x' debe ser un número válido. Se recibió: ${x}`
    );
  }
 
  if (typeof h !== "number" || h <= 0) {
    throw new TypeError(
      `El parámetro 'h' debe ser un número positivo. Se recibió: ${h}`
    );
  }
 
  return (f(x + h) - f(x - h)) / (2 * h);
}
 
export { derivative };