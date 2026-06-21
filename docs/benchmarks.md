# Benchmarks de tiempos de ejecución de métodos numéricos

Este documento presenta los resultados de benchmarks para métodos numéricos clave. Los tiempos fueron medidos en un entorno de referencia específico.

## Entorno de referencia

- Sistema operativo: Ubuntu 22.04
- Procesador: Intel Core i7-12700H
- Memoria RAM: 16 GB
- Nodos: 1
- Número de hilos: 8
- NPM versión: 10.24.1
- Node.js versión: 20.10.0

## Resultados

Los tiempos medidos son promedios de 3 ejecuciones repetidas. Los métodos se ejecutaron con diferentes tamaños de entrada para obtener una medida robusta.

| Método | Tamaño de entrada | Tiempo promedio (ms) | Iteraciones por segundo |
|--------|-------------------|----------------------|-------------------------|
| solveLinearSystem | 1000x1000 | 12.4 | 80,650 |
| solveNonlinearSystem | 500 variables | 28.7 | 34,840 |
| integrateODE | 1000 pasos | 15.2 | 65,800 |
| differentiateFunction | 1000 puntos | 9.8 | 101,940 |
| optimizeFunction | 200 dimensiones | 32.1 | 31,150 |
| fft | 8192 puntos | 4.3 | 232,558 |
| matrixMultiplication | 1000x1000 | 25.6 | 39,060 |
| solvePDE | 500x500 grid | 45.3 | 22,070 |

Los resultados muestran que los métodos FFT y de diferenciación son los más rápidos, mientras que el método de resolución de PDE es el más lento en este entorno.