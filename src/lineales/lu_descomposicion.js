/**
 * Descompone una matriz cuadrada A en matrices L y U (A = LU)
 * @param {number[][]} A - Matriz de coeficientes (array de arrays)
 * @returns {{L: number[][], U: number[][]}} Matrices triangulares
 */
function descomponerLU(A) {
    const n = A.length;
    
    for (let i = 0; i < n; i++) {
        if (!Array.isArray(A[i]) || A[i].length !== n) {
            throw new Error("La matriz debe ser cuadrada.");
        }
    }

    const L = Array.from({ length: n }, () => Array(n).fill(0));
    const U = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        L[i][i] = 1;

        for (let k = i; k < n; k++) {
            let suma = 0;
            for (let j = 0; j < i; j++) {
                suma += L[i][j] * U[j][k];
            }
            U[i][k] = A[i][k] - suma;
        }

        for (let k = i + 1; k < n; k++) {
            let suma = 0;
            for (let j = 0; j < i; j++) {
                suma += L[k][j] * U[j][i];
            }
            if (U[i][i] === 0) {
                throw new Error("División por cero en la diagonal de U. Requiere pivoteo (no soportado).");
            }
            L[k][i] = (A[k][i] - suma) / U[i][i];
        }
    }

    return { L, U };
}

/**
 * Resuelve el sistema Ax = b mediante sustitución hacia adelante y hacia atrás usando L y U
 * @param {number[][]} L - Matriz triangular inferior
 * @param {number[][]} U - Matriz triangular superior
 * @param {number[]} b - Vector de términos independientes
 * @returns {number[]} Vector solución x
 */
function resolverLU(L, U, b) {
    const n = L.length;
    const y = new Array(n).fill(0);
    const x = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        let suma = 0;
        for (let j = 0; j < i; j++) {
            suma += L[i][j] * y[j];
        }
        y[i] = b[i] - suma; 
    }

    for (let i = n - 1; i >= 0; i--) {
        let suma = 0;
        for (let j = i + 1; j < n; j++) {
            suma += U[i][j] * x[j];
        }
        if (U[i][i] === 0) {
            throw new Error("La matriz U tiene un cero en la diagonal, no hay solución única.");
        }
        x[i] = (y[i] - suma) / U[i][i];
    }

    return x;
}

export {
    descomponerLU,
    resolverLU
};