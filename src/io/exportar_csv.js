export function exportarCSV(tabla, opciones = {}) {
  const {
    separador = ',',
    encabezado = true,
    precision = 6
  } = opciones;

  if (!Array.isArray(tabla) || tabla.length === 0) {
    return '';
  }

  const columnas = Object.keys(tabla[0]);
  const lineas = [];

  if (encabezado) {
    lineas.push(columnas.join(separador));
  }

  for (const fila of tabla) {
    const valores = columnas.map((columna) => {
      const valor = fila[columna];

      if (typeof valor === 'number') {
        return Number(valor.toFixed(precision));
      }

      return valor;
    });

    lineas.push(valores.join(separador));
  }

  return lineas.join('\n');
}

export function exportarCSVArchivo(tabla, ruta, opciones = {}) {
  const fs = require('fs');

  const contenido = exportarCSV(tabla, opciones);

  fs.writeFileSync(ruta, contenido, 'utf8');

  return contenido;
}
