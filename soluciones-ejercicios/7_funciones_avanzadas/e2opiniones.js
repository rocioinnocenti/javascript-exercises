function calcularOpinionValidar() {
    const formulario = document.getElementById('formularioEncuesta');
    
    // Validar el formulario
    if (formulario.checkValidity()) {
        calcularOpinion();
    } else {
        document.getElementById('resultado').textContent = "Por favor, completa todas las preguntas.";
    }
}

function calcularOpinion() {
    // Obtener los valores de las respuestas
    const atencion = parseInt(document.getElementById('atencion').value);
    const calidad = parseInt(document.getElementById('calidad').value);
    const precio = parseInt(document.getElementById('precio').value);

    // Realizar el cálculo
    const mediaPuntos = calcularMediaPuntos(atencion, calidad, precio);

    //obtener la valoracion
    let opinionFinal = obtenerResultado(mediaPuntos);

     // Mostrar el resultado
     document.getElementById('resultado').textContent = "Tu opinión final sobre el servicio es: " + opinionFinal + ".";

}

function calcularMediaPuntos(atencion, calidad, precio) {
    // Calcular la media de los puntos
    let totalPuntos = (atencion + calidad + precio)/3;
    return totalPuntos;
}



function obtenerResultado(mediaPuntos) {
    // Determinar la opinión final basada en la media
    let opinionFinal;
    if (mediaPuntos > 3) {
        opinionFinal = "Muy bueno";
    } else if (mediaPuntos > 2) {
        opinionFinal = "Bueno";
    } else if (mediaPuntos > 1) {
        opinionFinal = "Regular";
    } else {
        opinionFinal = "Malo";
    }

    return opinionFinal;
   
}
