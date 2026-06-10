/**
 * Interpolación de Newton por diferencias divididas
 * 
 * Permite evaluar el polinomio interpolador de Newton en un punto x
 * dados los puntos (xs[i], ys[i]).
 * 
 * @param {number[]} xs - Array de coordenadas x (deben ser distintos)
 * @param {number[]} ys - Array de coordenadas y correspondientes
 * @param {number} x - Punto donde evaluar el polinomio
 * @returns {number} Valor interpolado en x
 * @throws {Error} Si los datos no son válidos
 * 
 * @example
 * // Puntos de una parábola: y = x²
 * newtonDiferenciasDivididas([1, 2, 3], [1, 4, 9], 2.5) // ≈ 6.25
 */
function newtonDiferenciasDivididas(xs, ys, x) {
    // Validación 1: mismos tamaños
    if (xs.length !== ys.length) {
        throw new NumericalError(`Los arrays xs y ys deben tener la misma longitud. xs.length=${xs.length}, ys.length=${ys.length}`);
    }
    
    // Validación 2: al menos 2 puntos
    if (xs.length < 2) {
        throw new NumericalError(`Se necesitan al menos 2 puntos para la interpolación. xs.length=${xs.length}`);
    }
    
    // Validación 3: puntos x distintos
    for (let i = 0; i < xs.length; i++) {
        for (let j = i + 1; j < xs.length; j++) {
            if (xs[i] === xs[j]) {
                throw new NumericalError(`Los valores de xs deben ser distintos. xs[${i}]=${xs[i]}, xs[${j}]=${xs[j]}`);
            }
        }
    }
    
    // Crear tabla de diferencias divididas (copia de ys)
    const n = xs.length;
    const divididas = [...ys];
    
    // Calcular diferencias divididas
    for (let j = 1; j < n; j++) {
        for (let i = n - 1; i >= j; i--) {
            divididas[i] = (divididas[i] - divididas[i - 1]) / (xs[i] - xs[i - j]);
        }
    }
    
    // Evaluar polinomio usando método de Horner anidado
    let resultado = divididas[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        resultado = resultado * (x - xs[i]) + divididas[i];
    }
    
    return resultado;
}

/**
 * Error numérico personalizado para validaciones
 */
class NumericalError extends Error {
    constructor(message) {
        super(message);
        this.name = "NumericalError";
    }
}

// Exportar para ESM (type: module) y CommonJS
export { newtonDiferenciasDivididas, NumericalError };
