# Integración por Monte Carlo

## Descripción

La integración por Monte Carlo es un método numérico que aproxima el valor de una integral mediante el uso de muestras aleatorias. Es especialmente útil cuando la integral involucra muchas dimensiones o cuando los métodos clásicos de cuadratura son difíciles de aplicar.

## ¿Cuándo utilizarla?

Este método es recomendable cuando:

- La integral tiene alta dimensión.
- La función es compleja o no posee una solución analítica sencilla.
- Los métodos tradicionales resultan costosos computacionalmente.
- Se requiere una aproximación estadística del resultado.

## Comparación con métodos de cuadratura

Los métodos de cuadratura, como el método del trapecio o Simpson, ofrecen gran precisión para problemas de baja dimensión. Sin embargo, cuando aumenta la dimensión del problema, el costo computacional crece rápidamente.

La integración por Monte Carlo mantiene un comportamiento más estable frente al incremento de dimensiones, por lo que suele ser la mejor alternativa para integrales multidimensionales.

## Ejemplo de integración 3D

```java
double suma = 0.0;
int muestras = 100000;

for (int i = 0; i < muestras; i++) {
    double x = Math.random();
    double y = Math.random();
    double z = Math.random();

    suma += x * y * z;
}

double volumen = 1.0;
double integral = volumen * suma / muestras;

System.out.println(integral);
```

## Reproducibilidad mediante semilla

Cuando se utilizan números aleatorios es recomendable fijar una semilla para obtener resultados reproducibles durante pruebas y experimentos.

```java
Random random = new Random(42);
```

Con una semilla fija, la secuencia de números aleatorios será siempre la misma, facilitando la comparación y validación de resultados.

## Relación con los métodos numéricos

La integración por Monte Carlo es ampliamente utilizada en simulaciones, física computacional, finanzas, ingeniería y análisis estadístico, especialmente cuando se requiere resolver problemas de integración multidimensional.
