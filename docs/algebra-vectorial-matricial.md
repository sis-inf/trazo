# Álgebra vectorial y matricial

## Descripción

Las utilidades de álgebra vectorial y matricial permiten realizar operaciones matemáticas sobre vectores y matrices. Estas herramientas son utilizadas por distintos métodos numéricos para resolver sistemas de ecuaciones, realizar transformaciones y efectuar cálculos lineales de forma eficiente.

## Operaciones disponibles

Entre las operaciones más comunes se encuentran:

- Suma de vectores.
- Resta de vectores.
- Producto punto entre vectores.
- Multiplicación por un escalar.
- Suma de matrices.
- Multiplicación de matrices.
- Transpuesta de una matriz.
- Obtención de dimensiones de una matriz.

Estas operaciones facilitan la implementación de algoritmos de álgebra lineal utilizados en diversos métodos numéricos.

## Relación con los métodos numéricos

Las operaciones vectoriales y matriciales son la base de numerosos algoritmos numéricos. Permiten representar sistemas de ecuaciones, transformar datos y realizar cálculos necesarios para obtener soluciones aproximadas de manera eficiente.

## Ejemplo de uso

```java
double[] vectorA = {1, 2, 3};
double[] vectorB = {4, 5, 6};

double productoPunto = 0;

for (int i = 0; i < vectorA.length; i++) {
    productoPunto += vectorA[i] * vectorB[i];
}

System.out.println(productoPunto);
```

El ejemplo anterior calcula el producto punto entre dos vectores utilizando Java.

## Notas

Estas utilidades pueden combinarse con otros módulos del proyecto para implementar distintos métodos numéricos y operaciones de álgebra lineal.
