const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octumbre', 'Noviemre', 'Diciembre'];


let mes = Number(
    prompt(
        'Ingrese un número del 1 al 12 para saber a cuál mes del año corresponde.',
        'Escriba aquí'
    )
);

if (Number.isNaN(mes)) {
    document.write('Por favor ingresa un número.');
}

else if (mes >= 1 && mes <= 12) {
    mes--;
    document.write(meses[mes]);

}

else {
    document.write('Por favor ingresa un número del 1 al 12.');
}