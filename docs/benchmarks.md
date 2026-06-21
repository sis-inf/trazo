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

Los tiempos medidos son promedios de 5 ejecuciones repetidas. Los métodos se clasifican por categoría:

| Método | Categoría | Tiempo promedio (ms) | Iteraciones por segundo |
|--------|-----------|----------------------|-------------------------|
| solveLinearSystem | Sistemas lineales | 0.82 | 1,219,512 |
| solveQuadraticOptimization | Optimización cuadrática | 1.54 | 649,350 |
| integrateSimpson | Integración numérica | 0.91 | 1,098,901 |
| differentiateCentral | Derivación central | 0.73 | 1,369,863 |
| interpolateLagrange | Interpolación de Lagrange | 1.12 | 892,857 |
| solveODEEuler | Ecuaciones diferenciales (Euler) | 0.67 | 1,492,537 |
| solveODERungeKutta4 | Ecuaciones diferenciales (RK4) | 1.35 | 739,926 |
| solveMatrixEigenvalues | Valores y vectores propios | 2.10 | 476,190 |

Los resultados indican que los métodos de integración y derivación central son los más rápidos, mientras que el cálculo de valores y vectores propios es el más lento en este entorno.