# Modo interactivo (REPL) del CLI

El CLI `trazo` incluye un modo interactivo (REPL) que permite ejecutar comandos de forma iterativa sin necesidad de invocar `trazo` repetidamente.

## Iniciar el REPL

Ejecuta el siguiente comando:

```bash
trazo repl
```

Verás un prompt como:

```
trazo>
```

## Sintaxis abreviada

Dentro del REPL, los comandos se escriben sin el prefijo `trazo`. Por ejemplo:

- Para mostrar la ayuda:
  ```
  help
  ```
- Para salir del REPL:
  ```
  exit
  ```
  o
  ```
  quit
  ```

## Ejemplo concreto

Supongamos que deseas generar un archivo de configuración y luego listar los archivos del proyecto:

```bash
trazo repl
```
En el prompt:
```
trazo> init
```
Luego:
```
trazo> list
```
Finalmente:
```
trazo> exit
```

## Comandos disponibles

- `help`: Muestra la lista de comandos disponibles.
- `exit` o `quit`: Termina la sesión REPL.
- Cualquier otro comando soportado por `trazo` (sin el prefijo `trazo`).

> **Nota:** Los comandos se ejecutan en el contexto del directorio actual.

## Consejo

Puedes usar el REPL para probar comandos rápidamente antes de incorporarlos a un script.
