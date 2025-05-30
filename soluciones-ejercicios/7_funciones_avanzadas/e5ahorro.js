function calcularAhorroValidar() {
    const formulario = document.getElementById('formularioAhorro');
    
    // Validar el formulario
    if (formulario.checkValidity()) {
        calcularAhorro();
    } else {
        document.getElementById('resultado').textContent = "Por favor, completa todos los campos con valores válidos.";
    }
}

function calcularAhorro() {
    // Obtener los valores de los campos
    const salario = document.getElementById('salario').valueAsNumber;
    const meses = document.getElementById('meses').valueAsNumber;
    const objetivo = document.getElementById('objetivo').valueAsNumber;

    // Calcular el ahorro mensual y porcentaje de ahorro
    const ahorroMensual = calcularAhorroMensual(objetivo, meses);
    document.getElementById('resultado').textContent = "Debes ahorrar cada mes " + ahorroMensual + " para llegar a tu objetivo ";

    let mensaje = mensajeAhorro(ahorroMensual, salario);

    // Mostrar el resultado con el mensaje correspondiente
    document.getElementById('resultadoAhorro').textContent = mensaje;
}

function calcularAhorroMensual(objetivo, meses) {
    let totalAhorro = objetivo / meses
    return totalAhorro;
}


function mensajeAhorro(ahorroMensual, salario) {
    let porcentajeAhorro = (ahorroMensual / salario) * 100;

    // Determinar el mensaje basado en el porcentaje de ahorro
    if (porcentajeAhorro > 50) {
        mensaje = "Gran ahorro necesario";
    } else if (porcentajeAhorro < 10) {
        mensaje = "Poco ahorro necesario";
    } else {
        mensaje = "Ahorro moderado necesario";
    }

    return mensaje;
}
