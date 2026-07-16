# Precisión numérica y manejo de errores

Los métodos numéricos trabajan con aproximaciones. Por eso, incluso cuando un algoritmo está correctamente implementado, sus resultados pueden presentar pequeñas diferencias respecto al valor exacto.

Estas diferencias aparecen por dos razones principales:

1. Las limitaciones de representación de los números en computadora.
2. Los errores propios de los métodos numéricos aproximados.

Este documento consolida ambos enfoques: precisión de punto flotante e indicadores de error numérico.

## Precisión de punto flotante e IEEE 754

JavaScript, como muchos lenguajes modernos, representa los números usando el formato de punto flotante de doble precisión definido por IEEE 754.

Esto permite trabajar con números muy grandes, muy pequeños y decimales, pero no todos los valores reales pueden representarse exactamente.

Por ejemplo, operaciones aparentemente simples pueden producir resultados con pequeñas diferencias:

```js
0.1 + 0.2
// 0.30000000000000004