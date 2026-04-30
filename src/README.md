# 📚 Estructura de la carpeta src

```bash
src/
├── core/
├── ecuaciones/
├── edo/
├── integracion/
├── interpolacion/
├── sistemas/
└── utils/
```

Este directorio contiene la implementación de distintos métodos numéricos organizados según la categoría del problema que resuelven.

---

> [!NOTE]
> La arquitectura del proyecto está diseñada bajo un enfoque modular y extensible. La incorporación de nuevos métodos numéricos o la creación de nuevas categorías no afecta el comportamiento existente, siempre que se respete la organización por tipo de método y la consistencia estructural del código.

---

## 📂 Descripción de Directorios

### 🔹 `ecuaciones/`

Métodos para resolver ecuaciones no lineales.

Ejemplos:

- Bisección
- Newton-Raphson
- Secante

---

### 🔹 `sistemas/`

Métodos para resolver sistemas de ecuaciones lineales.

Ejemplos:

- Gauss
- Gauss-Jordan
- Jacobi
- Gauss-Seidel

---

### 🔹 `integracion/`

Métodos de integración numérica.

Ejemplos:

- Regla del trapecio
- Simpson
- Simpson 3/8

---

### 🔹 `interpolacion/`

Métodos de interpolación de datos.

Ejemplos:

- Lagrange
- Interpolación de Newton

---

### 🔹 `edo/`

Métodos para resolver ecuaciones diferenciales ordinarias.

Ejemplos:

- Euler
- Runge-Kutta

---

### 🔹 `utils/`

Funciones auxiliares reutilizables.

Ejemplos:

- Operaciones matemáticas
- Manejo de matrices
- Funciones de apoyo

---

### 🔹 `core/`

Componentes base e interfaces comunes para los métodos.

---

## 🧩 Principios de Diseño

- **Modularidad**: Cada método numérico se implementa como un módulo independiente, con una única responsabilidad bien definida.
- **Extensibilidad**: Es posible incorporar nuevos métodos o categorías sin modificar la estructura existente, manteniendo una organización coherente por tipo de problema.
- **Escalabilidad**: La estructura del proyecto permite crecer de forma ordenada conforme se añaden nuevos algoritmos o funcionalidades.
- **Separación de responsabilidades**: La lógica de cálculo, utilidades y organización por categorías se mantiene desacoplada para facilitar el mantenimiento.
- **Simplicidad**: Se prioriza un diseño claro y comprensible, orientado a facilitar el aprendizaje y la reutilización del código.
