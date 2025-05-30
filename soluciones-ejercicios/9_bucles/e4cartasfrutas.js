

function jugar() {

    let aciertos = 0;
    for (let i = 1; i <= 5; i++) {
        //obtenemos la fruta seleccionada
        frutaElegida = document.getElementById("pos" + i).value;
        //comprobamos si la fruta elegida esta en esa posicion
        let acierto = comprobarSolucion(i, frutaElegida);
        //sumamos los aciertos al total
        aciertos += acierto;
        //mostramos u ocultamos la fruta de esa posicion segun si ha acertado o no
        let visibilidad = visibilidadFruta(acierto);
        document.getElementById("imagen" + i).style.display = visibilidad;

    }

    //Mostramos un mensaje u otro segun el numero de aciertos
    let mensaje = mensajeFinal(aciertos);
    document.getElementById("resultados").textContent = mensaje;


}

function visibilidadFruta(acierto) {
    //si ha acertado ponemos la fruta visible, sino se deja oculta
    let visibilidad = 'hidden';
    if (acierto === 1) {
        visibilidad = 'block';
    }
    else {
        visibilidad = 'hidden';
    }
    return visibilidad;
}

function mensajeFinal(aciertos) {
    // si acierta todas el mensaje es ha ganado, y sino sigue intentando
    let mensaje = "";
    if (aciertos === 5) {
        mensaje = "¡HA GANADO!";
    } else {
        mensaje = "INTENTE DE NUEVO.";
    }
    return mensaje;
}



function comprobarSolucion(posicion, frutaElegida) {
    // Respuestas correctas
    const frutas = ["manzana", "banana", "naranja", "pera", "fresa"];
    let acierto = 0;
    if (frutas[posicion - 1] === frutaElegida) {
        acierto = 1;
    }
    else {
        acierto = 0;
    }
    return acierto;
}