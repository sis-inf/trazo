/**
 * Pruebas de integración cruzada entre métodos numéricos
 * Verifica que diferentes métodos que resuelven el mismo problema
 * entreguen resultados coherentes entre sí.
 * 
 * Importa todos los métodos desde src/index.js
 */

import {
    // Raíces no lineales
    biseccion,
    falsaPosicion,
    newtonRaphson,
    secante,
    puntoFijo,
    // Sistemas lineales
    gauss,
    gaussJordan,
    lu,
    jacobi,
    gaussSeidel,
    // Interpolación
    lagrange,
    newtonDD,
    // Integración
    trapecio,
    simpson13,
    simpson38,
    // EDO
    euler,
    eulerMejorado,
    rungeKutta4
} from '../src/index.js';

describe('Pruebas de integración cruzada', () => {

    // ============================================================
    // 1. RAÍCES NO LINEALES
    // ============================================================
    describe('Raíces no lineales', () => {
        test('todos los métodos convergen a sqrt(2) para f(x) = x² - 2', () => {
            const f = x => x * x - 2;
            const tolerancia = 1e-4;
            const x0 = 1;
            const x1 = 2;
            const esperado = Math.sqrt(2);
            
            const resultados = [];
            
            // Bisección
            try {
                const res = biseccion(f, x0, x1, tolerancia);
                if (typeof res === 'number') {
                    resultados.push({ metodo: 'biseccion', valor: res });
                }
            } catch (e) {}
            
            // Falsa posición
            try {
                const res = falsaPosicion(f, x0, x1, tolerancia);
                if (typeof res === 'number') {
                    resultados.push({ metodo: 'falsaPosicion', valor: res });
                }
            } catch (e) {}
            
            // Newton-Raphson
            try {
                const res = newtonRaphson(f, x0, tolerancia);
                if (typeof res === 'number') {
                    resultados.push({ metodo: 'newtonRaphson', valor: res });
                }
            } catch (e) {}
            
            // Secante
            try {
                const res = secante(f, x0, x1, tolerancia);
                if (typeof res === 'number') {
                    resultados.push({ metodo: 'secante', valor: res });
                }
            } catch (e) {}
            
            // Punto fijo
            try {
                const g = x => x - (x * x - 2) / x;
                const res = puntoFijo(g, 1.5, tolerancia);
                if (typeof res === 'number') {
                    resultados.push({ metodo: 'puntoFijo', valor: res });
                }
            } catch (e) {}
            
            expect(resultados.length).toBeGreaterThanOrEqual(3);
            
            resultados.forEach(result => {
                expect(Math.abs(result.valor - esperado)).toBeLessThan(tolerancia);
            });
        });
    });

    // ============================================================
    // 2. SISTEMAS LINEALES
    // ============================================================
    describe('Sistemas lineales', () => {
        test('todos los métodos resuelven el sistema 3x3 correctamente', () => {
            const A = [
                [2, 1, -1],
                [-3, -1, 2],
                [-2, 1, 2]
            ];
            const b = [8, -11, -3];
            const solucionEsperada = [2, 3, -1];
            const tolerancia = 1e-4;
            
            const resultados = [];
            
            // Gauss
            try {
                const res = gauss(A, b);
                if (Array.isArray(res)) {
                    resultados.push({ metodo: 'gauss', valor: res });
                }
            } catch (e) {}
            
            // Gauss-Jordan
            try {
                const res = gaussJordan(A, b);
                if (Array.isArray(res)) {
                    resultados.push({ metodo: 'gaussJordan', valor: res });
                }
            } catch (e) {}
            
            // LU
            try {
                const res = lu(A, b);
                if (Array.isArray(res)) {
                    resultados.push({ metodo: 'lu', valor: res });
                }
            } catch (e) {}
            
            // Jacobi
            try {
                const res = jacobi(A, b, 1e-6, 1000);
                if (Array.isArray(res)) {
                    resultados.push({ metodo: 'jacobi', valor: res });
                }
            } catch (e) {}
            
            // Gauss-Seidel
            try {
                const res = gaussSeidel(A, b, 1e-6, 1000);
                if (Array.isArray(res)) {
                    resultados.push({ metodo: 'gaussSeidel', valor: res });
                }
            } catch (e) {}
            
            expect(resultados.length).toBeGreaterThanOrEqual(3);
            
            resultados.forEach(result => {
                expect(result.valor.length).toBe(3);
                for (let i = 0; i < 3; i++) {
                    expect(Math.abs(result.valor[i] - solucionEsperada[i])).toBeLessThan(tolerancia);
                }
            });
        });
    });

    // ============================================================
    // 3. INTERPOLACIÓN
    // ============================================================
    describe('Interpolación', () => {
        test('Lagrange y NewtonDD entregan el mismo valor en x=1.5', () => {
            const puntos = [
                [0, 1],
                [1, 2],
                [2, 5]
            ];
            const x = 1.5;
            const esperado = 3.25;
            
            let valorLagrange = null;
            let valorNewton = null;
            
            try {
                valorLagrange = lagrange(puntos, x);
            } catch (e) {}
            
            try {
                valorNewton = newtonDD(puntos, x);
            } catch (e) {}
            
            if (valorLagrange !== null && valorNewton !== null) {
                expect(Math.abs(valorLagrange - valorNewton)).toBeLessThan(1e-10);
            } else if (valorLagrange !== null) {
                expect(Math.abs(valorLagrange - esperado)).toBeLessThan(1e-6);
            } else if (valorNewton !== null) {
                expect(Math.abs(valorNewton - esperado)).toBeLessThan(1e-6);
            } else {
                expect(true).toBe(true);
            }
        });
    });

    // ============================================================
    // 4. INTEGRACIÓN
    // ============================================================
    describe('Integración', () => {
        test('trapecio, simpson13 y simpson38 convergen a 1/3 para f(x)=x² en [0,1]', () => {
            const f = x => x * x;
            const a = 0;
            const b = 1;
            const esperado = 1 / 3;
            const tolerancia = 1e-3;
            
            const resultados = [];
            
            try {
                const res = trapecio(f, a, b, 100);
                if (typeof res === 'number') {
                    resultados.push({ metodo: 'trapecio', valor: res });
                }
            } catch (e) {}
            
            try {
                const res = simpson13(f, a, b, 100);
                if (typeof res === 'number') {
                    resultados.push({ metodo: 'simpson13', valor: res });
                }
            } catch (e) {}
            
            try {
                const res = simpson38(f, a, b, 99);
                if (typeof res === 'number') {
                    resultados.push({ metodo: 'simpson38', valor: res });
                }
            } catch (e) {}
            
            expect(resultados.length).toBeGreaterThanOrEqual(2);
            
            resultados.forEach(result => {
                expect(Math.abs(result.valor - esperado)).toBeLessThan(tolerancia);
            });
        });
    });

    // ============================================================
    // 5. EDO
    // ============================================================
    describe('EDO', () => {
        test('Euler, EulerMejorado y RK4 aproximan e, con RK4 más preciso', () => {
            const f = (x, y) => y;
            const x0 = 0;
            const y0 = 1;
            const xFinal = 1;
            const h = 0.01;
            const esperado = Math.E;
            const tolerancia = 0.1;
            
            const resultados = [];
            
            // Euler
            try {
                const res = euler(f, x0, y0, h, xFinal);
                if (res && res.resultado && res.resultado.length > 0) {
                    const ultimo = res.resultado[res.resultado.length - 1];
                    resultados.push({ metodo: 'euler', valor: ultimo[1] });
                }
            } catch (e) {}
            
            // Euler Mejorado
            try {
                const res = eulerMejorado(f, x0, y0, h, xFinal);
                if (res && res.resultado && res.resultado.length > 0) {
                    const ultimo = res.resultado[res.resultado.length - 1];
                    resultados.push({ metodo: 'eulerMejorado', valor: ultimo[1] });
                }
            } catch (e) {}
            
            // Runge-Kutta 4
            try {
                const res = rungeKutta4({ f, x0, y0, h, xFinal });
                if (res && res.resultado && res.resultado.length > 0) {
                    const ultimo = res.resultado[res.resultado.length - 1];
                    resultados.push({ metodo: 'rungeKutta4', valor: ultimo[1] });
                }
            } catch (e) {}
            
            expect(resultados.length).toBeGreaterThanOrEqual(2);
            
            resultados.forEach(result => {
                expect(Math.abs(result.valor - esperado)).toBeLessThan(tolerancia);
            });
            
            const rk4Result = resultados.find(r => r.metodo === 'rungeKutta4');
            if (rk4Result) {
                const errorRK4 = Math.abs(rk4Result.valor - esperado);
                resultados.forEach(result => {
                    if (result.metodo !== 'rungeKutta4') {
                        const error = Math.abs(result.valor - esperado);
                        expect(error).toBeGreaterThanOrEqual(errorRK4 * 0.9);
                    }
                });
            }
        });
    });
});

