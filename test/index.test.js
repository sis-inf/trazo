/**
 * Pruebas de integración - Verifica que los módulos se importen correctamente
 */

describe('Pruebas de integración', () => {
    test('debería importar diferencia_hacia_atras.js correctamente', async () => {
        const module = await import('../src/diferencias/diferencia_hacia_atras.js');
        expect(module).toBeDefined();
        expect(typeof module.diferenciasAtrasGrado1).toBe('function');
    });

    test('diferenciasAtrasGrado1(x => x**2, 2, 0.001) debería ser ~4.0', async () => {
        const { diferenciasAtrasGrado1 } = await import('../src/diferencias/diferencia_hacia_atras.js');
        const result = diferenciasAtrasGrado1(x => x**2, 2, 0.001);
        expect(result).toBeCloseTo(4.0, 2);
    });

    test('diferenciasAtrasGrado1 con h=0 debería lanzar error', async () => {
        const { diferenciasAtrasGrado1 } = await import('../src/diferencias/diferencia_hacia_atras.js');
        expect(() => diferenciasAtrasGrado1(x => x**2, 2, 0)).toThrow('El paso h no puede ser 0');
    });
});
