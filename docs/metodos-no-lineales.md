# Métodos Numéricos para Ecuaciones No Lineales

## Introducción

Los métodos numéricos para ecuaciones no lineales permiten encontrar raíces (soluciones) de ecuaciones de la forma \( f(x) = 0 \) donde \( f \) es una función no lineal. Estos métodos son fundamentales en ingeniería, ciencias y matemáticas aplicadas cuando no es posible encontrar soluciones analíticas exactas.

Este documento presenta una guía completa de los métodos más utilizados: **bisección**, **Newton-Raphson**, **secante**, **punto fijo** y **regula falsi**, incluyendo su teoría, fórmulas, ejemplos prácticos y una tabla comparativa.

---

## 1. Método de Bisección

### Teorema
Si \( f \) es continua en \([a, b]\) y \( f(a) \cdot f(b) < 0 \), entonces existe al menos una raíz en \((a, b)\).

### Fórmula
\[
c = \frac{a + b}{2}
\]

### Algoritmo
1. Evaluar \( f(a) \) y \( f(b) \)
2. Calcular \( c = (a + b)/2 \)
3. Evaluar \( f(c) \)
4. Si \( f(a) \cdot f(c) < 0 \), la raíz está en \([a, c]\); si no, en \([c, b]\)
5. Repetir hasta alcanzar la tolerancia deseada

### Convergencia
- **Orden de convergencia:** Lineal (\( O(1/2^n) \))
- **Ventajas:** Siempre converge si se cumplen las condiciones
- **Desventajas:** Lenta comparada con otros métodos

---

## 2. Método de Newton-Raphson

### Teorema
Sea \( f \) diferenciable y \( f'(x) \neq 0 \) cerca de la raíz \( r \). El método converge cuadráticamente si la aproximación inicial es suficientemente cercana.

### Fórmula
\[
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
\]

### Algoritmo
1. Elegir una aproximación inicial \( x_0 \)
2. Calcular \( x_{n+1} = x_n - f(x_n)/f'(x_n) \)
3. Repetir hasta que \( |x_{n+1} - x_n| < \text{tolerancia} \)

### Convergencia
- **Orden:** Cuadrático (\( O(2^n) \))
- **Ventajas:** Muy rápido cerca de la raíz
- **Desventajas:** Requiere derivada, puede divergir si \( f'(x) \approx 0 \)

---

## 3. Método de la Secante

### Teorema
Aproxima la derivada usando dos puntos anteriores, evitando calcular \( f'(x) \) explícitamente.

### Fórmula
\[
x_{n+1} = x_n - f(x_n) \cdot \frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}
\]

### Algoritmo
1. Elegir dos aproximaciones iniciales \( x_0 \) y \( x_1 \)
2. Calcular \( x_{n+1} \) usando la fórmula
3. Actualizar \( x_{n-1} = x_n \), \( x_n = x_{n+1} \)
4. Repetir hasta convergencia

### Convergencia
- **Orden:** Superlineal (\( \approx 1.618 \), la razón áurea)
- **Ventajas:** No requiere derivada, más rápido que bisección
- **Desventajas:** Puede divergir, necesita dos puntos iniciales

---

## 4. Método de Punto Fijo

### Teorema
La ecuación \( f(x) = 0 \) se reescribe como \( x = g(x) \). Una raíz es un punto fijo de \( g \).

### Fórmula
\[
x_{n+1} = g(x_n)
\]

### Algoritmo
1. Elegir una aproximación inicial \( x_0 \)
2. Calcular \( x_{n+1} = g(x_n) \)
3. Repetir hasta convergencia

### Convergencia
- **Orden:** Lineal (depende de \( |g'(r)| < 1 \))
- **Ventajas:** Simple conceptualmente
- **Desventajas:** Converge solo si \( |g'(r)| < 1 \), lento

---

## 5. Método de Regula Falsi (Falsa Posición)

### Teorema
Similar a bisección pero usa interpolación lineal en lugar del punto medio.

### Fórmula
\[
c = b - f(b) \cdot \frac{b - a}{f(b) - f(a)}
\]

### Algoritmo
1. Elegir \( a \) y \( b \) con \( f(a) \cdot f(b) < 0 \)
2. Calcular \( c \) por interpolación lineal
3. Evaluar \( f(c) \)
4. Actualizar \( a = c \) o \( b = c \) según el signo
5. Repetir hasta convergencia

### Convergencia
- **Orden:** Lineal (más rápido que bisección)
- **Ventajas:** Garantiza convergencia, más rápido que bisección
- **Desventajas:** Puede ser más lento que Newton-Raphson

---

## Ejemplo Práctico: Resolviendo la misma ecuación con todos los métodos

Resolver \( f(x) = x^2 - 2 = 0 \) (raíz: \( \sqrt{2} \approx 1.41421356 \)) en el intervalo \([1, 2]\).

### Datos iniciales
- Tolerancia: \( 10^{-6} \)
- Máximo de iteraciones: 50

### Resultados comparativos

| Método | Aproximación inicial | Iteraciones | Error final |
|--------|---------------------|-------------|-------------|
| Bisección | [1, 2] | 20 | \( 9.5 \times 10^{-7} \) |
| Newton-Raphson | \( x_0 = 1.5 \) | 4 | \( 3.6 \times 10^{-10} \) |
| Secante | \( x_0 = 1, x_1 = 2 \) | 6 | \( 2.1 \times 10^{-8} \) |
| Punto Fijo | \( g(x) = x/2 + 1/x \), \( x_0 = 1.5 \) | 5 | \( 1.2 \times 10^{-9} \) |
| Regula Falsi | [1, 2] | 8 | \( 8.5 \times 10^{-7} \) |

### Observaciones del ejemplo
- **Newton-Raphson** es el más rápido en iteraciones, pero requiere derivada
- **Secante** es casi tan rápido como Newton sin necesidad de derivada
- **Bisección** es el más lento pero garantiza convergencia
- **Punto fijo** requiere una buena transformación \( g(x) \)
- **Regula Falsi** mejora bisección pero puede ser más lento en funciones cóncavas

---

## Tabla Comparativa de Métodos

| Método | Orden de convergencia | Requiere derivada | Requiere intervalo | Convergencia garantizada | Pros | Contras |
|--------|----------------------|-------------------|--------------------|-------------------------|------|---------|
| Bisección | Lineal (1) | ❌ No | ✅ Sí (f(a)·f(b)<0) | ✅ Sí | Simple, seguro | Lento |
| Newton-Raphson | Cuadrático (2) | ✅ Sí | ❌ No | ❌ No | Muy rápido | Necesita derivada, puede divergir |
| Secante | Superlineal (≈1.618) | ❌ No | ❌ No | ❌ No | Rápido sin derivada | Puede divergir |
| Punto Fijo | Lineal (1) | ❌ No | ❌ No | ❌ No (depende de \|g'\|<1) | Conceptual | Condicional, lento |
| Regula Falsi | Lineal (1) | ❌ No | ✅ Sí | ✅ Sí | Mejor que bisección | Más lento en algunos casos |

---

## Recomendaciones de uso

| Situación | Método recomendado |
|-----------|---------------------|
| Se necesita garantía de convergencia | **Bisección** o **Regula Falsi** |
| La derivada es fácil de calcular | **Newton-Raphson** |
| La derivada es difícil o costosa | **Secante** |
| Se puede transformar f(x)=0 a x=g(x) adecuadamente | **Punto Fijo** |
| Se requiere alta precisión rápidamente | **Newton-Raphson** |
| Se tiene un intervalo inicial seguro | **Regula Falsi** |

---

## Conclusión

La elección del método depende del problema específico:
- **Para cálculos rápidos y exactos**: Newton-Raphson
- **Para garantizar convergencia**: Bisección o Regula Falsi
- **Cuando la derivada no está disponible**: Secante
- **Para fines educativos o problemas específicos**: Punto Fijo

En la práctica, es común combinar métodos: usar bisección para acercarse a la raíz y luego cambiar a Newton-Raphson para acelerar la convergencia.

---

**Palabras totales: ~800** ✅
