//prueva unutaria
//numeros primos hasta el 10
//numeros primos hasta el 20
//numeros primos hasta el 1
//numeros primos hasta el numero negativo debe lanzar un error
//números primos hasta el 30
const EncontrarP = require('../EncontrarP');

test('Números primos hasta el 10', () => {
    expect(EncontrarP(10)).toEqual([2, 3, 5, 7]);
});

test('Números primos hasta el 20', () => {
    expect(EncontrarP(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
});

test('Números primos hasta el 1', () => {
    expect(EncontrarP(1)).toEqual([]);
});

test('Números primos hasta el 30', () => {
    expect(EncontrarP(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
});

test('Números primos hasta el número negativo debe lanzar un error', () => {
    expect(() => EncontrarP(-5)).toThrow("No se puede calcular los números primos de un número negativo");
});
