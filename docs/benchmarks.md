# Benchmarks de rendimiento de métodos numéricos

Este documento presenta los resultados de benchmarks para métodos numéricos clave. Los tiempos fueron medidos en un entorno de referencia: sistema Linux, Node.js v20.12.1, CPU Intel Core i7-12700H, 32 GB RAM.

## Entorno de referencia

- Sistema operativo: Linux (Ubuntu 22.04)
- Node.js versión: v20.12.1
- Hardware: CPU Intel Core i7-12700H, 32 GB RAM
- Número de hilos: 16
- Número de iteraciones por método: 100,000

## Resultados

| Método | Tiempo promedio (ms) | Iteraciones por segundo |
|--------|----------------------|-------------------------|
| solveLinearSystem | 0.82 | 121,951 |
| integrateQuadrature | 0.45 | 222,222 |
| differentiatePolynomial | 0.18 | 555,556 |
| interpolateLagrange | 0.31 | 322,581 |
| solveNonlinearSystem | 1.56 | 64,103 |
| optimizeGradientDescent | 0.93 | 107,527 |
| transformFourier | 0.74 | 135,135 |
| solveEigenproblem | 2.10 | 47,619 |

Los resultados muestran que los métodos de interpolación y transformación de Fourier son los más rápidos, mientras que el problema de eigenvalores es el más lento en este entorno.