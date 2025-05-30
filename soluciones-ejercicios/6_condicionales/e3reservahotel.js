function calcularPrecioValidar() {
    let formulario = document.getElementById('formularioReserva');
    
    // Validar el formulario
    if (formulario.checkValidity()) {
         calcularPrecio();
    }
    else {
        document.getElementById('resultado').textContent = "Por favor, completa todos los campos obligatorios.";
       
    }

}

function calcularPrecio() {
    //guardamos los datos
    const tipoHabitacion = document.getElementById('tipoHabitacion').value;
    const numeroNoches = parseInt(document.getElementById('numeroNoches').value);

    //ocultamos el formulario
    let formulario = document.getElementById('formularioReserva');
    formulario.style.display = 'none';


    // Precios por tipo de habitación
    let precioPorNoche;
    if (tipoHabitacion === "familiar") {
        precioPorNoche = 100;
    } else if (tipoHabitacion === "doble") {
        precioPorNoche = 80;
    } else if (tipoHabitacion === "individual") {
        precioPorNoche = 50;
    }
    //calculamos el precio total
    let precioTotal = precioPorNoche * numeroNoches;
    
    //mostramos el precio total
    let mensaje = "Total " + precioTotal;
    // Aplicar descuento si se han elegido más de 5 noches

    if (numeroNoches > 5) {
        let  descuento = precioTotal * 0.2; 
        let precioDescuento = precioTotal - descuento;
        //Agregamos al mensaje el descuento.
        mensaje += " Descuento 20% aplicado: "+ descuento + " Precio Final " + precioDescuento;
    }

    document.getElementById("resultado").textContent = mensaje;
}


