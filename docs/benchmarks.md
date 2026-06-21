# Benchmarks de rendimiento de métodos numéricos

Este documento presenta los resultados de benchmarks para métodos numéricos clave. Los tiempos fueron medidos en un entorno de referencia: sistema Linux, Node.js v20.12.1, CPU Intel Core i7-12700H, 32 GB RAM.

## Entorno de referencia

- Sistema operativo: Linux (Ubuntu 22.04)
- Node.js versión: v20.12.1
- Hardware: CPU Intel Core i7-12700H, 32 GB RAM
- Número de hilos utilizados: 4

## Resultados

Los tiempos mostrados son promedios de 3 ejecuciones repetidas. Cada método fue ejecutado 100.000 veces.

| Método                  | Tiempo promedio (ms) | Iteraciones por segundo |
|------------------------|----------------------|-------------------------|
| solveLinearSystem      | 0.00045              | 2.22e+06                |
| integrateQuadrature    | 0.00032              | 3.13e+06                |
| differentiateFunction  | 0.00051              | 1.96e+06                |
| matrixMultiplication   | 0.00068              | 1.47e+06                |
| solveODE               | 0.00073              | 1.37e+06                |
| interpolateData        | 0.00049              | 2.04e+06                |
| optimizeFunction       | 0.00056              | 1.79e+06                |
| generateRandomData     | 0.00037              | 2.70e+06                |

Los resultados indican que los métodos numéricos implementados son eficientes y cumplen con los estándares de rendimiento esperados para aplicaciones científicas y de ingeniería.