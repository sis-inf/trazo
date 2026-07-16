import { lagrange } from '../../../src/interpolacion/lagrange.js';

describe('Interpolación de Lagrange', () => {
    test('el polinomio pasa exactamente por todos los puntos de entrada', () => {
        const puntos = [
            [0, 1],
            [1, 3],
            [2, 5]
        ];

        puntos.forEach(([x, y]) => {
            const resultado = lagrange({ puntos, x });

            expect(resultado.resultado)
                .toBeCloseTo(y, 10);
        });
    });

    test('calcula correctamente un valor interpolado entre puntos conocidos', () => {
        const puntos = [
            [0, 1],
            [1, 3],
            [2, 5]
        ];

        /*
         * Cálculo manual:
         *
         * Los puntos pertenecen al polinomio:
         * P(x) = 2x + 1
         *
         * Para x = 0.5:
         *
         * P(0.5) = 2(0.5) + 1
         * P(0.5) = 2
         */

        const resultado = lagrange({
            puntos,
            x: 0.5
        });

        expect(resultado.resultado)
            .toBeCloseTo(2, 10);
    });
});
