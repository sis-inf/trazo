import { checkConvergence, ConvergenceHistory } from '../../../src/utils/convergence.js';

describe('checkConvergence', () => {
    test('retorna converged=true cuando xNew - xOld < tol', () => {
        const result = checkConvergence(1.001, 1.0, 0.01);
        expect(result.converged).toBe(true);
        expect(result.lastDiff).toBeCloseTo(0.001, 4);
    });

    test('retorna converged=false cuando xNew - xOld >= tol', () => {
        const result = checkConvergence(1.02, 1.0, 0.01);
        expect(result.converged).toBe(false);
        expect(result.lastDiff).toBeCloseTo(0.02, 4);
    });
});

describe('ConvergenceHistory', () => {
    test('almacena historial de valores', () => {
        const history = new ConvergenceHistory();
        history.addValue(1.0);
        history.addValue(1.5);
        history.addValue(1.8);
        
        expect(history.getLastValue()).toBe(1.8);
    });

    test('checkLastTwo verifica convergencia', () => {
        const history = new ConvergenceHistory();
        history.addValue(1.0);
        history.addValue(1.001);
        
        const result = history.checkLastTwo(0.01);
        expect(result.converged).toBe(true);
        expect(result.lastDiff).toBeCloseTo(0.001, 4);
    });

    test('reset limpia el historial', () => {
        const history = new ConvergenceHistory();
        history.addValue(1.0);
        history.addValue(1.5);
        history.reset();
        expect(history.getLastValue()).toBeUndefined();
    });
});
