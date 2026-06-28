describe('Pruebas Funcionales - Método de Runge-Kutta 4 (RK4)', () => {

    test('Caso Normal: Resolución de EDO lineal con error absoluto controlado', () => {
        const edo = (x, y) => x + y;
        let x = 0;
        let y = 1;
        const h = 0.1;

        const k1 = edo(x, y);
        const k2 = edo(x + h / 2, y + (h / 2) * k1);
        const k3 = edo(x + h / 2, y + (h / 2) * k2);
        const k4 = edo(x + h, y + h * k3);
        
        const ySiguiente = y + (h / 6) * (k1 + 2 * k2 + 2 * k3 + k4);
        const valorReal = 2 * Math.exp(0.1) - 0.1 - 1;
        const errorAbsoluto = Math.abs(ySiguiente - valorReal);

        expect(errorAbsoluto).toBeLessThan(1e-6);
    });

    test('Caso de Borde: Comportamiento del método en condiciones iniciales nulas', () => {
        const edo = (x, y) => x;
        let x = 0;
        let y = 0;
        const h = 0.2;

        const k1 = edo(x, y);
        const k2 = edo(x + h / 2, y + (h / 2) * k1);
        const k3 = edo(x + h / 2, y + (h / 2) * k2);
        const k4 = edo(x + h, y + h * k3);
        
        const ySiguiente = y + (h / 6) * (k1 + 2 * k2 + 2 * k3 + k4);
        
        expect(Number.isNaN(ySiguiente)).toBe(false);
        expect(Number.isFinite(ySiguiente)).toBe(true);
    });

    test('Caso de Error: Lanzamiento de excepción ante entradas de datos no numéricos', () => {
        const ejecutarRK4 = (edo, x, y, h) => {
            if (typeof x !== 'number' || typeof y !== 'number' || typeof h !== 'number') {
                throw new Error('Las entradas del método RK4 deben ser estrictamente numéricas.');
            }
        };

        expect(() => {
            ejecutarRK4((x, y) => y, "cero", 1, 0.1);
        }).toThrow();
    });
});