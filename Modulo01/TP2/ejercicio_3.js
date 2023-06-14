// Utilizando la estructura FOR, crear un script que pueda calcular el factorial de un número entero.

//Creo una función para calcular el factorial de un número entero que retorne el resultado.
function factorial(nunEntero) {
    var total = 1; //fuera del for, defino una variable para guardar los resultados de cada multiplicación.
    //de lo contrario el valor se olvidaría al comenzar un nuevo ciclo.

    for (i = 1; i <= nunEntero; i++) { // entrará en el ciclo hasta que sea igual al número ingresado por pantalla.
        total = total * i; //asigno a la variable total el resultado de su valor por el valor de i.
    }
    return total;
}

//Declaro una variable a la que le asigno un string representado como valor numérico.
let num = Number(
    prompt(
        'Ingrese un número entero para obtener su factorial'
    )
);


//Aquí verifico que el usuario ingrese un número entero:
//Si identifico que es NaN pido que ingrese un número.
if (Number.isNaN(num)) {
    document.write('Por favor ingresa un número.');
}

//Si ingresa un número entero:
else if (Number.isInteger(num)) {  //Utilizo Number.isInteger para respresentar ese string como valor numérico.
    const resultado = factorial(num); // declaro una variable. Le asigno un valor (llamo a la función, le paso la variable que guarda el número entero y me devuelve el resultado.)
    document.write(`<h2>El factorial de ${num} es ${resultado}.</h2>`) //Lo muestro por pantalla. 
}

//Si ingresan un número con comas, pido que ingresen uno entero.
else {
    document.write('Por favor ingresa un número entero');
}

console.log(`
Aquí la idea fue:
Pedir el valor por pantalla.
Verificar que sea un número entero.
Calcular su factorial mediante una función e imprimir el resultado.`);