import { writeFileSync } from 'node:fs';

/**
 * Genera una estructura JSON exportable a partir de un resultado.
 *
 * @param {*} resultado - Resultado del método numérico.
 * @param {Object} metadatos - Información adicional del método.
 * @returns {Object} Objeto listo para serializar como JSON.
 */
export function exportarJSON(resultado, metadatos = {}) {
  return {
    timestamp: new Date().toISOString(),
    metodo: metadatos.metodo || null,
    parametros: metadatos.parametros || {},
    resultado,
    iteraciones: metadatos.iteraciones || null,
  };
}

/**
 * Exporta un resultado a un archivo JSON.
 *
 * Compatibilidad con Deno:
 * este módulo utiliza el especificador `node:fs`, compatible con Node.js y con
 * la capa de compatibilidad de Deno. No requiere import map, pero en Deno la
 * escritura de archivos requiere ejecutar con permisos, por ejemplo:
 * `deno run --allow-write archivo.js`.
 *
 * @param {*} resultado - Resultado del método numérico.
 * @param {Object} metadatos - Información adicional del método.
 * @param {string} ruta - Ruta del archivo destino.
 * @returns {Object} Objeto JSON generado.
 */
export function exportarJSONArchivo(resultado, metadatos = {}, ruta) {
  if (typeof ruta !== 'string' || ruta.length === 0) {
    throw new Error('La ruta del archivo JSON debe ser una cadena no vacía');
  }

  const contenido = exportarJSON(resultado, metadatos);

  writeFileSync(ruta, JSON.stringify(contenido, null, 2), 'utf8');

  return contenido;
}