function obtenerIteraciones(datos) {
  if (Array.isArray(datos)) {
    return datos;
  }

  if (datos && Array.isArray(datos.iteraciones)) {
    return datos.iteraciones;
  }

  return [];
}

function obtenerError(iteracion) {
  const posiblesCampos = [
    'error',
    'errorAbsoluto',
    'error_relativo',
    'errorRelativo',
    'ea',
    'er',
  ];

  for (const campo of posiblesCampos) {
    const valor = iteracion[campo];

    if (typeof valor === 'number' && Number.isFinite(valor)) {
      return Math.abs(valor);
    }
  }

  return null;
}

function formatearNumero(valor) {
  if (valor === 0) {
    return '0';
  }

  const absoluto = Math.abs(valor);

  if (absoluto < 0.001 || absoluto >= 1000) {
    return valor.toExponential(2);
  }

  return valor.toPrecision(4);
}

/**
 * Genera un gráfico ASCII simple para visualizar la convergencia del error.
 *
 * El gráfico usa caracteres de bloque Unicode y escala automáticamente el
 * ancho disponible según la terminal. Está pensado para resultados de métodos
 * iterativos que devuelven un arreglo `iteraciones` con un campo de error.
 *
 * @param {Object|Array} datos - Resultado del método o arreglo de iteraciones.
 * @param {Object} opciones - Opciones de visualización.
 * @param {number} [opciones.ancho] - Ancho máximo disponible.
 * @returns {string} Gráfico ASCII listo para imprimir en terminal.
 */
export function generarGraficoAscii(datos, opciones = {}) {
  const iteraciones = obtenerIteraciones(datos);
  const puntos = iteraciones
    .map((iteracion, indice) => ({
      iteracion: iteracion.n ?? indice + 1,
      error: obtenerError(iteracion),
    }))
    .filter((punto) => punto.error !== null);

  if (puntos.length === 0) {
    return 'No hay datos de error disponibles para graficar.';
  }

  const anchoTerminal =
    opciones.ancho ??
    process.stdout.columns ??
    80;

  const anchoEtiqueta = 24;
  const anchoGrafico = Math.max(10, anchoTerminal - anchoEtiqueta);
  const maxError = Math.max(...puntos.map((punto) => punto.error));

  const lineas = [
    'Gráfico ASCII de convergencia',
    'Iteración | Error        | Gráfico',
    '-'.repeat(Math.min(anchoTerminal, anchoEtiqueta + anchoGrafico)),
  ];

 for (const punto of puntos) {
  const proporcion = maxError === 0 ? 0 : punto.error / maxError;
  const longitud = punto.error === 0 ? 1 : Math.max(1, Math.round(proporcion * anchoGrafico));
  const barra = '\u2588'.repeat(longitud);

  const iteracionTexto = String(punto.iteracion).padStart(9, ' ');
  const errorTexto = formatearNumero(punto.error).padStart(12, ' ');

  lineas.push(`${iteracionTexto} | ${errorTexto} | ${barra}`);
}
  return lineas.join('\n');
}