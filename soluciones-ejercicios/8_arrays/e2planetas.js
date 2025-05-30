function verPlanetaValidar() {
    let formulario = document.getElementById("formularioplanetas");
   

    if (formulario.checkValidity()) {
        verPlaneta();
    } else {
        document.getElementById("resultado").textContent = "Número inválido, introduce un número entre 1 y 9.";
    }
}



function verPlaneta() {
    //obtenemos el numero del planeta
    let numero = document.getElementById("numero").valueAsNumber;
    //llamamos a la funcion que devuelve el planeta segun su posicion
    let planeta = obtenerPlaneta(numero);
    //mostramos el resultado
    document.getElementById("resultado").textContent = "El planeta correspondiente es: " + planeta;
}

function obtenerPlaneta(numero) {
    const listaPlanetas = ["Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno", "Pluton"];
    const planeta = listaPlanetas[numero - 1]; // Restamos 1 para ajustar el índice (0-8)
    return planeta;
}
