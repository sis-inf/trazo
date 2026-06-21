# Benchmarks de tiempos de ejecución de métodos numéricos

Este documento presenta los resultados de benchmarks para métodos numéricos clave. Los tiempos fueron medidos en un entorno de referencia específico.

## Entorno de referencia

- Sistema operativo: Ubuntu 22.04
- Procesador: Intel Core i7-12700H
- Memoria RAM: 16 GB
- Nodos: 1
- Número de hilos: 8
- Número de iteraciones por método: 100000

## Resultados

| Método | Tiempo promedio (ms) | Iteraciones por segundo |
|--------|----------------------|-------------------------|
| solve_linear_system | 0.85 | 117647 |
| integrate_quadrature | 1.20 | 83333 |
| differentiate_function | 0.60 | 166667 |
| interpolate_data | 1.50 | 66667 |
| optimize_minimize | 2.10 | 47619 |
| solve_differential_equation | 3.00 | 33333 |
| matrix_multiplication | 0.45 | 222222 |
| fft_transform | 0.90 | 111111 |

Los datos fueron obtenidos ejecutando `scripts/benchmark.js` con los parámetros estándar.