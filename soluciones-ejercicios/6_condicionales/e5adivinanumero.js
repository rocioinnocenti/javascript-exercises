function adivinarNumeroValidar() {
    const formulario = document.getElementById('formularioAdivinanza');
    
    // Validar el formulario
    if (formulario.checkValidity()) {
        adivinarNumero();
    } else {
        document.getElementById('resultado').textContent = "Error en el formulario.";
    }
}


function adivinarNumero() {
    // Ocultamos el formulario
    document.getElementById('formularioAdivinanza').style.display = 'none';

    //guardamos el numero introducido
    const numeroIntroducido = parseInt(document.getElementById('numero').value);
    // Número ganador
    const numeroGanador = 4;

    // Comprobamos si el usuario adivinó el número
    if (numeroIntroducido === numeroGanador) {
        document.getElementById('resultado').textContent = "¡Felicidades! Has adivinado el número.";
    } else {
        document.getElementById('resultado').textContent = "Lo siento, no has adivinado.";
    }
}

