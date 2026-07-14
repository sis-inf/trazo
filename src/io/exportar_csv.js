import { writeFileSync } from 'node:fs';

function formatearValorCSV(valor, separador, precision) {
  if (valor === null || valor === undefined) {
    return '';
  }

  const valorFormateado =
    typeof valor === 'number' ? Number(valor.toFixed(precision)) : valor;

  const texto = String(valorFormateado);
  const requiereEscape =
    texto.includes(separador) ||
    texto.includes('"') ||
    texto.includes('\n') ||
    texto.includes('\r');

  if (!requiereEscape) {
    return texto;
  }

  return `"${texto.replace(/"/g, '""')}"`;
}

/**
 * Convierte una tabla de objetos a formato CSV.
 *
 * @param {Object[]} tabla - Filas a exportar.
 * @param {Object} opciones - Opciones de exportación.
 * @param {string} opciones.separador - Separador de columnas.
 * @param {boolean} opciones.encabezado - Indica si se incluye encabezado.
 * @param {number} opciones.precision - Decimales para valores numéricos.
 * @returns {string} Contenido CSV generado.
 */
export function exportarCSV(tabla, opciones = {}) {
  const { separador = ',', encabezado = true, precision = 6 } = opciones;

  if (!Array.isArray(tabla) || tabla.length === 0) {
    return '';
  }

  const columnas = Object.keys(tabla[0]);
  const lineas = [];

  if (encabezado) {
    lineas.push(columnas.join(separador));
  }

  for (const fila of tabla) {
    const valores = columnas.map((columna) =>
      formatearValorCSV(fila[columna], separador, precision)
    );

    lineas.push(valores.join(separador));
  }

  return lineas.join('\n');
}

/**
 * Exporta una tabla a un archivo CSV.
 *
 * Compatibilidad con Deno:
 * este módulo utiliza el especificador `node:fs`, compatible con Node.js y con
 * la capa de compatibilidad de Deno. No requiere import map, pero en Deno la
 * escritura de archivos requiere ejecutar con permisos, por ejemplo:
 * `deno run --allow-write archivo.js`.
 *
 * @param {Object[]} tabla - Filas a exportar.
 * @param {string} ruta - Ruta del archivo destino.
 * @param {Object} opciones - Opciones de exportación.
 * @returns {string} Contenido CSV generado.
 */
export function exportarCSVArchivo(tabla, ruta, opciones = {}) {
  if (typeof ruta !== 'string' || ruta.length === 0) {
    throw new Error('La ruta del archivo CSV debe ser una cadena no vacía');
  }

  const contenido = exportarCSV(tabla, opciones);

  writeFileSync(ruta, contenido, 'utf8');

  return contenido;
}