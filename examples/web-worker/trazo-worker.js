import { biseccion } from '../../src/no-lineales/biseccion.js';

self.onmessage = (event) => {
  const { metodo, parametros } = event.data;

  if (metodo === 'biseccion') {
    const funcion = new Function(
      'x',
      `return ${parametros.funcion}`
    );

    const resultado = biseccion({
      f: funcion,
      a: parametros.a,
      b: parametros.b,
    });

    self.postMessage(resultado);
  }
};
