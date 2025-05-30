function comprobarEdad() {
    //guardamos la edad
    let edad = document.getElementById("edad").valueAsNumber;

    let mensaje = "";
    //Segun la edad, damos un valor u otro al mensaje
    if(edad > 18){
        mensaje = "El usuario tiene mas de 18 años";
    }
    else if (edad === 18) {
        mensaje = "El usuario tiene 18 años";
    }
    else {
        mensaje = "El usuario tiene menos de 18 años";
    }
    //mostramos el mensaje
    document.getElementById("mensajeedad").textContent = mensaje;

}

function adivinar() {
    //creamos una constante con el texto ganador
    const colorganador = "verde";
    //guardamos el valor seleccionado por el usuario en la variable color elegido
    let colorelegido = document.getElementById("colorpremio").value;
    let mensaje = "";
    //comprobamos si el color elegido es igual al ganador o no. Pasamos a mayusculas todos los textos para evitar errores en las comparaciones si tienen mayusculas o minusculas diferentes.
    if(colorelegido.toUpperCase() === colorganador.toUpperCase()) {
        mensaje = "Ha ganado";
    } else {
        mensaje= "Ha perdido";
    }

    document.getElementById("mensajepremio").textContent = mensaje;

}

function comprobarEdadValidada () {
    //obtenemos el formulario
    let formulario = document.getElementById("formularioedad");

    if(formulario.checkValidity()){
        comprobarEdad();
    }
    else {
        document.getElementById("mensajeedad").textContent = "Error edad invalida";
    }
}

