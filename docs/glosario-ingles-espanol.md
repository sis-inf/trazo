# Glosario Inglés-Español

Este glosario recoge términos técnicos en inglés que aparecen en el código, configuración o documentación del proyecto, junto con su traducción o explicación en español.

| Término en inglés | Traducción / Explicación en español                                                                  |
|-------------------|------------------------------------------------------------------------------------------------------|
| callback          | **función de retrollamada**: función que se pasa como argumento a otra función para que sea ejecutada después de que ocurra un evento o se complete una operación. |
| polyfill          | **polyfill**: fragmento de código que implementa una funcionalidad moderna en navegadores antiguos que no la soportan nativamente. |
| bundler           | **empaquetador**: herramienta que combina múltiples módulos y sus dependencias en uno o varios archivos optimizados para producción (ej. Webpack, Rollup, esbuild). |
| tree-shaking      | **sacudida de árbol**: técnica de eliminación de código muerto mediante la cual el empaquetador descarta las exportaciones que no se utilizan en el código final. |
| side effects      | **efectos secundarios**: código que modifica un estado externo a su ámbito local (ej. modificar variables globales, hacer peticiones HTTP, manipular el DOM) y que puede afectar el comportamiento del programa o la eliminación de código no usado. |
| source map        | **mapa de fuente**: archivo que vincula el código minificado o transpilado con el código fuente original, facilitando la depuración en herramientas de desarrollo del navegador. |
| cache             | **caché**: almacenamiento temporal de datos para acelerar accesos futuros.                                              |
| dependency        | **dependencia**: paquete o módulo del que otro código depende para funcionar.                                               |
| transpiler        | **transpilador**: herramienta que convierte código fuente de un lenguaje a otro de nivel similar (ej. Babel convierte ES6+ a ES5). |
| minification      | **minificación**: proceso de eliminar caracteres innecesarios (espacios, comentarios, saltos de línea) del código para reducir su tamaño. |
| entry point       | **punto de entrada**: archivo desde el cual el empaquetador comienza a analizar las dependencias del proyecto.              |
| output            | **salida**: archivo o directorio generado por el empaquetador listo para ser desplegado.                                       |
| loader            | **cargador**: plugin de Webpack que transforma archivos de un tipo específico (CSS, imágenes, etc.) antes de agregarlos al bundle. |
