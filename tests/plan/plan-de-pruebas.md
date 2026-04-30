# Plan de Pruebas - Trazo

## 1. Objetivo

Validar la exactitud, estabilidad y correcto funcionamiento de la librería matemática Trazo, asegurando resultados confiables en cálculos numéricos.

## 2. Alcance

### En alcance

- Métodos numéricos implementados
- Operaciones matemáticas básicas
- Manejo de errores y validación de entradas

### Fuera de alcance

- Interfaces gráficas
- Integraciones externas no relacionadas con cálculos

## 3. Tipos de prueba

- [x] Unitarias
- [x] Integración
- [x] Funcionales manuales
- [x] Rendimiento
- [x] Seguridad
- [x] Regresión

## 4. Entornos

| Entorno | SO            | Versión    |
| ------- | ------------- | ---------- |
| Local   | Windows       | 10/11      |
| CI      | Ubuntu latest | Python 3.x |

## 5. Responsables

| Rol              | Responsable |
| ---------------- | ----------- |
| Diseño de casos  | Equipo      |
| Ejecución manual | Equipo      |
| Automatización   | Equipo      |
| Reporte          | Equipo      |

## 6. Criterios de salida

- [x] Cobertura mínima de 80%
- [x] Cero bugs críticos abiertos
- [x] Todos los casos ejecutados
- [x] Error absoluto menor a 1e-6 en métodos numéricos

## 7. Riesgos

| Riesgo                                   | Probabilidad | Impacto | Mitigación                            |
| ---------------------------------------- | ------------ | ------- | ------------------------------------- |
| Errores de precisión                     | Alta         | Alta    | Validar con resultados conocidos      |
| Entradas inválidas                       | Media        | Media   | Validación de datos                   |
| Inestabilidad numérica                   | Media        | Alta    | Pruebas con casos límite              |
| Inyección de datos o entradas maliciosas | Media        | Alta    | Validación y sanitización de entradas |
