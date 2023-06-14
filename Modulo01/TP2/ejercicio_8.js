// Crea una función que genere 100 números aleatorios entre 1 y 100 que no se repitan y luego
// imprima por pantalla usando document.write().


function numAleatorios() { //creo una función para generar los números aleatorios
    let numeros = [], comparador; // defino un array y una variable para comparar valores.
    do {                            //inicio un nucle do-while
        let num = (Math.random()); // declaro una variable. Le asigno un número aleatorio entre 0 a menor que uno.
        comparador = ((num * 100) + 1) //al comparador le asigno el valor del número aleatorio obtenido, con dos comas corridas a la derecha.
        comparador = Math.trunc(comparador) //reasigno al comparador con su valor anterior, quitándo los decimales. 
        if (!numeros.includes(comparador)) {  //Niego que el array incluye al valor de comparador en su array
            //(otra alternativa es numeros.includes(comparador) === false )
            numeros.push(comparador) //Agrego ese valor al array
        }
    } while (numeros.length <= 99); // Cuando el array numeros tenga 100 índices, saldrá del bucle.

    document.write('<h2>La siguiente lista contiene 100 números en orden aleatorio:</h2>', '<br>');
    for (let i = 0; i < numeros.length; i++) { //Recorro el array con los 100 números y los imprimo uno a uno.
        document.write(`
        
        ${i + 1})  ${numeros[i]}`, '<br>');
    }
}

numAleatorios(); //Llamo a la función

console.log(`
El plan fue:
conseguir números aleatorios y cargalos en un array.
Luego imprimir el array índice a índice.`);