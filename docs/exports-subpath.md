# Subpath Imports por Categoria

Documentacion de los subpath imports disponibles en trazo y cuando usarlos.

## Que son los subpath imports

Los subpath imports permiten importar solo una categoria especifica de trazo en lugar del paquete completo. Esto reduce el tamano del bundle en aplicaciones que solo usan una parte de la libreria.

## Sintaxis

En lugar de importar todo el paquete:

    import { biseccion, euler, simpson } from 'trazo';

Puedes importar solo la categoria que necesitas:

    import { euler } from 'trazo/edo';
    import { biseccion } from 'trazo/no-lineales';
    import { simpson } from 'trazo/integracion';

## Categorias disponibles

| Subpath | Categoria | Metodos principales |
|---|---|---|
| trazo/no-lineales | Ecuaciones no lineales | biseccion, newtonRaphson, secante, puntoFijo |
| trazo/lineales | Sistemas lineales | gaussJordan, gaussSeidel, jacobi |
| trazo/interpolacion | Interpolacion | lagrange, newtonInterpolacion, splineCubico |
| trazo/edo | Ecuaciones diferenciales | euler, eulerMejorado, rungeKutta4 |
| trazo/integracion | Integracion numerica | trapecio, simpson13, simpson38, gaussLegendre |
| trazo/diferencias | Diferencias finitas | diferenciaProgresiva, diferenciaRegresiva, diferenciaCentral |
| trazo/matricial | Algebra matricial | determinante, inversa, descomposicionLU |
| trazo/polinomios | Operaciones con polinomios | evaluarPolinomio, sumarPolinomios |
| trazo/analisis | Analisis numerico | regresionLineal, regresionNoLineal |
| trazo/utils | Utilidades | convertirLongitud, convertirTemperatura, memoizar |

## Ejemplos de uso

### Importar solo metodos de EDO

    import { euler, rungeKutta4 } from 'trazo/edo';

    const f = (t, y) => -2 * y;

    const resultado = rungeKutta4({ f, t0: 0, y0: 1, h: 0.1, n: 10 });
    console.log(resultado);

### Importar solo integracion numerica

    import { simpson13, trapecio } from 'trazo/integracion';

    const f = (x) => Math.sin(x);

    const r1 = simpson13({ f, a: 0, b: Math.PI, n: 100 });
    const r2 = trapecio({ f, a: 0, b: Math.PI, n: 100 });

    console.log(r1.resultado); // ~2
    console.log(r2.resultado); // ~2

### Importar solo conversion de unidades

    import { convertirLongitud, convertirTemperatura } from 'trazo/utils';

    convertirLongitud(1, 'km', 'm');      // 1000
    convertirTemperatura(100, 'C', 'F');  // 212

## Cuando usar subpath imports vs paquete completo

### Usar subpath imports cuando:

- Tu aplicacion usa solo una o dos categorias de trazo
- El tamano del bundle es importante (aplicaciones web, moviles)
- Quieres dejar claro en el codigo que dependencias usa cada modulo
- Usas tree-shaking y quieres asegurarte de no incluir codigo innecesario

### Usar el paquete completo cuando:

- Tu aplicacion usa metodos de muchas categorias distintas
- Estas en un entorno Node.js donde el tamano del bundle no importa
- Prefieres un solo import centralizado para facilitar el mantenimiento

## Diferencia con tree-shaking

Los subpath imports y el tree-shaking son complementarios:

- Tree-shaking elimina automaticamente el codigo no usado durante el build
- Los subpath imports hacen explicito que categorias se importan

Si tu bundler soporta tree-shaking correctamente, el resultado final puede ser similar. Los subpath imports son utiles cuando el bundler no soporta tree-shaking o cuando quieres hacer el codigo mas legible.
