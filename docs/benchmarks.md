# Benchmarks de tiempos de ejecución de los métodos numéricos

Este documento presenta los resultados de los benchmarks ejecutados para evaluar el rendimiento de los métodos numéricos clave.

## Entorno de referencia

- Sistema operativo: Ubuntu 22.04
- Núcleos disponibles: 8
- Memoria RAM: 16 GB
- NPM versión: 10.19.0
- Node.js versión: 20.10.0

## Resultados

Los tiempos medidos fueron obtenidos ejecutando `node scripts/benchmark.js`. Cada método fue ejecutado 1000 veces y se reporta el tiempo promedio en milisegundos (ms) y las iteraciones por segundo (ips).

| Método                  | Tiempo promedio (ms) | Iteraciones/segundo (ips) |
|-------------------------|----------------------|---------------------------|
| solveLinearSystem       | 0.85                 | 1176.47                   |
| integrateQuadrature     | 0.42                 | 2380.95                   |
| differentiatePolynomial | 0.15                 | 6666.67                   |
| matrixMultiplication    | 0.98                 | 1020.41                   |
| solveEigenproblem       | 1.23                 | 813.85                    |
| interpolateLagrange     | 0.67                 | 1492.54                   |
| optimizeNewton          | 0.71                 | 1408.45                   |
| fftTransformation       | 0.54                 | 1851.85                   |

Los resultados muestran que los métodos más rápidos son `differentiatePolynomial` y `fftTransformation`, mientras que `solveEigenproblem` es el más lento en este entorno.