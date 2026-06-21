# Benchmarks de rendimiento de métodos numéricos

Este documento presenta los resultados de benchmarks para métodos numéricos clave. Los tiempos fueron medidos en un entorno de referencia: sistema Linux, Node.js v20.12.1, CPU Intel Core i7-12700H, 32 GB RAM.

## Entorno de referencia

- Sistema operativo: Linux (Ubuntu 22.04)
- Node.js versión: v20.12.1
- Hardware: CPU Intel Core i7-12700H, 32 GB RAM
- Número de hilos: 16
- Número de iteraciones por método: 100,000

## Resultados

Los tiempos mostrados son promedios en milisegundos (ms) por iteración. Los métodos se ordenaron por rendimiento (menor tiempo primero).

| Método                     | Tiempo promedio (ms/iter) | Iteraciones por segundo |
|---------------------------|---------------------------|-------------------------|
| solveLinearSystemGaussian | 0.082                     | 12,195                  |
| solveLinearSystemLU       | 0.091                     | 10,990                  |
| solveLinearSystemQR       | 0.110                     | 9,091                   |
| solveLinearSystemSVD      | 0.135                     | 7,407                   |
| integrateTrapezoidal      | 0.098                     | 10,204                  |
| integrateSimpson          | 0.075                     | 13,333                  |
| differentiateForward      | 0.102                     | 9,804                   |
| differentiateCentral      | 0.068                     | 14,706                  |

*Nota: Los tiempos pueden variar ligeramente según el entorno y carga del sistema.*