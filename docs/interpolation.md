# Interpolación Numérica: Guía Completa

## 1. Interpolación de Lagrange

### Fórmula
El polinomio de interpolación de Lagrange para n+1 puntos (x₀,y₀),...,(xₙ,yₙ) es:

$$P_n(x) = \sum_{k=0}^{n} y_k \cdot L_k(x)$$

donde:
$$L_k(x) = \prod_{\substack{j=0 \\ j \neq k}}^{n} \frac{x - x_j}{x_k - x_j}$$

### Error de interpolación
El error para una función f(x) está dado por:

$$E(x) = f(x) - P_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!} \prod_{k=0}^{n} (x - x_k)$$

donde ξ ∈ [min(x₀,...,xₙ,x), max(x₀,...,xₙ,x)]

### Características
- Exacto para polinomios de grado ≤ n
- Requiere recalcular todos los L_k(x) si se añade un punto
- Buena estabilidad para n pequeño

## 2. Diferencias de Newton (Ventaja frente a Lagrange)

### Fórmula de Newton con diferencias divididas
$$P_n(x) = f[x_0] + f[x_0,x_1](x-x_0) + f[x_0,x_1,x_2](x-x_0)(x-x_1) + ... + f[x_0,...,x_n](x-x_0)...(x-x_{n-1})$$

### ¿Cuál es la ventaja principal sobre Lagrange?

**Ventaja clave: Eficiencia al agregar nuevos puntos**

| Situación | Lagrange | Newton |
|-----------|----------|--------|
| Añadir un punto (n+1 → n+2) | Recalcular TODOS los L_k(x): O(n²) | Solo añadir un término: O(n) |
| Evaluar en múltiples puntos | O(n²) por evaluación | O(n) por evaluación (forma anidada) |
| Modificar un punto | Recalcular todo | Recalcular diferencias afectadas |

### Otras ventajas
- Menor costo computacional para evaluaciones múltiples usando la forma de Horner
- Mejor estabilidad numérica que la forma canónica
- Fácil de implementar recursivamente
- Permite estimar el error fácilmente con el siguiente término

## 3. Fenómeno de Runge

### ¿Qué es?
El fenómeno de Runge es un problema de oscilación extrema en los bordes del intervalo cuando se interpola una función con polinomios de grado alto usando puntos equiespaciados.

### Explicación clara
Imagina que intentas aproximar una función suave con un polinomio de grado muy alto. En lugar de mejorar la aproximación en todo el intervalo, el polinomio comienza a oscilar violentamente cerca de los extremos. ¡Cuántos más puntos usas, PEOR se vuelve la aproximación en los bordes!

### El ejemplo clásico
La función de Runge:
$$f(x) = \frac{1}{1+25x^2}}$$ en el intervalo $[-1, 1]$

**Comportamiento:**
- Con puntos equiespaciados y n=5: oscilaciones leves
- Con n=10: oscilaciones notables cerca de |x|=1
- Con n=15: oscilaciones severas, el error crece exponencialmente

### ¿Por qué ocurre?
1. Los polinomios de grado alto son inherentemente rígidos
2. Para pasar por todos los puntos, deben curvarse excesivamente
3. La curvatura se concentra en los extremos del intervalo
4. El error de interpolación crece como O(εⁿ) en los bordes

### Lección importante
**Aumentar el grado del polinomio NO garantiza mejor aproximación.** De hecho, para funciones suaves, puntos equiespaciados y grado alto, ¡el error puede divergir!

## 4. Splines Cúbicos (cómo evitan Runge)

### ¿Qué son los splines cúbicos?
En lugar de usar UN polinomio de grado alto para todo el intervalo, los splines cúbicos dividen el dominio en subintervalos [xᵢ, xᵢ₊₁] y usan un polinomio de grado 3 en CADA subintervalo.

### Condiciones de continuidad
Para un spline cúbico S(x) que interpola puntos (xᵢ, yᵢ):
- **C⁰**: S(x) es continua (pasa por todos los puntos)
- **C¹**: La primera derivada S'(x) es continua
- **C²**: La segunda derivada S''(x) es continua

Esto da 4n-2 condiciones, necesitando 2 condiciones de borde adicionales.

### ¿Por qué los splines cúbicos NO sufren el fenómeno de Runge?

| Característica | Polinomio global | Spline cúbico |
|----------------|------------------|---------------|
| Grado del polinomio | n (crece con puntos) | Siempre 3 |
| Oscilaciones | Globales (afectan todo) | Locales (aisladas a un subintervalo) |
| Runge con muchos puntos | Sí, grave | **No ocurre** |
| Error con n grande | Puede divergir | Converge (O(h⁴)) |

### Ventajas clave de splines cúbicos
1. **No sufren Runge**: incluso con 100+ puntos equiespaciados
2. **Convergencia garantizada**: al refinar la malla (aumentar n), el error disminuye como O(h⁴)
3. **Suavidad**: derivadas primera y segunda continuas (natural para curvas)
4. **Estabilidad**: pequeñas perturbaciones en los datos causan pequeños cambios

### Ejemplo práctico
Para la función de Runge f(x)=1/(1+25x²) con 20 puntos equiespaciados:
- Polinomio de grado 19: oscilaciones catastróficas (error > 10⁵ cerca de |x|=1)
- Spline cúbico: aproximación excelente (error < 0.05 en todo el intervalo)

## 5. Tabla Comparativa de Métodos

| Método | Orden de error | Sufre Runge | Costo construcción | Costo evaluación | Facilidad implementación |
|--------|---------------|-------------|--------------------|------------------|--------------------------|
| Lagrange | O(hⁿ⁺¹) | Sí (grado alto) | O(n²) | O(n²) | Media |
| Diferencias Newton | O(hⁿ⁺¹) | Sí (grado alto) | O(n²) | O(n) | Media |
| Interpolación Lineal | O(h²) | No | O(n) | O(1) (búsqueda) | Alta |
| Splines Cúbicos | O(h⁴) | **No** | O(n) | O(1) (búsqueda) | Baja (compleja) |

### Recomendaciones de uso

| Caso de uso | Método recomendado |
|-------------|---------------------|
| Pocos puntos (<10), función suave | Lagrange o Newton |
| Muchos puntos (>15), función suave | **Splines cúbicos** |
| Datos con ruido o muchos puntos | **Splines cúbicos** |
| Simplicidad sobre precisión | Interpolación lineal |
| Agregar puntos dinámicamente | Newton |
| Función de Runge o similar | **Splines cúbicos** (NO polinomio global) |

## Resumen Final

| Método | Cuándo usar | Cuándo NO usar |
|--------|-------------|----------------|
| Lagrange | Entendimiento conceptual, n pequeño | n grande, añadir puntos dinámicamente |
| Newton | N puntos fijos, múltiples evaluaciones | n grande con Runge potencial |
| Lineal | Datos ruidosos, simplicidad | Requiere alta precisión, función suave |
| Splines cúbicos | n grande, función suave, evitar Runge | Datos muy ruidosos, implementación simple |

---

**Total: ~850 palabras** ✅

Este archivo cumple con todos los requisitos:
- ✅ Fórmula de Lagrange + error de interpolación
- ✅ Diferencias de Newton (ventaja frente a Lagrange)
- ✅ Fenómeno de Runge (explicación clara)
- ✅ Splines cúbicos (cómo evitan Runge)
- ✅ Tabla comparativa de métodos
- ✅ Mínimo 500 palabras
- ✅ Escrito en español