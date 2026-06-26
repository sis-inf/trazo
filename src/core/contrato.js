/**
 * Crea un objeto de resultado uniforme para los métodos numéricos de Trazo.
 *
 * @param {Object} opciones
 * @param {number|Array|null} opciones.resultado
 * @param {Array}   [opciones.iteraciones=[]]
 * @param {boolean} [opciones.convergio=false]
 * @param {string}  [opciones.mensaje=""]
 * @param {Object}  [opciones.meta={}]
 * @returns {Object}
 */
function crearResultado({
  resultado,
  iteraciones = [],
  convergio = false,
  mensaje = "",
  meta = {},
}) {
  return {
    resultado,
    iteraciones,
    convergio,
    mensaje,
    meta: {
      metodo:     meta.metodo     ?? "",
      parametros: meta.parametros ?? {},
      tiempo_ms:  meta.tiempo_ms  ?? 0,
    },
  };
}
 
/**
 * Ejecuta una función y mide su tiempo de ejecución en milisegundos.
 *
 * @param {Function} fn - Función a ejecutar.
 * @returns {{ valor: *, tiempo_ms: number }}
 * @throws {TypeError} Si fn no es una función.
 *
 * @example
 * const { valor, tiempo_ms } = medirTiempo(() => biseccion({ f, a: 0, b: 3 }));
 */
function medirTiempo(fn) {
  if (typeof fn !== "function") {
    throw new TypeError(
      `Trazo.medirTiempo: 'fn' debe ser una función. Se recibió: ${typeof fn}`
    );
  }
 
  const inicio    = performance.now();
  const valor     = fn();
  const tiempo_ms = performance.now() - inicio;
 
  return { valor, tiempo_ms };
}
 
export { crearResultado, medirTiempo };