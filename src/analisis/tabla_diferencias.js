export function construirTablaAdelante(ys) {
    if (!Array.isArray(ys) || ys.length < 2) {
        throw new Error('Se requieren al menos 2 elementos');
    }

    const tabla = [ys.slice()];
    let actual = ys.slice();

    while (actual.length > 1) {
        const siguiente = [];

        for (let i = 0; i < actual.length - 1; i++) {
            siguiente.push(actual[i + 1] - actual[i]);
        }

        tabla.push(siguiente);
        actual = siguiente;
    }

    return tabla;
}

export function construirTablaAtras(ys) {
    if (!Array.isArray(ys) || ys.length < 2) {
        throw new Error('Se requieren al menos 2 elementos');
    }

    const tabla = [ys.slice()];
    let actual = ys.slice();

    while (actual.length > 1) {
        const siguiente = [];

        for (let i = 1; i < actual.length; i++) {
            siguiente.push(actual[i] - actual[i - 1]);
        }

        tabla.push(siguiente);
        actual = siguiente;
    }

    return tabla;
}

export function formatearTabla(tabla) {
    return tabla
        .map(fila => fila.join('\t'))
        .join('\n');
}