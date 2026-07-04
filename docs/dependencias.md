# Dependencias del Proyecto

## Política de dependencias

El proyecto procura mantener un número reducido de dependencias de producción (`dependencies`), incorporándolas únicamente cuando aportan una funcionalidad esencial y su uso está debidamente justificado.

Además de las dependencias de producción, el proyecto utiliza dependencias de desarrollo (`devDependencies`) destinadas a pruebas, análisis de código, formateo y empaquetado.

## Dependencias de Producción

Actualmente el proyecto utiliza la siguiente dependencia de producción:

| Nombre | Versión | Propósito | Enlace |
|---------|----------|-----------|--------|
| mathjs | ^14.8.0| Parseo seguro de expresiones matemáticas representadas como cadenas (`string`) utilizadas por el CLI y el playground. Su incorporación responde a una necesidad concreta y se diferencia del uso descartado anteriormente, donde la dependencia no estaba justificada. | https://mathjs.org |

## Dependencias de Desarrollo

| Nombre | Versión | Propósito | Enlace |
|---------|----------|-----------|--------|
| eslint | ^8.57.1 | Detectar errores y mantener la calidad del código. | https://eslint.org |
| jest | ^29.7.0 | Ejecutar pruebas automatizadas. | https://jestjs.io |
| prettier | ^3.8.3 | Formatear el código de manera consistente. | https://prettier.io |
| rollup | ^4.0.0 | Empaquetar y generar versiones distribuidas del proyecto. | https://rollupjs.org |