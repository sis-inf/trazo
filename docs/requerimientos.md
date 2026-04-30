# Requerimientos del Proyecto - Trazo

## Requerimientos Funcionales

| ID | Descripción | Prioridad | Estado |
|---|---|---|---|
| RF-001 | Implementar el método de Bisección para hallar raíces en intervalos. | Alta | Pendiente |
| RF-002 | Implementar el método de Newton-Raphson mediante el uso de derivadas. | Alta | Pendiente |
| RF-003 | Implementar el método de la Secante para funciones de difícil derivación. | Media | Pendiente |
| RF-004 | Validar intervalos de entrada mediante el Teorema del Valor Intermedio. | Alta | Pendiente |
| RF-005 | Calcular y retornar el error relativo porcentual en cada iteración. | Alta | Pendiente |
| RF-006 | Generar una tabla de iteraciones detallada para cada cálculo realizado. | Media | Pendiente |
| RF-007 | Permitir la configuración manual de la tolerancia (épsilon) y el límite de iteraciones. | Baja | Pendiente |
| RF-008 | Exportar los resultados de las raíces halladas en formato JSON o CSV. | Media | Pendiente |

### Requerimientos No Funcionales

| ID | Descripción | Categoría | Estado |
|---|---|---|---|
| **RNF-001** | **Compatibilidad:** La librería debe ser multiplataforma, funcionando correctamente en Windows 10/11 y distribuciones Linux (Ubuntu/Debian) con Python 3.10+. | Compatibilidad | Pendiente |
| **RNF-002** | **Precisión Numérica:** Todos los cálculos de raíces deben soportar una precisión mínima de $10^{-10}$ utilizando tipos de datos `float64`. | Precisión | Pendiente |
| **RNF-003** | **Rendimiento:** El tiempo de respuesta para encontrar una raíz con 500 iteraciones no debe superar los 150 milisegundos en hardware estándar. | Rendimiento | Pendiente |
| **RNF-004** | **Dependencias:** La librería solo puede depender de `NumPy` para operaciones matemáticas pesadas, evitando dependencias externas innecesarias para mantenerla ligera. | Restricción | Pendiente |
| **RNF-005** | **Mantenibilidad:** El código debe seguir las guías de estilo PEP 8 y estar documentado con Docstrings para facilitar su uso por otros desarrolladores. | Calidad | Pendiente |
## Requerimientos de Sistema

| ID | Descripción |
|---|---|
| RS-001 | Instalación previa de Python 3.10 o superior. |
| RS-002 | Librería NumPy instalada para el manejo de vectores y matrices. |
| RS-003 | Espacio mínimo en disco de 50MB para la instalación de la librería. |
| RS-004 | Procesador con soporte para operaciones de punto flotante de 64 bits. |