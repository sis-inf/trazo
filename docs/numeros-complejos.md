# Números complejos

## Descripción

Los números complejos permiten representar valores de la forma **a + bi**, donde:

- **a** es la parte real.
- **b** es la parte imaginaria.
- **i** es la unidad imaginaria, definida como √-1.

En esta biblioteca, las utilidades de números complejos se utilizan para realizar cálculos matemáticos cuando las operaciones producen resultados que no pueden representarse únicamente con números reales.

## Operaciones disponibles

Las operaciones básicas con números complejos incluyen:

- Suma.
- Resta.
- Multiplicación.
- División.
- Obtención del módulo.
- Obtención de la parte real e imaginaria.

Estas operaciones permiten manipular resultados intermedios durante la ejecución de distintos métodos numéricos.

## Relación con el método de Müller

El método de Müller puede encontrar raíces reales y también raíces complejas de una función.

Cuando durante el proceso aparecen valores complejos, estas utilidades permiten representarlos y operar con ellos correctamente, evitando perder precisión en los cálculos.

## Ejemplo de uso

```java
// Ejemplo de representación de un número complejo
double parteReal = 2.0;
double parteImaginaria = 3.0;

// Número complejo: 2 + 3i
System.out.println(parteReal + " + " + parteImaginaria + "i");
```

Complex suma = z1.add(z2);
System.out.println(suma);
```

El ejemplo anterior crea dos números complejos y realiza una suma entre ellos.

## Notas

- Los números complejos son necesarios para resolver problemas donde existen raíces no reales.
- Su utilización facilita la implementación de métodos numéricos avanzados como el método de Müller.
