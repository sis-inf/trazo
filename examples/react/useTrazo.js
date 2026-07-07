import { useState, useCallback } from "react";
import { biseccion } from "trazo";

export function useTrazo() {
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const ejecutarMetodo = useCallback(async (funcion, a, b) => {
    setLoading(true);
    setError(null);

    try {
      const respuesta = biseccion(funcion, a, b);
      setResultado(respuesta);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    resultado,
    loading,
    error,
    ejecutarMetodo,
  };
}
