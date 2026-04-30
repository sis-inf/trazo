
# Arquitectura de la librería Trazo

## Visión general

**Trazo** es una librería de métodos numéricos en JavaScript (ES6+) diseñada para resolver problemas matemáticos mediante algoritmos de aproximación. Su arquitectura es modular y extensible.

## Componentes principales

- **Sistemas de ecuaciones lineales:** Métodos como Gauss, Gauss-Jordan, LU, Jacobi y Gauss-Seidel.
- **Sistemas no lineales:** Bisección, secante, Newton-Raphson, falsa posición.
- **Interpolación:** Lagrange y Newton.
- **Integración numérica:** Trapecio, Simpson, cuadratura de Gauss.
- **Core:** Punto de entrada (`index.js`) que organiza los módulos.

## Diagrama de arquitectura


trazo/
│
├── sistemas/
│ ├── lineales/
│ └── no-lineales/
├── interpolacion/
└── integracion/


## Tecnologías utilizadas

| Componente | Tecnología | Justificación |
|-----------|------------|--------------|
| Núcleo | JavaScript (ES6+) | Lenguaje principal |
| Dependencias | npm | Gestión de paquetes |
| Documentación | Markdown | Claridad |

## Decisiones de diseño

### Decisión 1
**Contexto:** Se requiere modularidad.  
**Decisión:** Separar la librería en módulos independientes.  
**Consecuencias:** Facilita mantenimiento y escalabilidad.

### Decisión 2
**Contexto:** Facilidad de uso.  
**Decisión:** Exportar funciones desde `index.js`.  
**Consecuencias:** Uso sencillo en otros proyectos.

## Flujo de datos

1. El usuario importa un método.
2. Define parámetros.
3. El sistema ejecuta el algoritmo.
4. Retorna resultados.