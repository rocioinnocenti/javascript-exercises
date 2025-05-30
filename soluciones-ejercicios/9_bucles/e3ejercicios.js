function calcularCaloriasTotalValidar() {
    const formulario = document.getElementById("formularioCalorias");
    if (formulario.checkValidity()) {
        calcularCaloriasTotal();
    } else {
        document.getElementById("resultadoCaloriasTotal").textContent = "Formulario inválido. Por favor, completa todos los campos.";
    }
}

function calcularCaloriasTotal() {
    let caloriasTotales = 0;


    for (let i = 0; i < dias.length; i++) {
        const caloriasEjercicio = document.getElementById("dia" + i).valueAsNumber;
        const tiempo = document.getElementById("tiempo" + i).valueAsNumber;

        //calculamos las calorias diarias
        const caloriasDiarias = calcularCaloriasDiarias(caloriasEjercicio, tiempo);
        //las mostramos
        document.getElementById("caloriasdiarias" + i).textContent = "Calorias consumidas: " + caloriasDiarias;
        //sumamos las calorias al total
        caloriasTotales += caloriasDiarias;
    }
    //Mostramos las calorias totales
    document.getElementById("resultadoCaloriasTotal").textContent = "Calorias totales en la semana: " + caloriasTotales;

    //obtenemos el color segun las calorias totales
    let color = colorCaloriasTotales(caloriasTotales);
    //mostramos el color correspondiente
    document.getElementById("resultadoCaloriasTotal").style.color = color;

}

function colorCaloriasTotales(caloriasTotales) {
    let color = "red";
    if (caloriasTotales > 400) {
        color = "green";
    }
    else {
        color = "red";
    }
    return color;
}

function calcularCaloriasDiarias(caloriasEjercicio, tiempo) {
    let tiempoEnHoras = tiempo / 60;
    let caloriasDiarias = caloriasEjercicio * tiempoEnHoras;

    return caloriasDiarias;
}

function mostrarResultados(caloriasPorDia, caloriasTotales) {
    const resultado = document.getElementById("resultadoCaloriasTotal");
    resultado.textContent = "Total de calorías gastadas en la semana: " + caloriasTotales;

    // Mostrar calorías por día
    for (let i = 0; i < caloriasPorDia.length; i++) {
        resultado.textContent += "\nCalorías gastadas en el día " + (i + 1) + ": " + caloriasPorDia[i];
    }

    // Cambiar color del total
    resultado.style.color = (caloriasTotales > 400) ? "green" : "red";
}