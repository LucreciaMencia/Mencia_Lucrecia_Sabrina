// Crear una función que muestre información sobre una cadena de texto que se le pasa como
// argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
// sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas

function diferenciarCadena(caracteres) {    //Función que compara el string
    let resultado = "La cadena \"" + cadena + "\" "; //defino una variable resultado donde asigno un string con la variable que paso 
    if (caracteres === caracteres.toUpperCase()) {
        resultado += " solo tiene mayúsculas.";
    }
    else if (caracteres === caracteres.toLowerCase()) {
        resultado += " solo tiene minúsculas.";
    }
    else {
        resultado += " tiene mayúsculas y minúsculas.";
    }
    return resultado;
}

const cadena = prompt("Escribe algo ");

const resultadoCadena = diferenciarCadena(cadena);
document.write(resultadoCadena);

console.log(`
En pocas palabras:
Obtengo un string por pantalla.
Lo comparo con su versión en mayúscula y en minúscula.
Determino cómo está compuesto el string
Imprimo por pantalla.
`);
