function mostrarDatosFormulario() {
    //Obtenemos los valores del formulario y los guardamos en variables
    //Obtener valor de input numerico
    let edad = document.getElementById("edad").valueAsNumber;
    //Obtener los valores del select
    let color = document.getElementById("color").value;

    //Mostrar mensaje con los datos
    document.getElementById("datosformulario").textContent = "Datos del formulario, edad " + edad + " color: " + color;

    //Ocultar el formulario despues de enviar
    document.getElementById("formulariodatos").style.display = "none";
}

function cambiarColor() {
    //Obtenemos el color del elemento select
    let color = document.getElementById("color").value;
    //Obtenemos el elemento parrafo y cambiamos el color
    document.getElementById("parrafo").style.color = color;
}