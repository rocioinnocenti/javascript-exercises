function calcularGastoTotalValidar() {
    const formulario = document.getElementById("formulariogastos");
    if (formulario.checkValidity()) {
        calcularGastoTotal();
    }
    else {
        document.getElementById("resultadoMensual").textContent = "Formulario invalido";
    }
}

function calcularGastoTotal() {
    // Obtenemos el nombre del mes
    const nombreMes = document.getElementById("mes").value;

    // Gastos por semana, recorremos las semanas de la 1 a la 4, y sumamos sus resultados
    let gastoMensual = 0;
    for (let semana = 1; semana <= 4; semana++) {
        //obtenemos el gasto por cada semana
        let gastoSemanal = obtenerGastoSemanal(semana);
        //mostramos el gasto por cada semana
        document.getElementById("resultadoSemanal" + semana).textContent = "Gasto Semana " + semana + ": " + gastoSemanal;
        //al gasto mensual, le vamos sumando el gasto de cada una de las 4 semanas
        gastoMensual += gastoSemanal;
    }
    let color = colorGasto(gastoMensual);
    document.getElementById("resultadoMensual").textContent = "Gasto Mensual " + nombreMes.toUpperCase() + " :" + gastoMensual;
    document.getElementById("resultadoMensual").style.color = color;


}

function obtenerGastoSemanal(numSemana) {
    //obtenemos el valor del formulario de la semana
    const comida = document.getElementById("semana" + numSemana+"_comida").valueAsNumber;
    const ocio = document.getElementById("semana" + numSemana + "_ocio").valueAsNumber;
    const vivienda = document.getElementById("semana" + numSemana + "_vivienda").valueAsNumber;

    //calculamos el gasto semanal y lo devolvemos
    let gastoSemana = comida + ocio + vivienda;

    return gastoSemana;

}

function colorGasto(gastoMensual) {
    let color = 'black';
    if (gastoMensual > 800) {
        color = 'red';
    }
    else if (gastoMensual < 300) {
        color = 'green';
    }
    else {
        color = 'black';
    }
    return color;
}





