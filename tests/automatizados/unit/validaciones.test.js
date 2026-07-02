import { validarNumero, validarFuncion } from '../../../src/utils/validaciones.js';

describe('validarNumero', () => {
    test('acepta un número válido', () => {
        expect(() => validarNumero(5)).not.toThrow();
        expect(() => validarNumero(3.14)).not.toThrow();
        expect(() => validarNumero(-2)).not.toThrow();
    });

    test('rechaza valores no numéricos', () => {
        expect(() => validarNumero('5')).toThrow();
        expect(() => validarNumero(null)).toThrow();
        expect(() => validarNumero(undefined)).toThrow();
        expect(() => validarNumero(NaN)).toThrow();
    });
});

describe('validarFuncion', () => {
    test('acepta una función', () => {
        expect(() => validarFuncion(() => {})).not.toThrow();
        expect(() => validarFuncion(function() {})).not.toThrow();
        expect(() => validarFuncion(x => x * 2)).not.toThrow();
    });

    test('rechaza valores que no son funciones', () => {
        expect(() => validarFuncion(5)).toThrow();
        expect(() => validarFuncion('function')).toThrow();
        expect(() => validarFuncion(null)).toThrow();
        expect(() => validarFuncion({})).toThrow();
    });
});
