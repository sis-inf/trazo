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

## 🧪 10. Convenciones específicas de JavaScript ES2020

Esta sección complementa las reglas anteriores con ejemplos lado a lado (✅ correcto / ❌ incorrecto) para convenciones modernas de JavaScript.

### 10.1 `const` / `let` en lugar de `var`

`var` tiene alcance de función (no de bloque) y permite redeclaraciones, lo que genera bugs difíciles de rastrear. Usar `const` por defecto y `let` solo cuando el valor cambia.

#### ✅ Correcto

```js
const MAX_RETRIES = 3;

let attempts = 0;
while (attempts < MAX_RETRIES) {
  attempts += 1;
}
```

#### ❌ Incorrecto

```js
var MAX_RETRIES = 3;

var attempts = 0;
while (attempts < MAX_RETRIES) {
  attempts += 1;
}
```

### 10.2 Arrow functions vs `function`

Usar arrow functions para callbacks y funciones anónimas, ya que no redefinen `this`. Usar `function` para métodos de objetos, clases o cuando se necesita un `this` propio.

#### ✅ Correcto

```js
const numbers = [1, 2, 3];

const doubled = numbers.map((n) => n * 2);

class Carrito {
  constructor() {
    this.items = [];
  }

  agregar(item) {
    this.items.push(item);
  }
}
```

#### ❌ Incorrecto

```js
const numbers = [1, 2, 3];

const doubled = numbers.map(function (n) {
  return n * 2;
});

class Carrito {
  constructor() {
    this.items = [];
  }

  agregar = (item) => {
    this.items.push(item);
  };
}
```

### 10.3 Destructuring en retornos

Cuando una función retorna un objeto con varias propiedades, usar destructuring al consumirlo en lugar de acceder propiedad por propiedad.

#### ✅ Correcto

```js
function getUser() {
  return { id: 1, name: 'Ana', email: 'ana@example.com' };
}

const { id, name, email } = getUser();
```

#### ❌ Incorrecto

```js
function getUser() {
  return { id: 1, name: 'Ana', email: 'ana@example.com' };
}

const user = getUser();
const id = user.id;
const name = user.name;
const email = user.email;
```

### 10.4 JSDoc con `@param` y `@returns` tipados

Toda función pública debe documentarse con JSDoc indicando el tipo de cada parámetro y del valor de retorno.

#### ✅ Correcto

```js
/**
 * Calcula el descuento aplicado a un precio.
 *
 * @param {number} price - Precio original del producto.
 * @param {number} percentage - Porcentaje de descuento (0-100).
 * @returns {number} Precio final con el descuento aplicado.
 */
const applyDiscount = (price, percentage) => {
  return price - (price * percentage) / 100;
};
```

#### ❌ Incorrecto

```js
// Calcula el descuento
const applyDiscount = (price, percentage) => {
  return price - (price * percentage) / 100;
};
```

### 10.5 Nombres de funciones en `camelCase`

Los nombres de funciones deben usar `camelCase` y representar una acción (verbo + complemento).

#### ✅ Correcto

```js
function calculateShippingCost(weight, distance) {
  return weight * distance * 0.5;
}

const isUserActive = (user) => user.status === 'active';
```

#### ❌ Incorrecto

```js
function Calculate_Shipping_Cost(weight, distance) {
  return weight * distance * 0.5;
}

const user_active = (user) => user.status === 'active';
```

### 10.6 Módulos ES (`import`/`export`) en lugar de `require`

El proyecto usa módulos ES en lugar de CommonJS. Preferir `import`/`export` sobre `require`/`module.exports`.

#### ✅ Correcto

```js
// math-utils.js
export const sum = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// app.js
import { sum, multiply } from './math-utils.js';
```

#### ❌ Incorrecto

```js
// math-utils.js
const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
module.exports = { sum, multiply };

// app.js
const { sum, multiply } = require('./math-utils.js');
```
