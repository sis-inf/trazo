import {
    checkConvergence,
    ConvergenceHistory
} from '../../../src/utils/convergence.js';

describe('checkConvergence', () => {
    test('retorna converged=true cuando error < tolerancia', () => {
        const result = checkConvergence(0.0005, 0.001);
        expect(result.converged).toBe(true);
        expect(result.error).toBe(0.0005);
        expect(result.tolerancia).toBe(0.001);
    });

    test('retorna converged=false cuando error >= tolerancia', () => {
        const result = checkConvergence(0.002, 0.001);
        expect(result.converged).toBe(false);
        expect(result.error).toBe(0.002);
        expect(result.tolerancia).toBe(0.001);
    });

    test('retorna converged=true cuando error === tolerancia', () => {
        const result = checkConvergence(0.001, 0.001);
        expect(result.converged).toBe(true);
    });

    test('valida que error sea un número', () => {
        expect(() => checkConvergence('0.001', 0.001)).toThrow();
        expect(() => checkConvergence(NaN, 0.001)).toThrow();
    });

    test('valida que tolerancia sea un número positivo', () => {
        expect(() => checkConvergence(0.001, 0)).toThrow();
        expect(() => checkConvergence(0.001, -1)).toThrow();
        expect(() => checkConvergence(0.001, '0.001')).toThrow();
    });
});

describe('ConvergenceHistory', () => {
    test('almacena el historial de errores', () => {
        const history = new ConvergenceHistory();
        history.add(0.1);
        history.add(0.01);
        history.add(0.001);
        
        expect(history.getAll()).toEqual([0.1, 0.01, 0.001]);
        expect(history.getLast()).toBe(0.001);
        expect(history.length()).toBe(3);
    });

    test('valida que los errores sean números positivos', () => {
        const history = new ConvergenceHistory();
        expect(() => history.add(-0.1)).toThrow();
        expect(() => history.add('0.1')).toThrow();
        expect(() => history.add(NaN)).toThrow();
    });

    test('retorna true si está convergiendo', () => {
        const history = new ConvergenceHistory();
        history.add(0.1);
        history.add(0.01);
        history.add(0.001);
        expect(history.isConverging(0.01)).toBe(true);
        expect(history.isConverging(0.0001)).toBe(false);
    });
});
