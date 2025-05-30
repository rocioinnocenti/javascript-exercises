function calcularPrecioAlquilerValidar() {
    const formulario = document.getElementById('formularioAlquiler');
    
    // Validar el formulario
    if (formulario.checkValidity()) {
        calcularPrecioAlquiler();
    } else {
        document.getElementById('resultado').textContent = "Por favor, completa todos los campos obligatorios.";
    }
}

function calcularPrecioAlquiler() {
    // Guardamos los datos
    const tipoCoche = document.getElementById('tipoCoche').value;
    const numeroDias = parseInt(document.getElementById('numeroDias').value);
    const tieneConductorAdicional = document.getElementById('conductorAdicional').checked;
    
    // Ocultamos el formulario
    const formulario = document.getElementById('formularioAlquiler');
    formulario.style.display = 'none';

    // Precios por tipo de coche
    let precioPorDia;
    if (tipoCoche === "economico") {
        precioPorDia = 30;
    } else if (tipoCoche === "familiar") {
        precioPorDia = 50;
    } else if (tipoCoche === "lujo") {
        precioPorDia = 100;
    }

    // Coste adicional por conductor
    let costeConductor = 0;
    if (tieneConductorAdicional) {
        costeConductor = 10;
    }
    
    // Calculamos el precio total
    let precioTotal = (precioPorDia + costeConductor) * numeroDias;
    
    // Aplicar descuento si se han alquilado más de 7 días
    if (numeroDias > 7) {
        let descuento = precioTotal * 0.10; // 10% de descuento
        precioTotal = precioTotal - descuento; // Aplicar descuento
    }

    // Mostramos el precio final
    document.getElementById("resultado").textContent = "El precio total del alquiler de coche " + tipoCoche + " durante " + numeroDias + " es: " + precioTotal + " euros.";
}
