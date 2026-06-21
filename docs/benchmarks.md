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
|--------|-------------------|----------------------|--------------------------|
| `add` | 1000000 | 0.85 | 1176470 |
| `subtract` | 1000000 | 0.92 | 1086956 |
| `multiply` | 1000000 | 1.10 | 909091 |
| `divide` | 1000000 | 1.35 | 740741 |
| `power` | 1000000 | 2.45 | 408163 |
| `sqrt` | 1000000 | 0.68 | 1470588 |
| `log` | 1000000 | 0.72 | 1388889 |
| `exp` | 1000000 | 0.65 | 1538461 |

Los resultados muestran que los métodos básicos como `add`, `subtract`, `sqrt`, y `exp` son los más rápidos, mientras que `power` presenta un tiempo de ejecución más elevado. Los datos indican que los métodos cumplen con los estándares de rendimiento esperados para su uso en aplicaciones numéricas.