# Validación de Inputs

## Introducción

El módulo `validaciones.js` contiene funciones utilizadas para verificar que los parámetros de entrada recibidos por los métodos numéricos sean válidos antes de ejecutar cálculos.

Su propósito es prevenir errores, garantizar consistencia y proporcionar mensajes claros cuando los datos ingresados no cumplen los requisitos esperados.

---

## Funciones de validación

| Función | Qué valida | Error cuando falla |
|----------|------------|-------------------|
| validateNumber | Verifica que el valor sea numérico | NumericalError |
| validateArray | Verifica que el valor sea un arreglo válido | NumericalError |
| validateFunction | Verifica que se proporcione una función | Error |
| validateInterval | Verifica que un intervalo sea válido | NumericalError |
| validateTolerance | Verifica que la tolerancia sea positiva | NumericalError |

---

## NumericalError vs Error nativo

### NumericalError

Se utiliza para errores relacionados con cálculos numéricos, validación matemática o parámetros inválidos en algoritmos numéricos.

Ejemplos:

- Tolerancia negativa.
- Intervalo inválido.
- Valor no numérico.

### Error nativo

Se utiliza para errores generales de JavaScript que no corresponden específicamente a problemas matemáticos.

Ejemplos:

- Función no definida.
- Parámetros faltantes.
- Uso incorrecto de una API.

---

## Uso de validaciones en un módulo nuevo

Ejemplo:

```javascript
import { validateNumber } from './validaciones.js';

function cuadrado(x) {
  validateNumber(x);
  return x * x;
}
```

En este ejemplo, la validación se ejecuta antes del cálculo para asegurar que el parámetro recibido sea válido.

---

## Beneficios

- Detecta errores de entrada tempranamente.
- Facilita el mantenimiento del código.
- Proporciona mensajes de error más claros.
- Mejora la confiabilidad de los métodos numéricos.
