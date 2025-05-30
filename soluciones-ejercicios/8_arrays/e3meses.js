function verMesValidar() {
    let formulario = document.getElementById("numero");
    
    if (formulario.checkValidity()) {
        verMes();
    } else {
        document.getElementById("resultado").textContent = "Número inválido, introduce un número entre 1 y 12.";
    }
}


function verMes() {
    // Obtenemos el número del mes
    let numero = document.getElementById("numero").valueAsNumber;
    // Llamamos a la función que devuelve el mes según su posición
    let mes = obtenerMes(numero);
    // Mostramos o no un mensaje especial segun el mes
    let mensajeEspecial = obtenerMensajeEspecial(mes);

    document.getElementById("resultado").textContent = "El mes correspondiente es: " + mes + mensajeEspecial;
}


function obtenerMensajeEspecial(mes) {

    let mensajeEspecial = "";
    // Si el mes elegido es Junio, mostramos el mensaje especial, sino se queda vacio
    if (mes === "Junio") {
        mensajeEspecial = " EL MEJOR MES";
    }
    return mensajeEspecial;
    
}

function obtenerMes(numero) {
    const listaMeses = [
        "Enero", 
        "Febrero", 
        "Marzo", 
        "Abril", 
        "Mayo", 
        "Junio", 
        "Julio", 
        "Agosto", 
        "Septiembre", 
        "Octubre", 
        "Noviembre", 
        "Diciembre"
    ];
    const mes = listaMeses[numero - 1]; // Restamos 1 para ajustar el índice (0-11)
    return mes;
}

