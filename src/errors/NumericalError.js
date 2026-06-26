
class NumericalError extends Error {
    /**
     * @param {string} message - Mensaje descriptivo del error.
     * @param {string} code - Código identificador del error.
     * @param {string} methodName - Nombre del método numérico que falló.
     */
    constructor(message, code, methodName) {
        super(message);
        this.name = "NumericalError";
        this.code = code;
        this.methodName = methodName;
    }
}

module.exports = NumericalError;