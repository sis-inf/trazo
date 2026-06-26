export function exportarJSON(resultado, metadatos = {}) {
  return {
    timestamp: new Date().toISOString(),
    metodo: metadatos.metodo || null,
    parametros: metadatos.parametros || {},
    resultado,
    iteraciones: metadatos.iteraciones || null,
  };
}

export function exportarJSONArchivo(resultado, metadatos = {}, ruta) {
  const fs = require('fs');

  const contenido = exportarJSON(resultado, metadatos);

  fs.writeFileSync(
    ruta,
    JSON.stringify(contenido, null, 2),
    'utf8'
  );

  return contenido;
}
