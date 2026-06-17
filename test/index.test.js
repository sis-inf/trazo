/**
 * Pruebas de integración del proyecto
 * Verifica que todos los módulos principales se importen correctamente
 */

describe('Pruebas de integración del proyecto', () => {
    test('debería importar el módulo error_relativo correctamente', async () => {
        const module = await import('../src/utils/error_relativo.js');
        expect(module).toBeDefined();
        expect(typeof module.errorAbsoluto).toBe('function');
        expect(typeof module.errorRelativo).toBe('function');
        expect(typeof module.errorPorcentual).toBe('function');
        expect(typeof module.errorRelativoAproximado).toBe('function');
    });

    test('errorAbsoluto debería calcular correctamente', async () => {
        const { errorAbsoluto } = await import('../src/utils/error_relativo.js');
        const resultado = errorAbsoluto(3.14159, 3.14);
        expect(resultado).toBeCloseTo(0.00159, 4);
    });

    test('errorRelativo debería calcular correctamente', async () => {
        const { errorRelativo } = await import('../src/utils/error_relativo.js');
        const resultado = errorRelativo(1, 0.9);
        expect(resultado).toBe(0.1);
    });

    test('errorPorcentual debería calcular correctamente', async () => {
        const { errorPorcentual } = await import('../src/utils/error_relativo.js');
        const resultado = errorPorcentual(100, 95);
        expect(resultado).toBe(5.0);
    });

    test('errorRelativo debería lanzar error cuando valorVerdadero === 0', async () => {
        const { errorRelativo } = await import('../src/utils/error_relativo.js');
        expect(() => errorRelativo(0, 5)).toThrow('El valor verdadero no puede ser 0');
    });
});

