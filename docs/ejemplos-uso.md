# Ejemplos de uso

Este documento muestra ejemplos básicos de uso para métodos numéricos.

---

## 1. Cálculo de raíz (método de Newton-Raphson)

```js
function raizNewton(f, df, x0, iteraciones) {
  let x = x0;
  for (let i = 0; i < iteraciones; i++) {
    x = x - f(x) / df(x);
  }
  return x;
}

const resultado = raizNewton(x => x*x - 9, x => 2*x, 3, 5);
console.log(resultado);
```
---
### Output esperado : 3



## 2. Interpolación lineal

```js
function interpolar(x0, y0, x1, y1, x) {
  return y0 + (y1 - y0) * ((x - x0) / (x1 - x0));
}

const resultado = interpolar(1, 2, 3, 6, 2);
console.log(resultado);
```
---
### Output esperado : 4



## 3. Integral (regla del trapecio)

```js
function integrar(f, a, b, n) {
  const h = (b - a) / n;
  let suma = 0.5 * (f(a) + f(b));

  for (let i = 1; i < n; i++) {
    suma += f(a + i * h);
  }

  return suma * h;
}

const resultado = integrar(x => x * x, 0, 2, 100);
console.log(resultado);
```
---
### Output esperado : 2.66

