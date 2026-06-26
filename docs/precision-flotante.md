# Precisión de Punto Flotante en JavaScript (IEEE 754)

## Introducción

JavaScript utiliza el estándar IEEE 754 para representar números de punto flotante. Esto permite trabajar con valores decimales y números muy grandes o pequeños, pero también introduce errores de precisión que pueden afectar los resultados de los métodos numéricos.

En cálculos científicos y algoritmos iterativos es importante comprender estas limitaciones para evitar resultados incorrectos y seleccionar tolerancias adecuadas.

## Representación IEEE 754

Todos los números de JavaScript se almacenan como valores de doble precisión de 64 bits siguiendo el estándar IEEE 754.

Esta representación divide los bits en:

- 1 bit para el signo.
- 11 bits para el exponente.
- 52 bits para la mantisa.

Debido a esta representación binaria, muchos números decimales no pueden almacenarse de forma exacta.

### Ejemplo clásico

```javascript
0.1 + 0.2
// Resultado: 0.30000000000000004

## Errores de redondeo en métodos iterativos

Muchos algoritmos numéricos realizan miles de operaciones consecutivas. Los pequeños errores de redondeo pueden acumularse y afectar el resultado final.

Por ejemplo, en métodos como Newton-Raphson, bisección o integración numérica, una diferencia extremadamente pequeña puede propagarse a lo largo de muchas iteraciones.

### Recomendación

Evitar comparaciones directas entre números de punto flotante.

Incorrecto:

```javascript
if (resultado === valorEsperado) {
  // ...
}
```

Preferible:

```javascript
if (Math.abs(resultado - valorEsperado) < tolerancia) {
  // ...
}
```

## Selección de tolerancias

En algoritmos numéricos se utiliza una tolerancia para determinar cuándo una aproximación es suficientemente buena.

Una tolerancia demasiado grande puede producir resultados imprecisos, mientras que una tolerancia demasiado pequeña puede provocar iteraciones innecesarias o problemas de convergencia.

### Recomendación general

No utilizar tolerancias menores a:

```text
1e-10
```

salvo que exista una justificación matemática clara.

En la librería Trazo se recomienda utilizar la función `esIgualConTolerancia` para realizar comparaciones seguras entre números de punto flotante.

## Cancelación catastrófica

La cancelación catastrófica ocurre cuando se restan dos números muy cercanos entre sí. Debido a los errores de representación, gran parte de los dígitos significativos puede perderse.

### Ejemplo

```javascript
const a = 1000000.000001;
const b = 1000000.000000;

console.log(a - b);
```

En este tipo de operaciones pequeñas variaciones en la representación interna pueden producir errores relativos importantes.

Por esta razón se recomienda evitar restas entre valores muy próximos cuando existan formulaciones matemáticas equivalentes más estables.

## Número de condición de matrices

El número de condición mide qué tan sensible es un problema a pequeños errores en los datos de entrada.

Una matriz con un número de condición elevado puede amplificar significativamente los errores de redondeo, produciendo soluciones numéricamente inestables.

En problemas de álgebra lineal se recomienda verificar el condicionamiento de las matrices antes de aplicar métodos de resolución.

## Conclusión

La representación IEEE 754 es fundamental para el funcionamiento de JavaScript, pero introduce limitaciones inherentes en la precisión numérica.

Comprender los errores de redondeo, utilizar tolerancias adecuadas, evitar la cancelación catastrófica y considerar el número de condición de matrices permite desarrollar algoritmos numéricos más robustos y confiables.

## Buenas prácticas para métodos numéricos

Cuando se desarrollan algoritmos numéricos en JavaScript es importante considerar las limitaciones de la representación de punto flotante desde el inicio del diseño. Muchos errores difíciles de detectar provienen de pequeñas diferencias numéricas que se acumulan con el tiempo.

Una práctica recomendada es evitar comparaciones directas entre números decimales utilizando el operador de igualdad. En su lugar, debe verificarse si la diferencia absoluta entre dos valores es menor que una tolerancia previamente definida. Esto permite trabajar de forma más segura con resultados aproximados.

También es recomendable realizar pruebas con diferentes conjuntos de datos para identificar posibles problemas de estabilidad numérica. Algunos algoritmos funcionan correctamente con ciertos valores de entrada pero presentan errores cuando los números son muy grandes, muy pequeños o contienen muchos decimales.

En procesos iterativos, como Newton-Raphson o métodos de integración numérica, la elección adecuada de la tolerancia tiene un impacto directo sobre la precisión y el rendimiento. Una tolerancia demasiado pequeña puede aumentar innecesariamente el número de iteraciones, mientras que una tolerancia muy grande puede producir resultados poco confiables.

Finalmente, la documentación de estas limitaciones ayuda a que otros desarrolladores comprendan el comportamiento esperado de la biblioteca y utilicen correctamente los métodos numéricos implementados.
