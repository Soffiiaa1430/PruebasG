// Esta función calcula el factorial de un número entero no negativo.

function factorial(n) {
    if (n < 0) {
        throw new Error("No se puede calcular el factorial de un número negativo");
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

module.exports = factorial;
