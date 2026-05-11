# Preguntas frecuentes sobre la librería Trazo

## ¿Qué es Trazo?

Trazo es una librería ligera para el procesamiento y análisis de trazos manuscritos. Permite capturar, normalizar y extraer características de dibujos o escritura a mano en aplicaciones web y móviles.

## ¿Qué métodos principales ofrece Trazo?

La librería incluye métodos como `capturar()`, `normalizar()`, `suavizar()`, `calcularLongitud()`, `obtenerPuntosClave()` y `exportarJSON()`. También dispone de utilidades para detectar ángulos, velocidad y aceleración del trazo.

## ¿Cómo integro Trazo en mi proyecto?

Puedes integrar Trazo instalándolo vía npm con `npm install trazo` o incluyendo el script desde CDN:  
`<script src="https://cdn.ejemplo.com/trazo.min.js"></script>`.  
Luego, inicializa un nuevo objeto `Trazo()` y usa sus métodos según la documentación oficial.

## ¿Qué precisión tiene Trazo en el reconocimiento de trazos?

La precisión depende de la calidad del dispositivo de entrada (pantalla táctil, lápiz óptico, ratón). En condiciones óptimas, Trazo alcanza una precisión submilimétrica en dispositivos modernos. Para escritura manuscrita, la tasa de acierto en caracteres aislados supera el 96%.

## ¿Cómo puedo reportar un error o sugerir una mejora?

Puedes reportar errores abriendo un issue en el repositorio oficial de GitHub (https://github.com/trazo/trazo/issues). Incluye la versión de la librería, el navegador/sistema operativo, un ejemplo mínimo reproducible y los pasos para replicar el fallo.

## ¿Trazo es compatible con React, Vue o Angular?

Sí, Trazo es agnóstico del framework. Puedes usarlo con React, Vue, Angular o vanilla JS. Solo necesitas una referencia al elemento DOM donde se capturará el trazo y llamar a los métodos de la librería dentro de los ciclos de vida apropiados.

## ¿Dónde puedo encontrar ejemplos de uso?

Visita la carpeta `examples/` en el repositorio oficial.
