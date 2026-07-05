# Conversión de Unidades Físicas

Este módulo permite convertir entre diferentes unidades físicas dentro de las categorías de longitud, temperatura, presión y energía.

## Categorías y Unidades Soportadas

### Longitud
| Unidad | Símbolo | Equivalencia base (metros) |
|--------|---------|-----------------------------|
| metro | m | 1 |
| kilómetro | km | 1000 |
| centímetro | cm | 0.01 |
| milímetro | mm | 0.001 |
| milla | mi | 1609.344 |
| pie | ft | 0.3048 |
| pulgada | in | 0.0254 |
| yarda | yd | 0.9144 |

### Temperatura
| Unidad | Símbolo | Notas |
|--------|---------|-------|
| Celsius | °C | - |
| Fahrenheit | °F | - |
| Kelvin | K | - |

### Presión
| Unidad | Símbolo | Equivalencia base (pascal) |
|--------|---------|-----------------------------|
| pascal | Pa | 1 |
| bar | bar | 100000 |
| atmósfera | atm | 101325 |
| torr | Torr | 133.322 |
| psi | psi | 6894.76 |

### Energía
| Unidad | Símbolo | Equivalencia base (julio) |
|--------|---------|----------------------------|
| julio | J | 1 |
| kilojulio | kJ | 1000 |
| caloría | cal | 4.184 |
| kilocaloría | kcal | 4184 |
| vatio-hora | Wh | 3600 |
| kilovatio-hora | kWh | 3600000 |
| BTU | BTU | 1055.06 |

## Ejemplos de Uso

### Ejemplo 1: Convertir longitud
```python
from conversor import convertir_longitud

resultado = convertir_longitud(5, "km", "m")
print(f"5 km son {resultado} m")
# Salida: 5 km son 5000.0 m
```

### Ejemplo 2: Convertir temperatura
```python
from conversor import convertir_temperatura

resultado = convertir_temperatura(100, "°C", "°F")
print(f"100 °C son {resultado} °F")
# Salida: 100 °C son 212.0 °F
```

### Ejemplo 3: Convertir presión
```python
from conversor import convertir_presion

resultado = convertir_presion(1, "atm", "Pa")
print(f"1 atm son {resultado} Pa")
# Salida: 1 atm son 101325.0 Pa
```

### Ejemplo 4: Convertir energía
```python
from conversor import convertir_energia

resultado = convertir_energia(1, "kWh", "J")
print(f"1 kWh son {resultado} J")
# Salida: 1 kWh son 3600000.0 J
```

## Notas
- Las conversiones de temperatura usan fórmulas lineales (no solo factores de escala).
- Para mayor precisión, se recomienda usar valores flotantes.
- Todas las funciones devuelven un número flotante.
