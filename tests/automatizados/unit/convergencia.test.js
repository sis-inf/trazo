import { checkConvergence } from '../../../src/utils/convergence.js';

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
