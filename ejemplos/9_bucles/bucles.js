function evaluar(id) {
    //guardamos en variables los valores del formulario
    let nombre = document.getElementById("nombrealumno" + id).value;
    let notaexamen = document.getElementById("notaexamen" + id).valueAsNumber;
    let notaproyecto = document.getElementById("notaproyecto" + id).valueAsNumber;

    //calculamos la nota final
    let notaFinal = calcularMedia(notaexamen, notaproyecto);

    //mostramos la nota final
    document.getElementById("notafinalalumno" + id).textContent = nombre + " Nota final " + notaFinal;

}

function evaluarTodos() {
    //Evaluar desde el alumno 1 al alumno 3
    for(let i=0 ; i < 3 ; i++) {
        evaluar(i+1);
    }

}

function calcularMedia(notaexamen, notaproyecto) {
    let notaFinal = (notaexamen + notaproyecto) / 2;

    return notaFinal;
}