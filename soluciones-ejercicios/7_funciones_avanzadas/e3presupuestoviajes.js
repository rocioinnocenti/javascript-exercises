function calcularViajeValidar() {
    const formulario = document.getElementById('formularioViaje');
    
    // Validar el formulario
    if (formulario.checkValidity()) {
        calcularViaje();
    } else {
        document.getElementById('resultado').textContent = "Por favor, completa todos los campos con valores válidos.";
    }
}

function calcularViaje() {
    // Obtener los valores de los campos
    const destino = document.getElementById('destino').value;
    const dias = document.getElementById('dias').valueAsNumber;
    const personas = document.getElementById('personas').valueAsNumber;

    // Realizar el cálculo del precio total
    let precioDestino = obtenerPrecioDestino(destino);
    const precioFinal = calcularPrecioFinal(precioDestino,dias,personas);

    // Mostrar el resultado
    document.getElementById('resultado').textContent = "El precio total del viaje es: " + precioFinal + " euros.";
}

function obtenerPrecioDestino(destino, dias, personas) {
    let precioPorDia;

    // Determinar el precio por día según el destino
    if (destino === "mallorca") {
        precioPorDia = 50;
    } else if (destino === "nuevaYork") {
        precioPorDia = 100;
    } else if (destino === "paris") {
        precioPorDia = 80;
    } else if (destino === "londres") {
        precioPorDia = 70;
    }

    return precioPorDia;
}

function calcularPrecioFinal(precio, dias, personas) {
    //para aplicar el descuento del 10% se multiplica por 0.9
    const descuento = 0.9; 
    //calculamos el precio total
    let precioFinal = precio * dias * personas;

    //le aplicamos el descuento si es mayor a 2000 euros
    if (precioFinal > 2000) {
        precioFinal = precioFinal * descuento;
    }
    return precioFinal;
}
