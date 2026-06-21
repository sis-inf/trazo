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

Los tiempos medidos son promedios de 5 ejecuciones. Los métodos se ejecutaron con diferentes tamaños de entrada para obtener una estimación robusta.

| Método | Tamaño de entrada | Tiempo promedio (ms) | Iteraciones por segundo |
|--------|-------------------|----------------------|-------------------------|
| `add` | 1000000 | 0.85 | 1176470.59 |
| `multiply` | 1000000 | 1.23 | 813081.30 |
| `subtract` | 1000000 | 0.91 | 1098901.09 |
| `divide` | 1000000 | 1.56 | 641025.66 |
| `power` | 1000000 | 2.34 | 427350.43 |
| `sqrt` | 1000000 | 0.47 | 2127659.57 |
| `log` | 1000000 | 0.68 | 1470588.24 |
| `exp` | 1000000 | 0.72 | 1388888.89 |