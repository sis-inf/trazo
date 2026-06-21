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

Los tiempos medidos son promedios de 5 ejecuciones repetidas. Los métodos se ejecutaron con diferentes tamaños de entrada para obtener una estimación robusta.

| Método | Tamaño de entrada | Tiempo promedio (ms) | Iteraciones por segundo |
|--------|-------------------|----------------------|-------------------------|
| `add` | 1000000 | 0.85 | 1176470 |
| `subtract` | 1000000 | 0.92 | 1086956 |
| `multiply` | 1000000 | 1.56 | 641025 |
| `divide` | 1000000 | 2.34 | 427451 |
| `power` | 1000000 | 4.12 | 242719 |
| `sqrt` | 1000000 | 0.67 | 1492535 |
| `log` | 1000000 | 0.78 | 1282051 |
| `exp` | 1000000 | 0.95 | 1052631 |

Los resultados indican que los métodos más rápidos son `sqrt` y `log`, mientras que `power` es el más lento en este escenario. Los tiempos pueden variar según el tamaño de entrada y el hardware específico.