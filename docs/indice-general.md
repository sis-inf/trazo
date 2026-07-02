# Índice General de Documentación — Trazo

## Introducción

Este documento es el índice navegable maestro de toda la documentación
del proyecto Trazo, organizado por categoría para facilitar encontrar
la información que necesitas, ya sea que quieras usar la librería,
entender su arquitectura, o contribuir con código.

> **Nota de mantenimiento:** este índice refleja los documentos
> existentes en `docs/` al momento de su creación. Si agregas un nuevo
> archivo `.md` a `docs/`, recuerda añadirlo también aquí en la
> categoría correspondiente.

---

## 1. Arquitectura y decisiones de diseño

* [arquitectura.md](arquitectura.md) — Arquitectura general del sistema y sus componentes.
* [requerimientos.md](requerimientos.md) — Requerimientos funcionales y no funcionales del proyecto.
* [precision-y-errores.md](precision-y-errores.md) — Consideraciones sobre precisión numérica y manejo de errores.
* [limitaciones.md](limitaciones.md) — Limitaciones conocidas de la librería.

## 2. Métodos numéricos por categoría

* [metodos.md](metodos.md) — Listado general de métodos numéricos disponibles.
* [metodos-implementados.md](metodos-implementados.md) — Estado de implementación de cada método.
* [metodos-lineales.md](metodos-lineales.md) — Métodos para sistemas de ecuaciones lineales (Gauss, Jacobi, Gauss-Seidel, etc.).
* [glosario-metodos-numericos.md](glosario-metodos-numericos.md) — Glosario de términos específicos de métodos numéricos.
* [glosario.md](glosario.md) — Glosario general de términos del proyecto.

## 3. Uso de la librería

* [api.md](api.md) — Referencia de la API con ejemplos de uso.
* [api-math.md](api-math.md) — Referencia matemática complementaria de la API.
* [ejemplos.md](ejemplos.md) — Ejemplos generales de uso.
* [ejemplos-uso.md](ejemplos-uso.md) — Ejemplos adicionales de casos de uso.
* [casos-de-uso.md](casos-de-uso.md) — Casos de uso documentados con actor, flujo y postcondición.
* [instalacion.md](instalacion.md) — Guía de instalación de la librería.
* [preguntas-frecuentes.md](preguntas-frecuentes.md) — Preguntas frecuentes sobre contribución y uso del proyecto.

## 4. Build y publicación

* [despliegue.md](despliegue.md) — Guía de despliegue del proyecto.

## 5. Contribución

* [flujo-git.md](flujo-git.md) — Flujo de trabajo con Git (Forking Workflow) para contribuir.
* [estandares-codigo.md](estandares-codigo.md) — Estándares de código a seguir en el proyecto.
* [referencias.md](referencias.md) — Referencias y fuentes externas utilizadas.

---

## Categorías sin documentos aún

Las siguientes categorías están previstas para futura documentación,
pero no tienen archivos asociados en `docs/` al momento de escribir
este índice:

* **CLI y herramientas de desarrollo**
* **Playground y demos interactivas**
* **Integraciones externas**
* **Producción y operación**

A medida que se agreguen documentos para estas categorías, deben
incorporarse en este índice bajo el encabezado correspondiente.

---

## Cómo usar este índice

* Si buscas **cómo usar una función específica**, ve a la sección "Uso de la librería".
* Si quieres **entender por qué un método no converge**, revisa "Métodos numéricos por categoría" o el glosario.
* Si vas a **contribuir con código**, comienza por la sección "Contribución".
* Si necesitas **instalar o desplegar** el proyecto, ve a "Build y publicación" e "Uso de la librería" (instalación).