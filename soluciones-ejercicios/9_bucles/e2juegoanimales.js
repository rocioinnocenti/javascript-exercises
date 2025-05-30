function animalesValidar() {
    const formulario = document.getElementById("formularioAnimales");
    if (formulario.checkValidity()) {
        animales();
    }
    else {
        document.getElementById("resultado").textContent = "Todos los campos son obligatorios";
    }
}


function animales() {
    //En primer lugar recorremos todos los animales para obtener el habitat elegida. Como hay 5, iremos del 1 al 5
    let aciertosTotales = 0;
    for (let posicion = 1; posicion <= 5; posicion++) {
        //obtenemos el habitat seleccionada por el usuario
        let habitat = document.getElementById("habitat" + posicion).value;
        //Comprobamos si el habitat seleccionada es el correcto segun su posicion
        let acierto = comprobarSolucion(habitat, posicion);
        //sumamos el acierto al total para obtener el numero de aciertos final
        aciertosTotales += acierto;
        //cambiamos el color segun ha acertado o no
        let color = obtenerColor(acierto);
        document.getElementById("animal" + posicion).style.color = color;
    }

    //Mostramos los puntos totales
    document.getElementById("resultado").textContent = "Aciertos: " + aciertosTotales;


}



function comprobarSolucion(habitat, posicion) {
    //Creamos un array con las soluciones. El 1 Leon es Selva, el 2 Ballena es Oceano, y asi con todos
    //Leon, Ballena, Pinguino, Camello, Aguila
    const soluciones = ["Selva", "Mar", "Polo", "Desierto", "Montaña"]
    //Comparamos el habitat elegida con la solucion, que estara en la posicion posicion-1 ya el array empieza en 0
    //Devolvemos 1 punto si ha acertado y 0 si no ha acertado.
    if (soluciones[posicion - 1] === habitat) {
        acierto = 1;
    }
    else {
        acierto = 0;
    }
    return acierto;
}

function obtenerColor(acierto) {
    //si ha acertado, acierto es 1, y el color seria verde, si no ha acertado, acierto es 0 y el color seria rojo
    let color = "red";
    if (acierto === 1) {
        color = "green";
    }
    else {
        color = "red";
    }

    return color;

}