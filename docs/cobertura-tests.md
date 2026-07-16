# Cobertura de Tests

## Estado actual

La ejecución de `npm run test:cov` no pudo completarse debido a un error de configuración en `jest.config.js` relacionado con el sistema de módulos ES del proyecto. Esta situación es parte de los problemas de estructura base comunicados por el ingeniero responsable.

Los porcentajes de cobertura se determinarán una vez que la configuración base sea corregida. El presente documento identifica los módulos existentes y su estado de cobertura basado en el análisis del código fuente disponible.

## Tabla de cobertura por módulo

| Módulo | Archivo de test | Cobertura estimada | Estado |
|---|---|---|---|
| biseccion | tests/automatizados/unit/biseccion.test.js | desconocida | Con tests |
| convergencia | tests/automatizados/unit/convergencia.test.js | desconocida | Con tests |
| float_tolerance | tests/automatizados/unit/float_tolerance.test.js | desconocida | Con tests |
| interpolacion | tests/automatizados/unit/interpolacion.test.js | desconocida | Con tests |
| runge_kutta | tests/automatizados/unit/runge_kutta.test.js | desconocida | Con tests |
| validaciones | tests/automatizados/unit/validaciones.test.js | desconocida | Con tests |
| analisis | — | 0% | Sin tests |
| diferencias | — | 0% | Sin tests |
| edo | — | 0% | Sin tests |
| errors | — | 0% | Sin tests |
| integracion | — | 0% | Sin tests |
| lineales | — | 0% | Sin tests |
| matricial | — | 0% | Sin tests |
| no-lineales | — | 0% | Sin tests |
| polinomios | — | 0% | Sin tests |
| utils | — | 0% | Sin tests |

## Módulos con cobertura menor al 60%

Los siguientes módulos no tienen tests y su cobertura es **0%**:

- `analisis`
- `diferencias`
- `edo`
- `errors`
- `integracion`
- `lineales`
- `matricial`
- `no-lineales`
- `polinomios`
- `utils`

## Nota

La cobertura real deberá medirse una vez que la configuración de Jest sea corregida en la estructura base del proyecto.
