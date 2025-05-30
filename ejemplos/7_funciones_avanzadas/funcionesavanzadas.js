function evaluar () {
    //Recogemos los datos del formulario
    let nombre = document.getElementById("nombre").value;
    let nota1 = document.getElementById("nota1").valueAsNumber;
    let nota2 = document.getElementById("nota2").valueAsNumber;
    let nota3 = document.getElementById("nota3").valueAsNumber;
    
    //hacemos el calculo de la nota media llamando a la funcion y guardando el resultado
    let notaMedia = calcularNotaMedia(nota1,nota2,nota3);

    //mensaje si ha aprobado o no
    let mensajeEvaluacion = mensajeEvaluacionFinal(notaMedia);

    //mostramos el resultado
    document.getElementById("mensajeresultado").textContent = "Nota final de " + nombre + " es " + notaMedia + ". El alumno esta " + mensajeEvaluacion;


}

function mensajeEvaluacionFinal (nota) {
    let mensaje = "";
    if(nota >= 5){
        mensaje = "Aprobado";
    }
    else {
        mensaje = "Suspenso";
    }
    return mensaje;

}


function calcularNotaMedia (nota1, nota2, nota3) {

    let media = (nota1+nota2+nota3)/3;

    return media;

}

function evaluarValidar () {
    let formulario = document.getElementById("formularioalumno");

    if(formulario.checkValidity()){
        evaluar();
    }
    else {
        document.getElementById("mensajeresultado").textContent = "Error en el formulario";
    }
}