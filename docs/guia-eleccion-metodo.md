# Guia de Eleccion de Metodo Numerico

Arbol de decision para elegir el metodo numerico adecuado segun el tipo de problema.

## Busqueda de raices

Pregunta: Tienes un intervalo con cambio de signo?

- SI: Usa **biseccion** o **Brent**
  - Biseccion: simple, garantiza convergencia, mas lento
  - Brent: combina biseccion con interpolacion, mas rapido

- NO: Conoces la derivada de la funcion?
  - SI: Usa **Newton-Raphson** — convergencia cuadratica, muy rapido
  - NO: Necesitas garantia de convergencia?
    - SI: Usa **secante** — no requiere derivada, convergencia superlineal
    - NO: Usa **Steffensen** — no requiere derivada, convergencia cuadratica

## Sistemas de ecuaciones lineales

Pregunta: La matriz es simetrica definida positiva?

- SI: Usa **Cholesky** — muy eficiente para este tipo de matrices
- NO: La matriz es pequena y densa?
  - SI: Usa **Gauss-Jordan** — facil de implementar, resultado directo
  - NO: La matriz es grande y dispersa?
    - SI: Usa **Jacobi** o **Gauss-Seidel** — metodos iterativos eficientes
    - NO: Usa **gradiente conjugado** — optimo para matrices grandes

## Ecuaciones diferenciales ordinarias (EDO)

Pregunta: Necesitas alta precision con paso adaptativo?

- SI: Usa **Runge-Kutta 4** o **RK45** — equilibrio entre precision y costo
- NO: El problema es rigido?
  - SI: Usa metodos implicitos como **Euler implicito**
  - NO: Necesitas simplicidad?
    - SI: Usa **Euler explicito** — el mas simple, menor precision
    - NO: Usa **Runge-Kutta 2** — mejor precision que Euler con costo moderado

## Integracion numerica

Pregunta: Tienes muchos puntos equiespaciados?

- SI: Usa **regla de Simpson 1/3** o **Simpson 3/8** — alta precision
- NO: Los puntos estan arbitrariamente distribuidos?
  - SI: Usa **cuadratura de Gauss-Legendre** — optimo para funciones suaves
  - NO: Necesitas simplicidad?
    - SI: Usa **regla del trapecio** — simple, menor precision
    - NO: El dominio es irregular?
      - SI: Usa **Monte Carlo** — eficiente en dominios complejos

## Interpolacion

Pregunta: Los datos son equiespaciados?

- SI: Usa **diferencias finitas de Newton** — eficiente y directo
- NO: Necesitas suavidad entre puntos?
  - SI: Usa **spline cubico** — curva suave y continua
  - NO: Pocos puntos de datos?
    - SI: Usa **interpolacion de Lagrange** — simple para pocos puntos
    - NO: Usa **interpolacion de Newton** — eficiente para muchos puntos
