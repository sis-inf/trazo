import {
    metodHeun,
    metodoPuntoMedio
} from '../../../src/edo/runge_kutta_2.js';

describe('Métodos EDO - Runge-Kutta 2', () => {
    const f = (t, y) => -y;
    const valorEsperado = Math.exp(-0.1);

    test('Método de Heun aproxima correctamente y(0.1)', () => {
        const resultado = metodHeun(f, 1, 0, 0.1, 0.1);

        expect(resultado).toBeDefined();
        expect(Array.isArray(resultado)).toBe(true);
        expect(resultado.length).toBe(2);

        expect(resultado[0]).toEqual({
            t: 0,
            y: 1
        });

        expect(resultado[1].t).toBeCloseTo(0.1);
        expect(resultado[1].y).toBeCloseTo(valorEsperado, 2);
    });

    test('Método del Punto Medio aproxima correctamente y(0.1)', () => {
        const resultado = metodoPuntoMedio(f, 1, 0, 0.1, 0.1);

        expect(resultado).toBeDefined();
        expect(Array.isArray(resultado)).toBe(true);
        expect(resultado.length).toBe(2);

        expect(resultado[0]).toEqual({
            t: 0,
            y: 1
        });

        expect(resultado[1].t).toBeCloseTo(0.1);
        expect(resultado[1].y).toBeCloseTo(valorEsperado, 2);
    });

    test('Heun y Punto Medio tienen una precisión similar para y(0.1)', () => {
        const resultadoHeun = metodHeun(f, 1, 0, 0.1, 0.1);
        const resultadoPuntoMedio = metodoPuntoMedio(f, 1, 0, 0.1, 0.1);

        const errorHeun = Math.abs(resultadoHeun[1].y - valorEsperado);
        const errorPuntoMedio = Math.abs(resultadoPuntoMedio[1].y - valorEsperado);

        expect(errorHeun).toBeLessThan(0.01);
        expect(errorPuntoMedio).toBeLessThan(0.01);
        expect(errorHeun).toBeCloseTo(errorPuntoMedio, 3);
    });
});
