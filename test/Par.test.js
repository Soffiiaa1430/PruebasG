//Verificar si 4 es un número par
//Verificar si 7 es un número par
//Verificar si 0 es un número par
//Verificar si -10 es un número par
//Verificar si 15 es un número par
const Par = require('../Par');
test('Verificar si 4 es un número par', () => {
    expect(Par(4)).toBe(true);
});

test('Verificar si 7 es un número par', () => {
    expect(Par(7)).toBe(false);
});

test('Verificar si 0 es un número par', () => {
    expect(Par(0)).toBe(true);
});

test('Verificar si -10 es un número par', () => {
    expect(Par(-10)).toBe(true);
});

test('Verificar si 15 es un número par', () => {
    expect(Par(15)).toBe(false);
});