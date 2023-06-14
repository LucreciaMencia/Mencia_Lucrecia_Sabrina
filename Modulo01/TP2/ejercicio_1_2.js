//Imprimir estos elementos de menor a mayor cantidad de letras.
const valores = [true, false, 2, "hola", "mundo", 3, "char"]; //const porque solo voy a visualizar.

function ordenarVector(vector) { //función para ordenar vectores que espera recibir un vector.
    let valoresScript = []; //defino un vector que luego será cargado.

    for (let i = 0; i < valores.length; i++) { //recorro array valores para identificar sus valores. 
        if (typeof valores[i] === "string") { //obtengo los valores que son string.
            valoresScript.push(valores[i]); //cargo en el vector con los valores de tipo string.
        }

    }

    valoresScript.sort(function (a, b) { //utilizo el método sort y una función para ordenar elementos de un arreglo.
        if (a === b) {
            return 0;
        }
        if (a < b) {
            return -1;
        }
        return 1;
    });
    return valoresScript; // retorno la función ordenada
}

// defino una variable como const y le asigno al valor que tiene el return de la función que llamé.
const menorAMayor = ordenarVector(valores);
document.write(`<h2>Elementos del array ordenados de menor a manyor: ${menorAMayor}</h2>`);