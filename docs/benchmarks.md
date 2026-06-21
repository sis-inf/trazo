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
| `add` | 1000000 | 0.85 | 1176470 |
| `multiply` | 1000000 | 1.23 | 813081 |
| `subtract` | 1000000 | 0.91 | 1098901 |
| `divide` | 1000000 | 1.56 | 641025 |
| `power` | 1000000 | 2.34 | 427350 |
| `sqrt` | 1000000 | 0.45 | 2222222 |
| `log` | 1000000 | 0.67 | 1492537 |
| `exp` | 1000000 | 0.78 | 1282051 |

Los resultados muestran que los métodos de operaciones básicas (`add`, `subtract`, `multiply`, `divide`) son los más rápidos, mientras que `power` requiere más tiempo. Los métodos de funciones matemáticas elementales (`sqrt`, `log`, `exp`) también son eficientes, con `sqrt` siendo el más rápido.

Este conjunto de benchmarks puede usarse como referencia para futuras mejoras o comparaciones.