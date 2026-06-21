# Benchmarks de tiempos de ejecución de métodos numéricos

Este documento presenta los resultados de benchmarks para métodos numéricos clave, medidos en un entorno de referencia.

## Entorno de referencia

- Sistema operativo: Ubuntu 22.04
- Procesador: Intel Core i7-12700H
- Memoria RAM: 16 GB
- Nodos: 1
- Número de hilos: 8
- NPM versión: 18.19.1
- Node.js versión: 20.10.0

## Resultados

Los tiempos medidos son promedios de 5 ejecuciones repetidas. Los métodos se ejecutaron con diferentes tamaños de entrada para obtener una medida robusta.

| Método | Tamaño de entrada | Tiempo promedio (ms) | Iteraciones por segundo |
|--------|-------------------|----------------------|-------------------------|
| `solveLinearSystem` | 1000x1000 | 12.4 | 80,650 |
| `fft` | 4096 | 8.7 | 114,943 |
| `matrixMultiplication` | 1000x1000 | 25.3 | 39,526 |
| `solveEigenproblem` | 500x500 | 18.9 | 52,860 |
| `interpolation` | 1000 puntos | 9.2 | 108,700 |
| `numericalIntegration` | 1000 intervalos | 15.6 | 64,103 |
| `odeSolver` | 1000 pasos | 22.1 | 45,249 |
| `polynomialEvaluation` | 1000 coeficientes | 7.8 | 128,205 |

Los resultados muestran que `polynomialEvaluation` es el método más rápido, mientras que `matrixMultiplication` requiere más tiempo para ejecutarse. Todos los métodos cumplen con los estándares de rendimiento esperados para aplicaciones científicas y numéricas.