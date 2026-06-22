# 📘 Guía de Estilo JavaScript
## 🎯 Objetivo

Esta guía define convenciones para escribir código JavaScript limpio, consistente y mantenible, siguiendo las buenas prácticas.

## 🧾 1. Nombres de variables

- Usar `camelCase`.
- Los nombres deben ser descriptivos y claros.
-Usar nombres en inglés para mantener consistencia en el proyecto.

### ✅ Ejemplos:

```js
let userAge = 25;
const totalPrice = 100.5;
let isValid = true;
```

## ⚙️ 2. Nombres de funciones

- Usar `camelCase`.
- Deben representar acciones (verbos).
- Ser descriptivas.

### ✅ Ejemplos:

```js
function calculateTotal(price, quantity) {
  return price * quantity;
}

function validateInput(input) {
  return input.length > 0;
}
```

## 📁 3. Nombres de archivos y módulos

- Usar `kebab-case`.
- Archivos en minúsculas.
- Evitar nombres genéricos como utils.js.
- Preferir `export` / `import` (ES Modules) en lugar de `require`.

### ✅ Ejemplos:
* Ejemplo de archivos.

```bash
user-service.js
payment-controller.js
auth-middleware.js
```

* Ejemplo de `export` y `import`.

```js
// Exportar
export const sum = (a, b) => a + b;

// Importar
import { sum } from './math-utils.js';
```
### 🎯 ¿Por qué esto es importante?

El uso de inglés en el código permite mayor consistencia, facilita la colaboración entre desarrolladores y sigue estándares internacionales.

## 📐 4. Indentación y formato

- Usar 2 espacios.
- No usar tabs.
- Máximo recomendado: 100 caracteres por línea.
- Siempre usar `{}` incluso en bloques de una línea.

### ✅ Ejemplo:

```js
if (isValid) {
  processData();
}
```

## 💬 5. Comentarios y documentación

- Explicar el por qué, no el qué.
- Usar `//` para comentarios simples.
- Usar JSDoc para documentar funciones (`/** ... */`).

### ✅ Ejemplo:

```js
// Evitamos dividir entre cero
if (value !== 0) {
  result = total / value;
}
```

## 🧠 6. Reglas importantes de funciones

- Mantener funciones pequeñas y simples.
- Evitar efectos secundarios.
- Usar `const` por defecto, `let` solo si cambia.
- Evitar funciones muy largas (> 40 líneas).
- Evitar completamente `var`.

## 🧩 7. Ejemplo de función bien documentada

```js
/**
 * Calcula el precio total de una compra
 *
 * @param {number} price - Precio unitario del producto
 * @param {number} quantity - Cantidad de productos
 * @returns {number} Precio total calculado
 */
const calculateTotal = (price, quantity) => {
  return price * quantity;
};
```

## 🚫 8. Buenas prácticas clave

- Usar `===` en lugar de `==`.
- Preferir funciones flecha (`=>`) para funciones anónimas.
- Usar funciones normales para métodos de objetos o clases.
- Evitar variables globales.
- Manejar errores con `try/catch`.
- Usar `destructuring` cuando sea posible.

> **¿Qué es destructuring?**
>
> Es una sintaxis de JavaScript (ES6) que permite extraer valores de objetos o arrays
> y asignarlos a variables de forma concisa, reduciendo código repetitivo.

- Usar comillas simples (`''`) en lugar de dobles (`""`).

> [!NOTE]
> Se pueden usar comillas dobles (`""`) cuando sea necesario,
> por ejemplo, para evitar escapar caracteres dentro de strings.


## 💻 9. Ejemplo completo

```js
/**
 * Verifica si hay stock disponible
 * @param {number} stock
 * @returns {boolean}
 */
const isAvailable = (stock) => {
  return stock > 0;
};

/**
 * Clase Producto
 */
class Product {
  constructor(price, stock) {
    this.price = price;
    this.stock = stock;
  }

  getPrice() {
    return this.price;
  }

  isAvailable() {
    return this.stock > 0;
  }
}

const product = new Product(10, 5);

const total = calculateTotal(product.getPrice(), 3);

if (product.isAvailable()) {
  console.log(`Total: ${total}`);
} else {
  console.log('No disponible');
}
```

> [!NOTE]
> Los ejemplos presentados son ilustrativos.
> No es necesario que el código sea exactamente igual,
> pero sí que respete las buenas prácticas descritas.

## 🔥 Conclusión rápida
- `camelCase` → variables y funciones
- `kebab-case` → archivos
- 2 espacios → indentación
- JSDoc → documentación
- `===` → comparaciones estrictas
- Consistencia > preferencias personales
-Código → Inglés (obligatorio)

## 🆕 10. Convenciones ES2020+

Las siguientes características de ES2020 (ECMAScript 2020) deben usarse en el proyecto para escribir código más limpio y seguro.

### 🔗 Encadenamiento opcional (`?.`)

Usar optional chaining para acceder a propiedades anidadas de forma segura sin necesidad de verificar manualmente cada nivel.

#### ✅ Recomendado:
```js
const userName = user?.profile?.name;
const firstTag = post?.tags?.[0];
const result = api?.getData?.();
```

#### ❌ Evitar:
```js
const userName = user && user.profile && user.profile.name;
```

### ❓ Coalescencia nula (`??`)

Usar nullish coalescing para proporcionar valores por defecto solo cuando el valor es `null` o `undefined`, no para otros valores falsy (`0`, `''`, `false`).

#### ✅ Recomendado:
```js
const pageSize = userPreference ?? 10;  // 0 es un valor válido aquí
const username = input ?? 'Invitado';
```

#### ❌ Evitar:
```js
const pageSize = userPreference || 10;  // 0 sería reemplazado incorrectamente
```

### 🌐 `globalThis`

Usar `globalThis` para acceder al objeto global de forma consistente en cualquier entorno (navegador, Node.js, Web Workers).

#### ✅ Recomendado:
```js
// Acceso universal al objeto global
const globalObj = globalThis;

// Verificar disponibilidad de API
if (typeof globalThis.fetch === 'function') {
  // fetch está disponible
}
```

### 📦 `Promise.allSettled()`

Usar `Promise.allSettled()` cuando se necesita esperar a que todas las promesas se resuelvan o rechacen, sin que un rechazo detenga la ejecución.

#### ✅ Recomendado:
```js
const results = await Promise.allSettled([
  fetchUserData(),
  fetchProducts(),
  fetchAnalytics(),
]);

results.forEach((result) => {
  if (result.status === 'fulfilled') {
    console.log('Éxito:', result.value);
  } else {
    console.warn('Falló:', result.reason);
  }
});
```

#### ❌ Evitar:
```js
// Promise.all falla completamente si una promesa rechaza
const results = await Promise.all([...]);
```

### 🔍 `String.prototype.matchAll()`

Usar `matchAll()` para obtener todas las coincidencias de una expresión regular, incluyendo grupos de captura.

#### ✅ Recomendado:
```js
const regex = /(\w+)=(\w+)/g;
const params = [...str.matchAll(regex)];
// Cada elemento incluye la coincidencia completa y los grupos
```

### 🏷️ `BigInt`

Usar `BigInt` para trabajar con enteros mayores a `Number.MAX_SAFE_INTEGER` (2^53 - 1).

#### ✅ Recomendado:
```js
// Sufijo n para literales BigInt
const bigNumber = 9007199254740991n;

// Operaciones con BigInt
const sum = bigNumber + 1n;
```

> [!NOTE]
> No se puede mezclar `BigInt` con `Number` en operaciones aritméticas. Usar conversión explícita cuando sea necesario.

### 📥 `import()` dinámico

Usar import dinámico para cargar módulos bajo demanda (code splitting) o de forma condicional.

#### ✅ Recomendado:
```js
// Carga bajo demanda
const module = await import('./heavy-module.js');
module.processData(data);

// Carga condicional
if (featureEnabled) {
  const { Feature } = await import('./feature.js');
  Feature.init();
}
```

### 📋 Resumen de convenciones ES2020+

| Característica | Uso principal |
|---|---|
| `?.` | Acceso seguro a propiedades anidadas |
| `??` | Valores por defecto para `null`/`undefined` |
| `globalThis` | Acceso universal al objeto global |
| `Promise.allSettled()` | Esperar todas las promesas sin fallar |
| `matchAll()` | Obtener todas las coincidencias regex con grupos |
| `BigInt` | Enteros de precisión arbitraria |
| `import()` | Carga dinámica de módulos |
