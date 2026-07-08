import { biseccion } from '../../src/integracion/index.js';

self.onmessage = (event) => {
  const { metodo, parametros } = event.data;

  if (metodo === 'biseccion') {
    const funcion = new Function(
      'x',
      `return ${parametros.funcion}`
    );

    const resultado = biseccion(
      funcion,
      parametros.a,
      parametros.b
    );

    self.postMessage(resultado);
  }
};
