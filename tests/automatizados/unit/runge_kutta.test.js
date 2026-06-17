import { rungeKutta4, euler } from '../../../src/edo/runge_kutta_4.js';

describe('Métodos EDO', () => {
    test('Euler aproxima y(0.1) para dy/dt = -y', () => {
        const f = (t, y) => -y;
        const result = euler(f, 0, 1, 0.1, 10);
        
        expect(result).toBeDefined();
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(11);
        expect(result[0]).toHaveProperty('t', 0);
        expect(result[0]).toHaveProperty('y', 1);
        expect(result[10]).toHaveProperty('t', 1);
        expect(result[1].y).toBeCloseTo(0.9048, 2);
    });

    test('RK4 es más preciso que Euler para la misma EDO', () => {
        const f = (t, y) => -y;
        const y0 = 1;
        const t0 = 0;
        const tn = 1;
        const n = 10;
        const h = (tn - t0) / n;

        const eulerResult = euler(f, t0, y0, h, n);
        const rk4Result = rungeKutta4(f, t0, y0, h, n);

        const eulerError = Math.abs(eulerResult[n].y - Math.exp(-1));
        const rk4Error = Math.abs(rk4Result[n].y - Math.exp(-1));

        expect(rk4Error).toBeLessThan(eulerError);
    });

    test('h <= 0 lanza error', () => {
        const f = (t, y) => -y;
        expect(() => euler(f, 0, 1, 0, 10)).toThrow();
        expect(() => euler(f, 0, 1, -1, 10)).toThrow();
        expect(() => rungeKutta4(f, 0, 1, 0, 10)).toThrow();
        expect(() => rungeKutta4(f, 0, 1, -1, 10)).toThrow();
    });

    test('RK4 retorna array de objetos { t, y }', () => {
        const f = (t, y) => -y;
        const result = rungeKutta4(f, 0, 1, 0.1, 10);
        
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(11);
        expect(result[0]).toHaveProperty('t');
        expect(result[0]).toHaveProperty('y');
        expect(result[0].t).toBe(0);
        expect(result[0].y).toBe(1);
        expect(result[1].t).toBe(0.1);
    });

    test('valida que f sea una función', () => {
        expect(() => rungeKutta4('not a function', 0, 1, 0.1, 10)).toThrow();
        expect(() => euler('not a function', 0, 1, 0.1, 10)).toThrow();
    });
});

