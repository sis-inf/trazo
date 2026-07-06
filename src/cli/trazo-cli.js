#!/usr/bin/env node

import { compile } from "mathjs";
import { biseccion } from "../no-lineales/biseccion.js";

function parseArgs(argv) {
    const command = argv[0];
    const args = {};

    for (let i = 1; i < argv.length; i++) {
        const arg = argv[i];

        if (arg.startsWith("--")) {
            args[arg.slice(2)] = argv[i + 1];
            i++;
        }
    }

    return { command, args };
}

function parseFunction(expression) {
    if (!expression) {
        throw new Error("Debe proporcionar una expresión con --f.");
    }

    try {
        const compiled = compile(expression);
        return (x) => compiled.evaluate({ x });
    } catch {
        throw new Error("Expresión matemática inválida.");
    }
}

function showHelp() {
    console.log(`
Trazo CLI
---------

Uso:
  trazo <metodo> [opciones]

Métodos disponibles:
  biseccion

Opciones para biseccion:
  --f             Función (ej: "x^2-4")
  --a             Extremo izquierdo
  --b             Extremo derecho
  --tolerancia    Tolerancia (opcional)
  --maxIter       Máximo de iteraciones (opcional)

Ejemplo:
  trazo biseccion --f "x^2-4" --a 0 --b 3
`);
}

const { command, args } = parseArgs(process.argv.slice(2));

if (
    !command ||
    process.argv.includes("--help") ||
    process.argv.includes("-h")
) {
    showHelp();
    process.exit(0);
}

try {
    switch (command) {
        case "biseccion":
            if (
                args.f === undefined ||
                args.a === undefined ||
                args.b === undefined
            ) {
                throw new Error("Debe proporcionar --f, --a y --b.");
            }

            const resultado = biseccion({
                f: parseFunction(args.f),
                a: Number(args.a),
                b: Number(args.b),
                tolerancia:
                    args.tolerancia !== undefined
                        ? Number(args.tolerancia)
                        : undefined,
                maxIter:
                    args.maxIter !== undefined
                        ? Number(args.maxIter)
                        : undefined,
            });

            console.log(JSON.stringify(resultado, null, 2));
            break;

        default:
            console.error(`Método "${command}" no soportado.\n`);
            showHelp();
            process.exit(1);
    }
} catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
}