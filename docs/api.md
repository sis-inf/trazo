## Métodos disponibles

### Método: biseccion(f, a, b, tol)

*Descripción:*
Calcula la raíz de una función usando el método de bisección.

*Parámetros:*

* f: función
* a: límite inferior
* b: límite superior
* tol: tolerancia

*Retorno:*
Objeto con resultado, iteraciones, convergencia y metadatos.

*Ejemplo:*
biseccion(x => x\*x - 4, 0, 3, 0.001)



\### Ejemplo en código



```js

const raiz = biseccion(x => x\*x - 4, 0, 3, 0.001);



console.log(raiz);

```

\### Resultado esperado



```txt

2

```
### Acceso a iteraciones

```js
const resultado = biseccion({
  f: x => x * x - 4,
  a: 0,
  b: 3,
  tolerancia: 0.001
});

console.log(resultado.resultado);
console.log(resultado.convergio);
console.log(resultado.iteraciones);
````

### Acceder a una iteración específica
```js
console.log(resultado.iteraciones[0]);
```

---


\---

### Método: gaussJordan(matriz)

*Descripción:*
Resuelve sistemas de ecuaciones.

*Parámetros:*

* matriz: matriz de coeficientes

*Retorno:*
Solución del sistema

*Ejemplo:*
gaussJordan(\[\[2,1],\[5,3]])



\### Ejemplo en código



```js

const solucion = gaussJordan(\[

&#x20; \[2, 1],

&#x20; \[5, 3]

]);



console.log(solucion);

```

\### Resultado esperado



```txt

\[1, -1]

```

\---

### Método: trapecio(f, a, b, n)

*Descripción:*
Calcula integrales usando el método del trapecio.

*Parámetros:*

* f: función
* a: inicio
* b: fin
* n: intervalos

*Retorno:*
Valor aproximado

*Ejemplo:*
trapecio(x => x\*x, 0, 2, 10)



\### Ejemplo en código



```js

const area = trapecio(x => x\*x, 0, 2, 10);



console.log(area);

```

\### Resultado esperado



```txt

2.67

```

\---

### Método: derivada(f, x)

*Descripción:*
Calcula la derivada de una función.

*Parámetros:*

* f: función
* x: punto

*Retorno:*
Valor de la derivada

*Ejemplo:*
derivada(x => x\*x, 2)



\### Ejemplo en código



```js

const d = derivada(x => x\*x, 2);



console.log(d);

```

\### Resultado esperado



```txt

4

```

\---

### Método: newton(f, x0, tol)

*Descripción:*
Calcula raíces con método de Newton.

*Parámetros:*

* f: función
* x0: valor inicial
* tol: tolerancia

*Retorno:*
Objeto con resultado, iteraciones, convergencia y metadatos.

*Ejemplo:*
newton(x => x\*x - 2, 1, 0.001)

\### Ejemplo en código



```js

const raiz = newton(x => x\*x - 2, 1, 0.001);



console.log(raiz);

```

\### Resultado esperado



```txt

1.414

```
### Acceso a iteraciones

```js
const resultado = newtonRaphson({
  f: x => x * x - 2,
  df: x => 2 * x,
  x0: 1,
  tolerancia: 0.001
});

console.log(resultado.resultado);
console.log(resultado.convergio);
console.log(resultado.iteraciones);
```

### Acceder a una iteración específica

```js
console.log(resultado.iteraciones[0]);
```

