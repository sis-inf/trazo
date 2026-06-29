# Preguntas Frecuentes — Dudas Matemáticas

## Introducción

Este documento responde dudas **matemáticas** sobre el uso de los
métodos numéricos de Trazo: por qué un método no converge, cómo elegir
buenos parámetros de entrada, o qué significan ciertos resultados.

> **Diferencia con `preguntas-frecuentes.md`:** ese otro documento está
> orientado a **contribución de código** (cómo hacer fork, por qué falla
> mi Pull Request, errores de Git). Este documento, en cambio, está
> pensado para quien **usa** la librería para resolver problemas
> matemáticos reales y tiene dudas sobre el comportamiento de los
> métodos numéricos en sí.

---

## 1. ¿Por qué mi sistema con Jacobi no converge?

El método de Jacobi solo garantiza convergencia si la matriz `A` es
**diagonalmente dominante** (o simétrica definida positiva, en algunos
casos). Si tu matriz no cumple esta condición, las iteraciones pueden
oscilar o divergir en vez de acercarse a la solución.

**Qué hacer:**
* Verifica si reordenando las ecuaciones puedes lograr dominancia diagonal.
* Si no es posible, prueba con un método directo como Gauss o Gauss-Jordan en vez de uno iterativo.

---

## 2. ¿Qué significa que mi matriz no sea diagonalmente dominante?

Una matriz es diagonalmente dominante si, en cada fila, el valor
absoluto del elemento de la diagonal es mayor o igual a la suma de los
valores absolutos del resto de elementos de esa fila: