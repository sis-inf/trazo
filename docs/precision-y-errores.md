# Precision y manejo de errores numericos

## Que es el error numerico?

En los metodos numericos, los resultados son aproximaciones. Trazo trabaja con dos tipos de error para medir que tan cerca este una aproximacion del valor real.

---

## Error absoluto

El **error absoluto** es la diferencia entre el valor real y el valor aproximado, sin importar su signo:

```
E_a = |valor_real - valor_aproximado|
```

**Ejemplo:**
Si el valor real de una raiz es `2.000` y el metodo devuelve `2.003`, entonces:

```
E_a = |2.000 - 2.003| = 0.003
```

---

## Error relativo

El **error relativo** expresa el error como proporcion del valor aproximado actual. Es especialmente util cuando no se conoce el valor real exacto:

```
E_r = |(valor_actual - valor_anterior) / valor_actual| × 100%
```

**Ejemplo:**
Si en una iteracion el valor paso de `1.990` a `2.003`:

```
E_r = |(2.003 - 1.990) / 2.003| × 100% ≈ 0.649%
```

---
## Error relativo aproximado

El **error relativo aproximado** mide la diferencia entre dos aproximaciones consecutivas cuando no se conoce el valor real de la solucion. Es uno de los errores mas utilizados en metodos iterativos.

```
E_ra = |x_nuevo - x_viejo| / |x_nuevo|

```

Donde:

- `x_nuevo` es la aproximacion actual.
- `x_viejo` es la aproximacion obtenida en la iteracion anterior.

**¿Cuando se utiliza?**

Se utiliza principalmente en metodos iterativos como biseccion, Newton-Raphson, secante y punto fijo, donde el valor exacto de la solucion generalmente es desconocido.

**Relacion con el criterio de parada**

El error relativo aproximado suele emplearse como criterio de convergencia. El metodo continua iterando hasta que:
```
E_ra < tolerancia
```

Cuando esta condicion se cumple, se considera que la aproximacion alcanzada tiene la precision requerida.

**Ejemplo:**
Si en dos iteraciones consecutivas del metodo de biseccion se obtienen los valores `1.5000` y `1.5625`, entonces:
```
E_ra = |1.5625 - 1.5000| / |1.5625|
E_ra = 0.04
```

Por lo tanto, el error relativo aproximado es `0.04` (4%).

---

## Criterio de convergencia

Trazo utiliza el **error relativo aproximado** como criterio de parada. El metodo continua iterando hasta que:

```
E_r < tolerancia
```

Donde `tolerancia` es un valor definido por el usuario al invocar el metodo (por ejemplo, `0.001` para una precision del 0.1%).

**Ejemplo de uso:**
```js
import { biseccion } from 'trazo';

const f = (x) => x * x - 4;
const resultado = biseccion(f, 0, 3, 0.001); // tolerancia = 0.001
```

El metodo se detiene cuando la diferencia entre iteraciones consecutivas es menor que la tolerancia indicada.

---

## Como se comunican los errores al usuario

Trazo comunica los errores de calculo de las siguientes formas:

### 1. Valor de retorno
Cuando el metodo converge correctamente, devuelve el valor aproximado de la solucion.

### 2. Errores de validacion
Si los parametros ingresados son invalidos (por ejemplo, un intervalo donde no existe raiz), Trazo lanza un error descriptivo:

```js
throw new Error("No se encontro cambio de signo en el intervalo dado.");
```

### 3. No convergencia
Si el metodo alcanza el numero maximo de iteraciones sin converger, se lanza una advertencia indicando que no se pudo alcanzar la tolerancia solicitada:

```js
throw new Error("El metodo no convergio dentro del numero maximo de iteraciones.");
```

---
