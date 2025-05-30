function jugar(id) {
    //recoger el numero del formulario
    let numero = document.getElementById("numero" + id).valueAsNumber;

    let numAcierto = comprobarPremio(numero, id);

    document.getElementById("resultado" + id).textContent = "Aciertos " + numAcierto;

    return numAcierto;

}

function calcularTotalAciertos() {
    let numAciertos = 0;
    for (let i = 0; i < 5; i++) {
        numAciertos += jugar(i);
    }
    return numAciertos;

}

function jugarValidar() {
    let formulario = document.getElementById("formularioquiniela");
    if (formulario.checkValidity()) {
        let numAciertos = calcularTotalAciertos();
        document.getElementById("resultadofinal").textContent = "Total aciertos: " + numAciertos;
    }
    else {
        document.getElementById("resultadofinal").textContent = "Introduce un valor correcto";
    }

}

function comprobarPremio(numero, id) {
    let ganador = [3, 1, 2, 4, 4];
    let acierto = 0;
    if (numero === ganador[id]) {
        acierto = 1;
    }
    else {
        acierto = 0;
    }
    return acierto;
}