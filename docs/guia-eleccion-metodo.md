# Guía de elección de método numérico

## Búsqueda de raíces

- **¿Conoces un intervalo con cambio de signo?** Usa **bisección** o **Brent**.
- **¿Conoces la derivada?** Usa **Newton-Raphson**.
- **¿Necesitas garantía de convergencia sin derivada?** Usa **secante** o **Steffensen**.

## Sistemas lineales

- **¿Matriz simétrica definida positiva?** Usa **Cholesky** o **gradiente conjugado**.
- **¿Sistema pequeño y denso?** Usa **Gauss-Jordan**.
- **¿Sistema grande y disperso?** Usa **Jacobi** o **Gauss-Seidel**.

## Ecuaciones diferenciales ordinarias (EDO)

- **Problema de valor inicial:**
  - **¿Baja precisión?** Usa **Euler**.
  - **¿Precisión media?** Usa **Runge-Kutta de orden 4**.
  - **¿Alta precisión o control de paso?** Usa **RK45** o **Dormand-Prince**.
- **Problema de contorno:** Usa **diferencias finitas** o **disparo (shooting)**.

## Integración numérica

- **¿Función suave en intervalo cerrado?** Usa **Simpson** o **trapecio compuesto**.
- **¿Alta precisión?** Usa **Romberg** o **cuadratura gaussiana**.
- **¿Integral impropia?** Usa **transformación a intervalo finito** o **cuadratura adaptativa**.

## Recomendaciones generales

- Siempre verificar la convergencia con criterios de tolerancia.
- Para problemas no lineales, combinar métodos robustos (bisección) con rápidos (Newton).
- En sistemas grandes, preferir métodos iterativos para ahorrar memoria.

---
*Esta guía fue generada para el proyecto sis-inf/trazo.*