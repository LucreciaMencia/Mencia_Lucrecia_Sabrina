//Determinar cuál de los “elementos de texto” es mayor, es decir el que contenga más letras.

const valores = [true, false, 2, "hola", "mundo", 3, "char"]; //const porque solo visualizaré los datos.

function buscarStringLargo(vector) {  //Declaro una función, que espera recibir como parámetro un vector.
    let masLargo = 0, comparador, resultado; //estas variables solo tendrán alcance dentro de la función.
    //declaro un comparador y dos variables donde voy a guardar valores.
    for (let i = 0; i < vector.length; i++) { //inicio un ciclo que se repetirá tantas veces como índices tenga el vector.
        if (typeof vector[i] === "string") { //inicio una condición lógica que devuelve true si el valor en el índice es de tipo string.
            comparador = vector[i].length; //una vez dentro, guardo el valor numérico de la longitud de ese string en "comparador"
            if (comparador > masLargo) { //inicio un nuevo ciclo donde sólo entran los valores de "comparador" mayor que "masLargo"
                masLargo = comparador; //"masLargo" toma el mismo valor que "comparador"
                resultado = vector[i]; //"resultado" toma el mismo valor que tiene el vector en el índice ha tomado "i" en esa repetición.
            }
        }
    }
    return resultado; // La función retornará un valor y será el que se ha guardado en la variable "resultado".
};

const stringMasLargo = buscarStringLargo(valores); //el valor que retorna la función es asignado a la variable "stringLargo".
//se muestra el valor por consola.
document.write(`<h2>El mayor elemento de texto tiene ${stringMasLargo.length} caracteres, y es el string: ${stringMasLargo}.</h2>`);

console.log('La idea general fue:');
console.log('Crear una función que identifica los strings que tenga el array.');
console.log('Luego compare entre sí para quedarse con el que contenga más letras.')

//He declarado a "valores" y a "stringLargo" como const porque serán solo para lectura.
//Sin embargo "masLargo", "comprador" y "resultado" necesito que tomen otras variables, por eso declaro como let.
//"typeof" devuelve un string con el tipo de variable, por eso lo comparo estrictamente(===) con un string.
