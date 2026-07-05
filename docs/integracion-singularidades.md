# Integración de Funciones con Singularidades

## Introducción

Este documento describe el método numérico implementado en el proyecto para integrar funciones que presentan singularidades en el intervalo de integración. El método utiliza un cambio de variable para transformar la integral singular en una integral regular, permitiendo aplicar métodos de cuadratura estándar.

## Tipos de Singularidad Soportados

Actualmente, el método soporta los siguientes tipos de singularidades:

1. **Singularidades de tipo polinomial**: singularidades de la forma \( (x - a)^{-\alpha} \) con \( 0 < \alpha < 1 \), o \( (b - x)^{-\beta} \) con \( 0 < \beta < 1 \).
2. **Singularidades logarítmicas**: singularidades de la forma \( \log|x - a| \) o \( \log(b - x) \).
3. **Singularidades combinadas**: producto de una potencia y un logaritmo, e.g., \( (x - a)^{-\alpha} \log|x - a| \).

## Cambio de Variable

Para manejar singularidades en los extremos, se emplea un cambio de variable que suaviza la función. Por ejemplo, para una singularidad en \( x = a \) del tipo \( (x - a)^{-\alpha} \), se utiliza la transformación:

\[ x = a + t^m \]

donde \( m \) es un entero positivo tal que \( m > \alpha \). La integral se convierte en:

\[ \int_a^b f(x) \, dx = \int_0^{(b-a)^{1/m}} f\left(a + t^m\right) \, m t^{m-1} \, dt \]

De esta forma, la singularidad se cancela y la nueva función integrando es regular.

Para singularidades en ambos extremos, se puede aplicar un cambio similar con una función seno u otra transformada.

## Ejemplo

Integremos la función \( f(x) = \frac{1}{\sqrt{x}} \) en el intervalo \( [0, 1] \). Esta función tiene una singularidad en \( x = 0 \) de tipo \( x^{-1/2} \).

Aplicamos el cambio de variable \( x = t^2 \), entonces \( dx = 2t \, dt \). La integral se transforma en:

\[ \int_0^1 \frac{1}{\sqrt{x}} \, dx = \int_0^1 \frac{1}{t} \cdot 2t \, dt = \int_0^1 2 \, dt = 2 \]

El valor exacto de la integral es 2.

### Código de ejemplo

```python
import numpy as np

# Función original con singularidad en 0
def f(x):
    return 1 / np.sqrt(x)

# Cambio de variable: x = t**2, dx = 2*t dt
def g(t):
    return 2 * np.ones_like(t)

# Límites transformados: t de 0 a 1
a, b = 0, 1

# Cuadratura de Gauss-Legendre estándar
n = 10
x_gl, w_gl = np.polynomial.legendre.leggauss(n)
t = 0.5 * (b - a) * x_gl + 0.5 * (b + a)  # mapear a [0,1]
integral = np.sum(w_gl * g(t)) * 0.5 * (b - a)

print(f"Aproximación de la integral: {integral:.10f}")
print(f"Valor exacto: 2.0")
```

**Salida esperada:**
```
Aproximación de la integral: 2.0000000000
Valor exacto: 2.0
```

## Uso en el Proyecto

La función de integración con singularidades está disponible en el módulo `singular_integrate`. Para usarla, importe:

```python
from singular_integrate import singular_integrate

result, error = singular_integrate(f, a, b, singularities='power', alpha=0.5)
```

Parámetros:
- `f`: función a integrar.
- `a`, `b`: límites de integración.
- `singularities`: tipo de singularidad ('power', 'log', 'power_log').
- `alpha`: exponente en caso de singularidad de potencia.

## Referencias

- Davis, P. J., & Rabinowitz, P. (1984). *Methods of Numerical Integration*. Academic Press.
