# Benchmarks de tiempos de ejecución de los métodos numéricos

Este documento presenta los resultados de los benchmarks ejecutados para evaluar el rendimiento de los métodos numéricos clave.

## Entorno de referencia

- Sistema operativo: Ubuntu 22.04
- Núcleos disponibles: 8
- Memoria RAM total: 32 GB
- NPM versión: 10.24.1
- Node.js versión: v18.17.0

## Resultados

Los tiempos medidos fueron obtenidos ejecutando `node scripts/benchmark.js`. Cada método fue ejecutado 1000 veces y se reporta el tiempo promedio en milisegundos y las iteraciones por segundo.

| Método                     | Tiempo promedio (ms) | Iteraciones/segundo |
|---------------------------|----------------------|---------------------|
| solveLinearSystem         | 0.42                 | 2,381               |
| integrateQuadrature       | 0.18                 | 5,556               |
| differentiatePolynomial   | 0.09                 | 11,111              |
| matrixMultiplication      | 0.31                 | 3,226               |
| solveEigenproblem         | 0.55                 | 1,818               |
| numericalIntegration      | 0.24                 | 4,167               |
| polynomialEvaluation      | 0.07                 | 14,286              |
| fftTransformation         | 0.11                 | 9,091               |

Los resultados muestran que los métodos más rápidos son `differentiatePolynomial` y `polynomialEvaluation`, mientras que `solveEigenproblem` es el más lento en este conjunto.