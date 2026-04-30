# Trazo

> Trazo es una librería de métodos numéricos en JavaScript diseñado para resolver problemas matemáticos mediante métodos de aproximación.

## ¿Qué es?

Trazo es una librería en desarrollo que implementa distintos métodos numéricos para resolver sistemas de ecuaciones lineales y no lineales, realizar interpolaciones y aplicar integración numérica de manera sencilla.

## ¿Para quién es?

Este proyecto está dirigido a:
- Estudiantes de ingeniería
- Personas que estudian métodos numéricos
- Profesionales que necesiten hacer cálculos aproximados en JavaScript

## ¿Qué problema resuelve?

Trazo facilita la implementación de algoritmos matemáticos complejos, evitando que el usuario tenga que programarlos desde cero y permitiéndole enfocarse en su aplicación.

## Métodos numéricos disponibles

El proyecto implementa los siguientes métodos:

> Sistemas de ecuaciones Lineales:
	- Eliminacion de Gauss
	- Gauss-Jordan
	- Descomposicion LU
	- Jacobi
	- Gauss-Seidel
	
> Sistema de ecuaciones no Lineales:
	- Método de bisección  
	- Método de la secante  
	- Método de Newton-Raphson
	- Método de Falsa Posición
	- Método de Punto Fijo
	
> Interpolacion:
	- Interpolación de Lagrange
	- Interpolación de Newton
	
> Integración:
	- Regla del trapecio  
	- Método de Simpson (1/3, 3/8)
	- Cuadratura de Gauss

> Nota: Actualmente en desarrollo.

## Instalación

Clonar el repositorio:

    git clone https://github.com/sis-inf/trazo.git
    cd trazo

## Uso rápido

Ejemplo básico de uso esperado:
	import { biseccion } from 'trazo';
	const f = (x) => x * x - 4;
	const resultado = biseccion(f, 0, 3, 0.001);
	console.log("Raíz aproximada:", resultado);
    
## Documentación
Ver la carpeta [docs/](docs/)

## Contribuir
Ver [CONTRIBUTING.md](CONTRIBUTING.md)

## Licencia
MIT — ver [LICENSE](LICENSE)