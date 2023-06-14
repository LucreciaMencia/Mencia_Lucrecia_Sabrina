// Escribir una función que reciba un texto y lo devuelva al revés.

function invertirCadena(cadena) { // Creo la función para invertir una cadena
    let separarCadena = cadena.split(""); // separo la cadena con split. Las comillas vacías ordenan considerar el string caracter por caracter.
    let invertirArreglo = separarCadena.reverse(); //invierto el orden mediante reverse.
    const unirArreglo = invertirArreglo.join(""); //uno la cadena nuevamente con join.
    return unirArreglo; //devuelvo el arreglo invertido.
}
const cadena = prompt("Escribe algo.", "Aquí");
document.write(`La cadena "${cadena}" al revés es ${invertirCadena(cadena)}.`);

console.log(`
La idea es simple:
Pedir una cadena por pantalla.
A través de la función, separar por caracter, invertir y volver a unir.
Utilizo métodos específicos: split, reverse y join respectivamente.
Luego imprimo un mensaje con el resultado`);
