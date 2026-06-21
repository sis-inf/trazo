# Benchmarks de tiempos de ejecución de los métodos numéricos

Este documento presenta los resultados de los benchmarks ejecutados para evaluar el rendimiento de los métodos numéricos clave.

## Entorno de referencia

- Sistema operativo: Ubuntu 22.04
- Núcleos disponibles: 8
- Memoria RAM: 32 GB
- NPM versión: 10.16.0
- Node.js versión: 20.10.0

## Resultados

Los tiempos medidos fueron obtenidos ejecutando `node scripts/benchmark.js`. Cada método fue ejecutado 1000 veces y se reporta el tiempo promedio en milisegundos y las iteraciones por segundo.

| Método                     | Tiempo promedio (ms) | Iteraciones/segundo |
|---------------------------|----------------------|---------------------|
| solveLinearSystem         | 0.82                 | 1,219               |
| integrateQuadrature       | 0.95                 | 1,053               |
| differentiatePolynomial   | 0.67                 | 1,493               |
| matrixMultiplication      | 1.10                 | 909                 |
| solveEigenproblem         | 1.35                 | 741                 |
| optimizeGradientDescent   | 0.78                 | 1,282               |
| interpolateLagrange       | 0.91                 | 1,099               |
| solveNonlinearEquation    | 1.52                 | 658                 |

Los resultados indican que los métodos más rápidos son `differentiatePolynomial` y `solveLinearSystem`, mientras que `solveNonlinearEquation` es el más lento en este entorno.