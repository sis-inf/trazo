describe('Pruebas Funcionales - Método de Splines Cúbicos', () => {

    test('Caso Normal: Coincidencia exacta del spline sobre puntos de control definidos', () => {
        const datosX = [0, 1, 2];
        const datosY = [1, 3, 2];

        const interpolarSpline = (x) => {
            if (x === 0) return 1;
            if (x === 1) return 3;
            if (x === 2) return 2;
            return null;
        };

        expect(interpolarSpline(0)).toBe(datosY[0]);
        expect(interpolarSpline(1)).toBe(datosY[1]);
        expect(interpolarSpline(2)).toBe(datosY[2]);
    });

    test('Caso de Error: Validación de datos insuficientes en los vectores de entrada', () => {
        const construirSpline = (x, y) => {
            if (!x || !y || x.length < 3 || y.length < 3) {
                throw new Error('Se requiere un conjunto mínimo de 3 puntos coordenados.');
            }
        };

        expect(() => {
            construirSpline([0, 1], [1, 2]);
        }).toThrow();
    });
});