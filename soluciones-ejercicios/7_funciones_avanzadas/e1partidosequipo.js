function calcularPuntuacionValidar() {
    const formulario = document.getElementById('formularioPuntuacion');
    
    // Validar el formulario
    if (formulario.checkValidity()) {
        calcularPuntuacion();
        
    } else {
        document.getElementById('resultado').textContent = "Error en el formulario. Por favor, introduce valores válidos en todos los campos.";
    }
}

function calcularPuntuacion(){
    // Obtener los valores de los campos
    const ganados = document.getElementById('ganados').valueAsNumber;
    const perdidos = document.getElementById('perdidos').valueAsNumber;
    const empatados = document.getElementById('empatados').valueAsNumber;

    // Realizar el cálculo y mostrar el resultado
    const puntos = calcularPuntos(ganados, perdidos, empatados);
    document.getElementById('resultado').textContent = "La puntuación final del equipo es: " + puntos + " puntos.";

    let color = colorResultado(puntos);

    document.getElementById('resultado').style.color = color;


}

function calcularPuntos(ganados, perdidos, empatados) {
    // Cálculo de puntos
    let puntosGanados = ganados * 3;
    let puntosEmpatados = empatados * 1;
    let puntosPerdidos = perdidos * 0; 

    let total = puntosGanados + puntosEmpatados + puntosPerdidos;

    return total;
}

function colorResultado(puntos) {
    // devolvemos el color que debe mostrar segun la puntuacion obtenida
    let color = 'blue';
    if (puntos > 20) {
        color = 'green';
    } else if (puntos < 5) {
        color = 'red';
    } else {
        color = 'blue';
    }
    return color;
}
