function calcularCaloriasValidar() {
    const formulario = document.getElementById('formularioCalorias');
    
    // Validar el formulario
    if (formulario.checkValidity()) {
        calcularCalorias();
    } else {
        document.getElementById('resultado').textContent = "Por favor, completa todos los campos con valores válidos.";
    }
}

function calcularCalorias() {
    // Obtener los valores de los campos
    const desayuno = document.getElementById('desayuno').valueAsNumber;
    const almuerzo = document.getElementById('almuerzo').valueAsNumber;
    const cena = document.getElementById('cena').valueAsNumber;

    // Calcular el total de calorías
    const totalCalorias = calcularTotalCalorias(desayuno, almuerzo, cena);
 
    // Mostrar el resultado con el mensaje correspondiente
    mostrarResultado(totalCalorias);
}

function calcularTotalCalorias(desayuno, almuerzo, cena) {
    // Calcular el total de calorías
    return desayuno + almuerzo + cena;
}

function mostrarResultado(totalCalorias) {
    let mensaje = "Calorias consumidas " + totalCalorias;
    let color;

    // Determinar el mensaje y color basado en el total de calorías
    if (totalCalorias > 2500) {
        mensaje += "Has superado tu límite diario";
        color = "red";
    } else if (totalCalorias >= 1500 && totalCalorias <= 2500) {
        mensaje += "Estás en el rango saludable";
        color = "green";
    } else {
        mensaje += "Has consumido pocas calorías";
        color = "blue";
    }

    // Mostrar el mensaje con el color adecuado
    document.getElementById('resultado').textContent = mensaje;
    document.getElementById('resultado').style.color = color;
}
