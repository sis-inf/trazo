# Índice General de Documentación — Trazo

## Introducción

Este documento es el índice navegable maestro de la documentación del proyecto **Trazo**. Su objetivo es centralizar todos los documentos disponibles en la carpeta `docs/`, organizarlos por categoría y facilitar la navegación para usuarios, contribuidores y mantenedores del proyecto.

Cada entrada incluye un enlace relativo al documento correspondiente y una breve descripción de su contenido.

---

# 1. Arquitectura y estándares

- [arquitectura.md](arquitectura.md) — Describe la arquitectura general del proyecto y sus componentes principales.
- [arquitectura-decisiones.md](arquitectura-decisiones.md) — Registra decisiones técnicas relevantes tomadas durante el desarrollo.
- [estructura-proyecto.md](estructura-proyecto.md) — Explica la organización de carpetas y archivos del repositorio.
- [requerimientos.md](requerimientos.md) — Detalla los requerimientos funcionales y técnicos del proyecto.
- [dependencias.md](dependencias.md) — Documenta las dependencias utilizadas por la librería.
- [estandares-codigo.md](estandares-codigo.md) — Define lineamientos de estilo y calidad para el código fuente.
- [convenciones-nombres-funciones.md](convenciones-nombres-funciones.md) — Establece criterios de nombres para funciones y módulos.
- [precision-y-errores.md](precision-y-errores.md) — Explica el manejo de precisión numérica y errores computacionales.
- [precision-flotante.md](precision-flotante.md) — Describe consideraciones sobre aritmética de punto flotante.
- [precision-y-tolerancias-recomendadas.md](precision-y-tolerancias-recomendadas.md) — Recomienda tolerancias numéricas para distintos métodos.
- [limitaciones.md](limitaciones.md) — Resume limitaciones generales conocidas del proyecto.
- [limitaciones-numericas.md](limitaciones-numericas.md) — Explica limitaciones específicas de los métodos numéricos.
- [manejo-errores.md](manejo-errores.md) — Documenta el sistema de manejo de errores.
- [tipos-retorno.md](tipos-retorno.md) — Describe las estructuras de retorno utilizadas por los métodos.
- [validation-inputs.md](validation-inputs.md) — Explica las validaciones aplicadas a los datos de entrada.
- [mapa-dependencias-internas.md](mapa-dependencias-internas.md) — Presenta el mapa de dependencias internas del proyecto.
- [roadmap.md](roadmap.md) — Muestra la planificación y evolución esperada del proyecto.
- [seguridad-libreria.md](seguridad-libreria.md) — Documenta consideraciones de seguridad en el uso de la librería.
- [parser-expresiones.md](parser-expresiones.md) — Explica el funcionamiento del parser de expresiones matemáticas.
- [logging-metodos-iterativos.md](logging-metodos-iterativos.md) — Describe el sistema de registro para métodos iterativos.

---

# 2. Guías de uso y ejemplos

- [indice-general.md](indice-general.md) — Índice maestro navegable de toda la documentación del proyecto.
- [instalacion.md](instalacion.md) — Explica cómo instalar y preparar el proyecto.
- [guia-uso-libreria.md](guia-uso-libreria.md) — Guía principal para utilizar la librería.
- [ejemplos.md](ejemplos.md) — Presenta ejemplos básicos de uso.
- [ejemplos-uso.md](ejemplos-uso.md) — Incluye ejemplos prácticos adicionales.
- [casos-de-uso.md](casos-de-uso.md) — Describe casos de uso comunes del proyecto.
- [casos-de-uso-avanzados.md](casos-de-uso-avanzados.md) — Presenta escenarios avanzados de aplicación.
- [playground-uso.md](playground-uso.md) — Explica el uso del entorno de pruebas o playground.
- [exportar-markdown.md](exportar-markdown.md) — Documenta cómo exportar contenido en formato Markdown.
- [preguntas-frecuentes.md](preguntas-frecuentes.md) — Responde dudas frecuentes sobre el proyecto.
- [errores-comunes.md](errores-comunes.md) — Enumera errores frecuentes y sus soluciones.
- [comparacion-bibliotecas-similares.md](comparacion-bibliotecas-similares.md) — Compara Trazo con bibliotecas similares.


---

# 3. Métodos numéricos por categoría

## Sistemas de ecuaciones lineales

- [metodos-lineales.md](metodos-lineales.md) — Documenta métodos para resolver sistemas lineales.
- [algebra-vectorial-matricial.md](algebra-vectorial-matricial.md) — Explica conceptos de álgebra vectorial y matricial usados en el proyecto.
- [numero-condicion.md](numero-condicion.md) — Describe el número de condición y su importancia numérica.
- [rendimiento-comparativo.md](rendimiento-comparativo.md) — Compara el rendimiento de distintos métodos implementados.

## Ecuaciones no lineales

- [metodos-no-lineales.md](metodos-no-lineales.md) — Documenta métodos para resolver ecuaciones no lineales.

## Integración numérica

- [integracion-numerica.md](integracion-numerica.md) — Explica métodos de integración numérica.
- [integracion-monte-carlo.md](integracion-monte-carlo.md) — Documenta la integración mediante el método de Monte Carlo.

## Interpolación

- [interpolation.md](interpolation.md) — Describe métodos de interpolación disponibles en el proyecto.

## Ecuaciones diferenciales ordinarias

- [edo-metodos.md](edo-metodos.md) — Documenta métodos para resolver ecuaciones diferenciales ordinarias.

## Información general de métodos

- [metodos.md](metodos.md) — Resume los métodos numéricos del proyecto.
- [metodos-implementados.md](metodos-implementados.md) — Lista los métodos actualmente implementados.
- [numeros-complejos.md](numeros-complejos.md) — Explica el soporte y uso de números complejos.
- [preguntas-frecuentes-matematicas.md](preguntas-frecuentes-matematicas.md) — Responde dudas frecuentes sobre conceptos matemáticos.

---

# 4. Referencia de API

- [api.md](api.md) — Documenta la API general del proyecto.
- [api-math.md](api-math.md) — Documenta la API matemática y sus funciones disponibles.

 ---

# 5. Contribución

- [guia-contribuidor.md](guia-contribuidor.md) — Guía paso a paso para contribuir al proyecto.
- [guia-agregar-metodo.md](guia-agregar-metodo.md) — Explica cómo agregar nuevos métodos numéricos.
- [flujo-git.md](flujo-git.md) — Describe el flujo de trabajo con Git.
- [estilo-commits.md](estilo-commits.md) — Define convenciones para escribir commits.
- [referencias.md](referencias.md) — Reúne referencias utilizadas en la documentación.
- [glosario.md](glosario.md) — Define términos generales usados en el proyecto.
- [glosario.md](glosario.md) — Define términos generales y de métodos numéricos usados en el proyecto.
- [migracion-mayor-version.md](migracion-mayor-version.md) — Documenta consideraciones para migraciones de versión mayor.

---

# 6. CI/CD y implementación

- [integracion-ci.md](integracion-ci.md) — Explica la integración continua del proyecto.
- [despliegue.md](despliegue.md) — Documenta el proceso de despliegue.
- [benchmarks.md](benchmarks.md) — Presenta pruebas de rendimiento y mediciones comparativas.
- [cobertura-tests.md](cobertura-tests.md) — Resume la cobertura de pruebas del proyecto.
- [changelog-sprint-2.md](changelog-sprint-2.md) — Registra los cambios correspondientes al sprint 2.
- [changelog-sprint-3.md](changelog-sprint-3.md) — Registra los cambios correspondientes al sprint 3.

---

## Organización del índice

La documentación se organiza por categorías para facilitar la búsqueda de información según el tipo de usuario o tarea:

- **Usuarios de la librería:** instalación, guías de uso, ejemplos, casos de uso y preguntas frecuentes.
- **Contribuidores:** flujo Git, guía de contribución, estilo de commits y guía para agregar métodos.
- **Mantenedores:** arquitectura, estándares, dependencias, CI/CD, despliegue, seguridad y roadmap.
- **Referencia técnica:** métodos numéricos, API, validaciones, tipos de retorno, precisión y errores.


