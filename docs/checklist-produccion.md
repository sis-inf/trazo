# Checklist de Producción — trazo

Antes de integrar `trazo` en una aplicación real, verifica los siguientes puntos:

## Manejo de errores
- [ ] Capturas explícitamente `ErrorConvergencia`, `ErrorDivergencia` y `ErrorTimeout` en los lugares donde uses funciones que puedan lanzarlos.
- [ ] Tus flujos alternativos (fallback, reintento, falla controlada) están probados con estos errores.

## Precisión numérica
- [ ] Si la precisión es crítica, validaste el número de condición de tus sistemas lineales (por ejemplo, con `numpy.linalg.cond`).
- [ ] Consideraste si la tolerancia por defecto de `trazo` es adecuada para tu dominio; de lo contrario, configúrala explícitamente.

## Dependencia
- [ ] En tu `package.json` fijaste la versión exacta de `trazo` (ej. `"trazo": "1.0.0"`), sin rangos tipo `^` o `~`, dado que la API aún es inestable.
- [ ] Revisaste que no existan breaking changes no documentados entre tu versión y la última publicada.

## Rendimiento
- [ ] Ejecutaste los benchmarks del CLI (`trazo benchmark`) con un tamaño de problema representativo de tu carga de trabajo.
- [ ] Los tiempos de ejecución están dentro de los límites aceptables para tu aplicación.

## Compatibilidad
- [ ] Verificaste que `trazo` funciona correctamente con la versión de Node.js y el sistema operativo de tu entorno de producción.
- [ ] Probaste la integración en un entorno similar al de producción (Docker, CI, etc.) para detectar dependencias faltantes.

## Documentación
- [ ] Leíste la sección de *Producción* en la documentación oficial de `trazo` (si existe).
- [ ] Si implementaste wrappers o configuraciones personalizadas, documentaste su propósito y las condiciones bajo las cuales fallan.

---

**Nota**: `trazo` está en versión 1.0.0; la superficie de API se está estabilizando. Revisa periódicamente nuevas versiones y actualiza este checklist si es necesario.