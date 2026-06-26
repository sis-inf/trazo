# Integración Continua (CI)

## Introducción

El proyecto utiliza GitHub Actions para automatizar procesos de validación, despliegue y análisis de seguridad. Estos procesos se ejecutan automáticamente cuando se realizan cambios en determinadas ramas o se crean Pull Requests.

## Workflows

| Workflow | Trigger | Descripción |
|-----------|-----------|-----------|
| CI JavaScript | Push y Pull Request sobre `main` y `dev` | Instala dependencias, ejecuta el análisis de código (lint) y corre las pruebas automáticas en Node.js 18, 20 y 22. |
| Deploy | Push sobre `main` | Workflow destinado al despliegue del proyecto. Actualmente contiene un paso de ejemplo que debe ser reemplazado por el proceso de despliegue correspondiente. |
| Security Scan | Push sobre `dev` y Pull Request hacia `main` | Ejecuta un análisis de seguridad utilizando CodeQL para detectar posibles vulnerabilidades en el código. |

## Flujo de Pull Request

```text
Desarrollador
      |
      v
Crear rama desde dev
      |
      v
Realizar cambios
      |
      v
Push al repositorio
      |
      v
Crear Pull Request
      |
      v
GitHub Actions ejecuta CI
      |
      +--> Lint
      |
      +--> Tests
      |
      +--> Security Scan (según corresponda)
      |
      v
Todos los checks aprobados
      |
      v
Revisión y aprobación
      |
      v
Merge a la rama destino
```

## Workflow CI JavaScript

Este workflow se ejecuta cuando existe un push o Pull Request sobre las ramas `main` y `dev`.

Su objetivo es verificar que el proyecto funcione correctamente en distintas versiones de Node.js.

### Pasos ejecutados

1. Clonar el repositorio.
2. Configurar Node.js (versiones 18, 20 y 22).
3. Instalar dependencias mediante `npm ci`.
4. Ejecutar ESLint.
5. Ejecutar las pruebas automatizadas.

## Workflow Deploy

Este workflow se ejecuta cuando se realiza un push a la rama `main`.

Actualmente contiene un paso de ejemplo para el despliegue:

```bash
echo "Definir pasos de despliegue"
```

Cada proyecto puede reemplazar este paso con el proceso de despliegue que corresponda.

## Workflow Security Scan

Este workflow se ejecuta cuando:

- Se realiza un push a la rama `dev`.
- Se crea un Pull Request hacia la rama `main`.

Utiliza CodeQL para analizar el código fuente y detectar posibles vulnerabilidades de seguridad.

### Pasos ejecutados

1. Clonar el repositorio.
2. Inicializar CodeQL.
3. Ejecutar el análisis de seguridad.

## Cómo corregir un CI fallido

### Error en lint

Si falla el análisis de código, ejecutar:

```bash
npm run lint
```

Corregir los errores reportados por ESLint y volver a realizar commit.

### Error en tests

Si fallan las pruebas automatizadas, ejecutar:

```bash
npm test
```

Corregir las pruebas o el código que provoca el error y volver a realizar commit.

### Error de formato

Si existen problemas de formato, ejecutar:

```bash
npm run format
```

Revisar los cambios generados y realizar un nuevo commit.

### Error de cobertura (coverage)

Para verificar la cobertura de pruebas:

```bash
npm run test:cov
```

Agregar pruebas adicionales en caso de que la cobertura sea insuficiente.

### Error en Security Scan

Revisar el reporte generado por CodeQL dentro de GitHub Actions y corregir las vulnerabilidades o advertencias detectadas.