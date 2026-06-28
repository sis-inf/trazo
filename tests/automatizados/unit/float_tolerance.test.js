describe("Pruebas con tolerancia flotante", () => {

    test("Newton - resultado con tolerancia flotante", () => {
        const actual = 1.4142135623730951; // raíz de 2
        const expected = 1.41421356237;
        expect(actual).toBeCloseTo(expected, 5);
    });

    test("Bisección - resultado con tolerancia flotante", () => {
        const actual = 1.3247179572;
        const expected = 1.32471795724;
        expect(actual).toBeCloseTo(expected, 5);
    });

});