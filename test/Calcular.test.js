//El área de un rectángulo 3x4 debe ser 12
//El área de un rectángulo 5x10 debe ser 50
//El área de un rectángulo 6x8 debe ser 48
//El área con base cero debe lanzar un error
//El área con altura negativa debe lanzar un error

const Calcular = require('../Calcular');
test('El área de un rectángulo 3x4 debe ser 12', () => {
    expect(Calcular(3, 4)).toBe(10);
});

test('El área de un rectángulo 5x10 debe ser 50', () => {
    expect(Calcular(5, 10)).toBe(50);
});

test('El área de un rectángulo 6x8 debe ser 48', () => {
    expect(Calcular(6, 8)).toBe(48);
});

test('El área con base cero debe lanzar un error', () => {
    expect(() => Calcular(0, 7)).toThrow("La base y la altura deben ser valores positivos");
});

test('El área con altura negativa debe lanzar un error', () => {
    expect(() => Calcular(4, -3)).toThrow("La base y la altura deben ser valores positivos");
});