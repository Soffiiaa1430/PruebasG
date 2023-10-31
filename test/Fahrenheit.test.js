//Convertir 0°C a Fahrenheit'
//Convertir 20°C a Fahrenheit
//Convertir -10°C a Fahrenheit
//Convertir 100°C a Fahrenheit
//Convertir 37°C a Fahrenheit
const Fahrenheit = require('../Fahrenheit');
test('Convertir 0°C a Fahrenheit', () => {
    expect(Fahrenheit(0)).toBe(32);
});

test('Convertir 20°C a Fahrenheit', () => {
    expect(Fahrenheit(20)).toBe(68);
});

test('Convertir -10°C a Fahrenheit', () => {
    expect(Fahrenheit(-10)).toBe(14);
});

test('Convertir 100°C a Fahrenheit', () => {
    expect(Fahrenheit(100)).toBe(212);
});

test('Convertir 37°C a Fahrenheit', () => {
    expect(Fahrenheit(37)).toBe(98.6);
});