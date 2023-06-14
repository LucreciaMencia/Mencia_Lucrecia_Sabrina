//Determinar el resultado de las cuatro operaciones matemáticas básicas (suma, resta,
//  multiplicación y división) realizadas con los dos elementos numéricos.

const valores = [true, false, 2, "hola", "mundo", 3, "char"];
let a, b, valoresNumber = [];

for (let i = 0; i < valores.length; i++) {
    if (typeof valores[i] === "number") {
        valoresNumber.push(valores[i]);
    }
}

a = valoresNumber[0];
b = valoresNumber[1];
document.write(`<h2>Resultado de las cuatro operaciones básicas con ${a} y ${b} </h2>`);

Suma = a + b;
document.write(`<h2>${a} + ${b} = ${Suma}</h2>`)

Resta1 = a - b;
document.write(`<h2>${a} - ${b} = ${Resta1}</h2>`);

Resta2 = b - a;
document.write(`<h2>${b} - ${a} = ${Resta2}</h2>`);

Producto = a * b;
document.write(`<h2>${a}*${b}=${Producto}</h2>`);


Division1 = a / b;
document.write(`<h2>${a}/${b}=${Division1.toFixed(2)}</h2>`); //toFixed para mostrar 2 decimales

Division2 = b / a
document.write(`<h2>${b}/${a}=${Division2.toFixed(2)}</h2>`);

console.log(`
Primero extraigo los valores de tipo numérico del array.
Los guardo en variables.
Finalizo calculando las opciones posibles con las cuatro operaciones básicas.`)