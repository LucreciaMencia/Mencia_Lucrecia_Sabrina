// Escribir un programa que reciba el número del mes y devuelva si tiene 31, 30 o menos días.
// Por ejemplo: si ingreso el mes 12 el resultado debe decir tiene 31 días.


//creo una funcion que encierra mi programa
function diasDelMes() { //declaro y asigno en la variable el número del mes que obtengo a través de pantalla.
    let mes = prompt("Cantidad de días que tiene el mes", 'Escriba el número del mes...');
    mes = mes.toLowerCase(); //lo convierto a minúsculas
    switch (mes) { //con el switch coincido el valor obtenido con el mensaje correspondiente.
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            document.write(`<h2>El mes ${mes} tiene 31 días.</h2>`);
            break;
        case '4':
        case '6':
        case '9':
        case '11':
            document.write(`<h2>El mes ${mes} tiene 30 días.</h2>`);
            break;

        case '2':
            document.write(`<h2>EL mes ${mes} tiene 29 días.</h2>`);
            break;
        default:
            document.write('<h2>Ingresar números del 1 al 12.</h2>');
    }
}
diasDelMes(); //Llamar a la función 

console.log(`
En el ejercicio 10 utilicé un switch,
porque los meses del año son una cantidad finita y 
es poco probable que cambie pronto tanto 
la cantida de días en cada uno, como la cantidad de
meses en el año.`);