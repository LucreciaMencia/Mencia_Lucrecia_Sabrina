// Crear un programa que recibe las notas de un alumno, todos los números deben ser naturales
// < 11. Debe calcular el promedio. Por último imprimir en pantalla si el valor de media es < 6
// “Reprobado”, entre 6 y 8 “Aprobado” y si es mayor a 8 “Sobresaliente”

//bucle dentro de un bucle
function promedioNotas() { //Creo función para calcular el pomedio de las notas y determinar el estado del estudiante
    const notas = []; //el tipo de variable const permite agregar valores al array y quitar, pero no permite cambiar un valor existente
    let contadorNotas = 0, promedio = 0, num = 0; //declaro variable para contar las notas, para el promedio y para recibir las notas
    do {
        num = Number(    //Obtengo notas por pantalla
            prompt(
                'Ingrese las notas. Al finalizar, ingrese ¨-1¨',
                'Aquí')
        );

        //Si no es un número, pido que ongresen uno
        if (Number.isNaN(num)) {
            document.write('<h2>Por favor ingresa un número.</h2>');
        }
        //Si no es la clave que se podnrá al finalizar, agregar el número en el array notas
        else if (num != -1) {
            notas.push(num)
        }

    } while (num != -1); //cuando sea -1 != -1 dará falso y saldrá del bucle do-while

    //con un ciclo for recorro el array y sumo cada valor dentro
    for (let i = 0; i < notas.length; i++) {
        contadorNotas = contadorNotas + notas[i]
    };
    promedio = contadorNotas / notas.length; //aquí asigno a promedio el valor de la suma de las notas(en contadorNotas), dividido la cantidad de índices del array
    if (promedio < 6) {                             //Determino el estado del alumno según su promedio
        document.write("<h2>Reprobado.</h2>")
    } else if (promedio >= 6 && promedio <= 8) {
        document.write("<h2>Aprobado.</h2>")
    } else if (promedio > 8) {
        document.write("<h2>Sobresaliente.</h2>")
    }
    else {
        document.write('<h2>Si quiere ingresar notas, recarga la página.</h2>')
    }
}
promedioNotas(); //Llamo a la función

console.log(`
Comienzo llamando a una función que hace el trabajo completo:
recibe las notas, las guarda en un vector, suma las notas y calcula el promedio.
Luego determina el estado del alumno y imprime en pantalla `);


