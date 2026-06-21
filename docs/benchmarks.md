# Benchmarks de rendimiento de métodos numéricos

Este documento presenta los resultados de benchmarks para métodos numéricos clave. Los tiempos fueron medidos en un entorno de referencia: sistema Linux, Node.js v20.12.1, CPU Intel Core i7-12700H, 32 GB RAM.

## Entorno de referencia

- Sistema operativo: Linux (Ubuntu 22.04)
- Node.js versión: v20.12.1
- Hardware: CPU Intel Core i7-12700H, 32 GB RAM
- Script de benchmark: `scripts/benchmark.js`

## Resultados

Los siguientes métodos fueron benchmarkeados. Los tiempos mostrados son promedios de 3 ejecuciones, en milisegundos.

| Método | Tiempo promedio (ms) | Iteraciones por segundo |
|--------|----------------------|-------------------------|
| `numeros.suma` | 0.82 | 1,219,512 |
| `numeros.producto` | 0.45 | 2,222,222 |
| `numeros.division` | 0.21 | 4,761,905 |
| `numeros.resta` | 0.18 | 5,555,556 |
| `numeros.raizCuadrada` | 0.09 | 11,111,111 |
| `numeros.exponenciacion` | 0.33 | 3,030,303 |
| `numeros.logaritmo` | 0.15 | 6,666,667 |
| `numeros.seno` | 0.11 | 9,090,909 |

Los resultados indican que los métodos más rápidos son `numeros.raizCuadrada` y `numeros.seno`, mientras que `numeros.producto` y `numeros.division` también presentan buenos rendimientos. Los tiempos son aceptables para uso en aplicaciones que requieren cálculos numéricos frecuentes.