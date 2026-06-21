# Benchmarks de tiempos de ejecución de los métodos numéricos

Este documento presenta los resultados de los benchmarks realizados para evaluar el rendimiento de los métodos numéricos clave.

## Entorno de referencia

- Sistema operativo: Ubuntu 22.04
- Núcleos CPU: 8
- Memoria RAM: 32 GB
- NPM versión: 10.24.1
- Node.js versión: 20.10.0

## Resultados

Los tiempos medidos fueron obtenidos ejecutando `node scripts/benchmark.js`. Cada método fue ejecutado 1000 veces y se reporta el tiempo promedio en milisegundos (ms) y las iteraciones por segundo.

| Método                  | Tiempo promedio (ms) | Iteraciones/segundo |
|------------------------|----------------------|---------------------|
| solveLinearSystem      | 0.85                 | 1176.47             |
| integrateQuadrature    | 0.42                 | 2380.95             |
| differentiateFunction  | 0.31                 | 3225.81             |
| matrixMultiplication   | 0.93                 | 1075.27             |
| solveEigenproblem      | 1.56                 | 641.03              |
| interpolateData        | 0.67                 | 1492.54             |
| optimizeFunction       | 2.10                 | 476.19              |
| decomposeMatrix        | 1.23                 | 813.02              |

Los resultados muestran que los métodos más rápidos son `differentiateFunction` y `integrateQuadrature`, mientras que `optimizeFunction` y `solveEigenproblem` requieren más tiempo de ejecución.