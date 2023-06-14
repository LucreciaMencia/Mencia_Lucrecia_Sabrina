// Completar las condiciones de los IF del siguiente script para que los mensajes se muestren siempre
// de forma correcta:

const numUno = 3;
const numDos = 7;
if (numUno < numDos) {
    document.write(`<h2> El ${numUno} no es mayor que ${numDos}.</h2>`);
}
if (numDos > 0) {
    document.write(`<h2>El ${numDos} es positivo.</h2>`);
}
if (numUno < 0) {
    document.write(`<h2>${numUno} es negativo o distinto de cero.</h2>`);
}
if ((numUno + 1) < numDos) {
    document.write(`<h2>Incrementar en 1 unidad el numero ${numUno} no lo hace mayor o igual que ${numDos}.</h2>`);
}

console.log(
    'Para que los mensajes se muestren siempre de forma correcta, solo deberían aparecer el primero, el segundo y el tercero.')