# Política de CHANGELOG

## Propósito del CHANGELOG principal

El archivo `CHANGELOG.md`, ubicado en la raíz del repositorio, es la fuente principal para documentar los cambios relevantes del paquete desde la perspectiva de los usuarios.

Su objetivo es registrar cambios asociados a versiones, publicaciones o modificaciones visibles para quienes consumen la librería, como nuevas funcionalidades, correcciones de errores, cambios incompatibles, ajustes relevantes en la API pública o mejoras importantes en el comportamiento del paquete.

Por esta razón, el `CHANGELOG.md` debe mantenerse enfocado en información útil para usuarios finales y consumidores del paquete, evitando incluir detalles internos de planificación, seguimiento o ejecución del trabajo por sprint.

---

## Propósito del historial de sprints

Los archivos ubicados en `docs/historial-sprints/` conservan información histórica del proceso de desarrollo del proyecto.

Estos documentos pueden incluir contexto interno, avances por sprint, tareas realizadas, decisiones de organización, seguimiento del trabajo y detalles que resultan útiles para contribuidores o mantenedores, pero que no necesariamente corresponden al registro público de cambios del paquete.

Por ese motivo, los changelogs de sprint se conservan como documentación histórica complementaria y no como reemplazo del `CHANGELOG.md` principal.

---

## Relación entre ambas fuentes

El `CHANGELOG.md` y los documentos de `docs/historial-sprints/` tienen propósitos distintos.

El `CHANGELOG.md` documenta cambios relevantes para usuarios del paquete, mientras que el historial de sprints conserva contexto del proceso de desarrollo. Esta separación evita duplicar información y reduce el riesgo de contradicciones entre ambas fuentes.

Cuando un cambio afecta la API pública, el comportamiento del paquete, una publicación, una versión o una funcionalidad visible para usuarios, debe registrarse en el `CHANGELOG.md` principal.

Cuando la información describe avances internos, tareas agrupadas por sprint o contexto histórico del desarrollo, puede mantenerse dentro de `docs/historial-sprints/`.

---

## Decisión de consolidación

Tras revisar la existencia de `docs/changelog-sprint-2.md`, `docs/changelog-sprint-3.md` y `CHANGELOG.md`, se decide conservar los changelogs de sprint como historial complementario del proceso de desarrollo, en lugar de fusionarlos directamente en el `CHANGELOG.md` principal.

La razón es que los archivos de sprint representan un registro histórico de trabajo y contexto interno, mientras que el `CHANGELOG.md` debe mantenerse orientado a usuarios del paquete y publicaciones del proyecto.

Para reflejar esta diferencia de propósito, los archivos fueron movidos a:

- `docs/historial-sprints/changelog-sprint-2.md`
- `docs/historial-sprints/changelog-sprint-3.md`

Con esta ubicación, queda claro que estos documentos forman parte del historial de desarrollo por sprint y no del changelog principal del paquete.

---

## Criterio para evitar contradicciones

Para evitar información contradictoria entre ambas fuentes, se aplicará el siguiente criterio:

El `CHANGELOG.md` será la fuente de referencia para cambios publicados, versiones y modificaciones visibles para usuarios. El historial de sprints será una fuente complementaria para comprender el proceso interno de desarrollo.

Si en el futuro un cambio aparece tanto en el historial de sprints como en el `CHANGELOG.md`, la información del `CHANGELOG.md` deberá priorizarse para usuarios del paquete, mientras que el historial de sprints deberá conservar únicamente el contexto interno del trabajo realizado.

---

## Resumen

Los changelogs de sprint no fueron eliminados ni fusionados en el `CHANGELOG.md` porque aportan detalle histórico del proceso de desarrollo. Para evitar confusión, se movieron a `docs/historial-sprints/` y se documentó explícitamente su relación con el `CHANGELOG.md` principal.