# Resolución de sistemas de EDOs acopladas

## Introducción

En problemas de ingeniería y ciencias es común encontrarse con sistemas de ecuaciones diferenciales ordinarias (EDOs) donde varias variables dependientes evolucionan simultáneamente y están acopladas entre sí. A diferencia de una EDO escalar, que modela una única variable, los sistemas requieren métodos numéricos que trabajen con vectores de estado.

## Diferencia con métodos escalares

Los métodos para EDOs escalares (como los documentados en `docs/edo-metodos.md`) operan sobre una función escalar `y(t)` y devuelven un escalar. En cambio, los métodos para sistemas trabajan con un vector de estado `y(t) = [y1(t), y2(t), ..., yn(t)]` y una función que retorna un vector de derivadas. Las implementaciones para sistemas (por ejemplo, `rungeKutta4Sistema`) internamente aplican el mismo esquema de integración a cada componente, pero actualizan todo el vector simultáneamente.

## Oscilador armónico simple

El oscilador armónico simple es un sistema de dos EDOs de primer orden acopladas:

```
dx/dt = v
dv/dt = - (k/m) * x
```

Donde `x` es la posición, `v` la velocidad, `k` la constante del resorte y `m` la masa.

### Ejemplo con `rungeKutta4Sistema`

Supongamos `m = 1`, `k = 1`, condiciones iniciales `x(0)=1`, `v(0)=0`. El siguiente código resuelve el sistema desde `t=0` hasta `t=10` con paso `h=0.01`:

```python
import numpy as np
from metodos_numericos import rungeKutta4Sistema  # Ajusta el import según el proyecto

def oscilador(t, y):
    x, v = y
    dxdt = v
    dvdt = -x  # k/m = 1
    return np.array([dxdt, dvdt])

# Condiciones iniciales
y0 = np.array([1.0, 0.0])
# Tiempos
t_span = (0, 10)
h = 0.01

# Llamar al método
t, y = rungeKutta4Sistema(oscilador, t_span, y0, h)
# y es un array de forma (2, n_pasos), la primera fila es x, la segunda v
x = y[0]
v = y[1]

print("Solución en t=10:", x[-1], v[-1])
```

### Interpretación

Cada paso de `rungeKutta4Sistema` evalúa la función `oscildor` cuatro veces (etapas del RK4) y combina los incrementos para actualizar ambas variables. La precisión es la misma que en el caso escalar (orden 4), pero aplicada a cada componente.

## Conclusión

La extensión de métodos escalares a sistemas es directa: se reemplazan las operaciones escalares por operaciones vectoriales. La documentación de métodos específicos para sistemas permite a los usuarios resolver problemas acoplados sin necesidad de implementar bucles manuales.
