//función para Calcular el área de un rectángulo


function Calcular(base, altura) {
    if (base <= 0 || altura <= 0) {
        throw new Error("La base y la altura deben ser valores positivos");
    }
    return base * altura;
}
module.exports = Calcular;