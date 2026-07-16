# Ejemplo de bisección usando trazo en Observable

Este ejemplo muestra cómo utilizar la librería `trazo` dentro de un notebook de Observable importando el paquete publicado mediante un CDN.

## Importar trazo desde CDN

```js
import { biseccion } from "https://cdn.jsdelivr.net/npm/trazo/+esm"
```

## Definir función

```js
const funcion = (x) => x * x - 4;
```

## Ejecutar método de bisección

```js
const resultado = biseccion(funcion, 0, 5);

resultado
```

## Visualizar resultado

El valor obtenido puede mostrarse directamente dentro de una celda de Observable:

```js
resultado.raiz
```

Este ejemplo no requiere configuración local ni proceso de compilación, ya que utiliza la versión publicada del paquete mediante CDN.
