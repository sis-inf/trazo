## Sistemas de Ecuaciones Lineales

| Nombre | Descripcion breve | Entrada esperada | Salida esperada | Estado |
|---|---|---|---|---|
|**Eliminación de Gauss**| Transforma el sistema en una matriz triangular superior y resuelve por sustitución regresiva | Matriz de coeficientes "A" (n×n), vector de términos independientes "b" | Vector solución "x" | Pendiente |
|**Gauss-Jordan**| Extiende la Eliminación de Gauss hasta obtener la matriz identidad, resolviendo directamente | Matriz de coeficientes "A" (n×n), vector "b" | Vector solución "x"| Pendiente |
|**Jacobi**| Método iterativo que actualiza todas las incógnitas simultáneamente en cada iteración | Matriz "A", vector "b", solución inicial "x0", tolerancia, máx. iteraciones | Vector solución aproximada "x" | Pendiente |
| **LU** | Descompone una matriz en los factores L y U para resolver sistemas lineales | Matriz de coeficientes "A", vector "b" | Vector solución "x" | Pendiente |
| **Cholesky** | Descompone matrices simétricas definidas positivas para resolver sistemas lineales | Matriz "A", vector "b" | Vector solución "x" | Pendiente |
| **Determinante** | Calcula el determinante de una matriz cuadrada | Matriz cuadrada "A" | Valor del determinante         | Pendiente |



## Sistemas de Ecuaciones No Lineales

| Nombre | Descripcion breve | Entrada esperada | Salida esperada | Estado |
|---|---|---|---|---|
|**Biseccion**| Divide repetidamente un intervalo a la mitad hasta localizar la raíz | Función "f", extremos del intervalo [a, b], tolerancia | Raíz aproximada "x" | Pendiente |
|**Método de la Secante**| Aproxima la derivada usando dos puntos anteriores para converger a la raíz | Función "f", dos puntos iniciales "x0" y "x1", tolerancia | Raíz aproximada "x" | Pendiente |
|**Newton-Raphson**| Usa la función y su derivada para converger rápidamente a la raíz | Función "f", derivada "f'", punto inicial "x0", tolerancia | Raíz aproximada "x" | Pendiente |
| **Falsa Posición**| Encuentra raíces utilizando interpolación lineal dentro de un intervalo | Función "f", extremos [a,b], tolerancia | Raíz aproximada "x" | Pendiente |
| **Punto Fijo** | Resuelve ecuaciones mediante iteraciones sucesivas de una función transformada | Función g(x), valor inicial, tolerancia | Raíz aproximada "x" | Pendiente |
| **Müller** | Encuentra raíces utilizando interpolación cuadrática | Función "f", tres aproximaciones iniciales | Raíz aproximada "x" | Pendiente |



## Interpolación

| Nombre | Descripcion breve | Entrada esperada | Salida esperada | Estado |
|---|---|---|---|---|
|**Interpolación de Lagrange**| Construye un polinomio que pasa exactamente por todos los puntos dados | Arreglo de puntos "x", arreglo de valores "y", punto a estimar "x_est" | Valor interpolado "y_est" | Pendiente |
|**Interpolación de Newton**| Usa diferencias divididas para construir el polinomio interpolante de forma incremental | Arreglo de puntos "x", arreglo de valores "y", punto a estimar "x_est" | Valor interpolado "y_est" y tabla de diferencias divididas | Pendiente |
| **Interpolación Lineal** | Estima valores intermedios entre dos puntos conocidos  | Dos puntos y valor a interpolar | Valor estimado | Pendiente |
| **Spline Cúbico** | Construye curvas suaves mediante polinomios cúbicos por tramos | Conjunto de puntos | Función spline | Pendiente |
| **Splines** | Métodos generales de interpolación por tramos | Conjunto de puntos | Función interpolante | Pendiente |
| **Evaluación de Polinomios (PolyEval)** | Evalúa un polinomio en un punto dado | Coeficientes y valor x | Resultado numérico | Pendiente |


## Integración Numérica

| Nombre | Descripcion breve | Entrada esperada | Salida esperada | Estado |
|---|---|---|---|---|
|**Regla del Trapecio**| Aproxima el área bajo la curva usando trapecios en cada subintervalo | Función "f", límites [a, b], número de subintervalos "n" | Valor aproximado de la integral | Pendiente |
| **Regla Trapezoidal** | Variante de integración basada en trapecios compuestos | Función "f", límites [a,b], número de subintervalos | Valor aproximado de la integral | Pendiente |
|**Simpson 1/3**| Aproxima la integral usando polinomios de grado 2 en pares de subintervalos | Función "f", límites [a, b], número de subintervalos "n" (par) | Valor aproximado de la integral | Pendiente |
| **Simpson 3/8** | Aproxima la integral usando polinomios de grado 3 | Función "f", límites [a,b], n múltiplo de 3 | Valor aproximado de la integral | Pendiente |
| **Simpson Compuesto** | Aplica Simpson en múltiples subintervalos | Función "f", límites [a,b], n | Valor aproximado de la integral | Pendiente |
| **Derivación Numérica** | Aproxima derivadas mediante métodos numéricos | Función o datos discretos | Valor aproximado de la derivada | Pendiente |


## Ecuaciones Diferenciales Ordinarias (EDOs)

| Nombre | Descripcion breve | Entrada esperada | Salida esperada | Estado |
|---|---|---|---|---|
| **Euler** | Resuelve EDOs mediante aproximaciones sucesivas  | Función f(x,y), condición inicial, paso h | Solución aproximada | Pendiente |
| **Euler Mejorado** | Mejora la precisión del método de Euler utilizando una pendiente corregida | Función f(x,y), condición inicial, paso h | Solución aproximada | Pendiente |

## Diferencias Finitas

| Nombre | Descripcion breve | Entrada esperada | Salida esperada | Estado |
|---|---|---|---|---|
| **Diferencia Hacia Adelante** | Aproxima derivadas mediante diferencias finitas hacia adelante | Función o conjunto de datos, paso h | Aproximación de la derivada | Pendiente |

## Polinomios

| Nombre | Descripcion breve | Entrada esperada | Salida esperada | Estado |
|---|---|---|---|---|
| **Método de Horner** | Evalúa polinomios de manera eficiente | Coeficientes del polinomio y valor x | Resultado de la evaluación | Pendiente |

## Análisis

| Nombre | Descripcion breve | Entrada esperada | Salida esperada | Estado |
|---|---|---|---|---|
| **Ajuste por Mínimos Cuadrados** | Ajusta una función a un conjunto de datos minimizando el error cuadrático | Conjunto de puntos experimentales | Modelo ajustado | Pendiente |

## Utilidades

| Nombre | Descripcion breve | Entrada esperada | Salida esperada | Estado |
|---|---|---|---|---|
| **Convergence** | Funciones auxiliares para análisis de convergencia | Datos numéricos | Indicadores de convergencia | Pendiente |
| **Math** | Funciones matemáticas auxiliares para los métodos numéricos | Valores numéricos | Resultados numéricos | Pendiente |
| **Validation** | Validación de parámetros de entrada para los métodos | Parámetros de entrada | Resultado de validación | Pendiente |

