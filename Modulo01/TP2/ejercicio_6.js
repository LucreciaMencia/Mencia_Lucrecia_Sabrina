// Escribir un script que muestre la posición de la primera vocal de un texto introducido por
// teclado. Por ejemplo: perro = “e” es la letra Nº2 ; árbol = “a” es la letra Nº1.
function posicionDeVocal() {
    const vocales = ["a", "e", "i", "o", "u"]; // declaro como constante un array con cada vocal por índice.
    let cadena = prompt("Escribe algo."); //declaro una variable y le asigno un string que pido por pantalla. 
    const cadenaMin = cadena.toLocaleLowerCase(); //declaro una variable como const y le asigno el valor de la variable cadena todo en minúscula.
    let indicePrimerVocal = 0, stop = false; // declaro variables
    for (let i = 0; i < cadenaMin.length; i++) { //comienzo un ciclo para recorrer el string letra por letra
        for (let j = 0; j < vocales.length; j++) { //comienzo otro ciclo para comparar con los valores del array vocales.
            if (vocales[j] === cadenaMin.charAt(i)) {  //charAt devuelve como string el caracter en esa posición
                indicePrimerVocal = i; //cuando haya coincidencia, guardo la posición de i (posici'on de la vocal en el string)
                stop = true; // le asigno a la variable stop el valor true.
                break; // cierro ciclo

            }
        }
        if (stop) { //cuando la variable stop tenga un valor true, se cierra el ciclo.
            break;
        }
    }
    document.write(`La primer vocal de "${cadena}" está en la posoción ${indicePrimerVocal + 1} del texto.`);
    document.write("<br>")
    document.write(`Y es la vocal: "${cadena.charAt(indicePrimerVocal)}".`);
};
posicionDeVocal();

console.log(`
En éste ejercicio:
Creo una función que pide por pantalla un texto.
Identifique comparando letra por letra con las vocales.
Determine en qué posición está y cuál es.
Al final, imprime el valor por pantalla.
`);