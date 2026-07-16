/**
 * Utilidad para verificar convergencia de métodos numéricos
 * @param {number} xNew - Valor actual de la iteración
 * @param {number} xOld - Valor anterior de la iteración
 * @param {number} tol - Tolerancia para considerar convergencia
 * @returns {{ converged: boolean, lastDiff: number }} Objeto con estado de convergencia y última diferencia
 */
export function checkConvergence(xNew, xOld, tol) {
    // Calcular la diferencia absoluta
    const lastDiff = Math.abs(xNew - xOld);
    
    // Verificar si la diferencia es menor que la tolerancia
    const converged = lastDiff < tol;
    
    // Retornar objeto con los resultados
    return {
        converged: converged,
        lastDiff: lastDiff
    };
}

/**
 * Clase para mantener historial limitado de valores (últimos 2)
 * Útil para usar en métodos iterativos como Newton y bisección
 */
export class ConvergenceHistory {
    constructor() {
        this.values = [];
    }
    
    /**
     * Agrega un nuevo valor y mantiene solo los últimos 2
     * @param {number} value - Nuevo valor a agregar
     */
    addValue(value) {
        this.values.push(value);
        // Limitar historial a 2 valores
        if (this.values.length > 2) {
            this.values.shift();
        }
    }
    
    /**
     * Verifica convergencia usando los últimos 2 valores
     * @param {number} tol - Tolerancia para convergencia
     * @returns {{ converged: boolean, lastDiff: number | null }} Resultado de convergencia
     */
    checkLastTwo(tol) {
        if (this.values.length < 2) {
            return {
                converged: false,
                lastDiff: null
            };
        }
        
        const xOld = this.values[0];
        const xNew = this.values[1];
        const lastDiff = Math.abs(xNew - xOld);
        
        return {
            converged: lastDiff < tol,
            lastDiff: lastDiff
        };
    }
    
    /**
     * Resetea el historial
     */
    reset() {
        this.values = [];
    }
    
    /**
     * Obtiene el último valor almacenado
     * @returns {number | undefined}
     */
    getLastValue() {
        return this.values[this.values.length - 1];
    }
}
