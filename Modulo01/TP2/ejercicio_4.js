// Escribir el código de una función a la que se pasa como parámetro un número entero y
// devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por
// pantalla el resultado devuelto por la función.

function verificarPares(entero) { //Función para verificar si el número es par o impar
    if ((entero % 2) === 0) { //Si el resto del número dividido 2 es 0 entonces es par
        return "par";
    }
    else {
        return "impar";
    }
}

let num = Number(
    prompt(
        'Ingrese un número entero para verificar si es par o impar'
    )
);

//Al igual que en el ejercicio_3 me aseguro de obtener un número entero de tipo numérico. 
if (Number.isNaN(num)) {
    document.write('Por favor ingresa un número.');
}

else if (Number.isInteger(num)) {
    const resultado = verificarPares(num); //llamo a la función y su resultado lo guardo en la constante resultado.
    document.write(`El número ${num} es ${resultado}.`); //imprimo por pantalla.
}

else {
    document.write('Por favor ingresa un número entero');
}

console.log(`
Al igual que en ejercicio_3:
Me aseguro de obtener una variable de tipo numérica, que sea un número entero.
A través de una función, verifico si es par o impar.
Imprimo el resultado por pantalla`);
