/**
 * Método de Heun (RK2 predictor-corrector)
 */
export function metodHeun(f, y0, t0, tFinal, h) {
  if (h <= 0) {
    throw new Error('h debe ser mayor que 0');
  }

  const resultados = [];
  let t = t0;
  let y = y0;

  resultados.push({ t, y });

  while (t < tFinal) {
    const k1 = f(t, y);
    const predictor = y + h * k1;

    const k2 = f(t + h, predictor);

    y = y + (h / 2) * (k1 + k2);
    t += h;

    resultados.push({ t, y });
  }

  return resultados;
}

/**
 * Método del Punto Medio (RK2)
 */
export function metodoPuntoMedio(f, y0, t0, tFinal, h) {
  if (h <= 0) {
    throw new Error('h debe ser mayor que 0');
  }

  const resultados = [];
  let t = t0;
  let y = y0;

  resultados.push({ t, y });

  while (t < tFinal) {
    const k1 = f(t, y);

    const k2 = f(
      t + h / 2,
      y + (h / 2) * k1
    );

    y = y + h * k2;
    t += h;

    resultados.push({ t, y });
  }

  return resultados;
}
