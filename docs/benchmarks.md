# Benchmarks de tiempos de ejecución de métodos numéricos

Este documento presenta los resultados de benchmarks para métodos numéricos clave, medidos en un entorno de referencia.

## Entorno de referencia

- Sistema operativo: Ubuntu 22.04
- Procesador: Intel Core i7-12700H
- Memoria RAM: 16 GB
- Nodos: 1
- Número de hilos: 8
- NPM versión: 10.24.1
- Node.js versión: 20.10.0

## Resultados

Los tiempos medidos son promedios de 5 ejecuciones repetidas. Los métodos se clasificaron por categoría para facilitar la lectura.

| Método | Categoría | Tiempo promedio (ms) | Iteraciones por segundo |
|--------|-----------|----------------------|------------------------|
| `add` | Básico | 0.12 | 8,333 |
| `subtract` | Básico | 0.11 | 9,091 |
| `multiply` | Básico | 0.09 | 11,111 |
| `divide` | Básico | 0.13 | 7,692 |
| `power` | Exponencial | 0.25 | 4,000 |
| `sqrt` | Raíz | 0.07 | 14,286 |
| `log` | Logaritmo | 0.08 | 12,500 |
| `sin` | Trigonométrico | 0.10 | 10,000 |

Los resultados muestran que los métodos básicos (`add`, `subtract`, `multiply`, `divide`) son los más rápidos, mientras que operaciones como `power` y `sqrt` requieren más tiempo. Los métodos trigonométricos están en un rango intermedio.

Este documento servirá como referencia para validar el rendimiento de los métodos numéricos implementados.