function mostrarDestino() {
    const color = document.getElementById('colorSelect').value;
    let mensaje = "";

    if (color === "rojo") {
        mensaje = "El rojo es el color de la pasión y la energía. ¡Hoy será un día lleno de acción y emoción! No temas a los desafíos, saldrás victorioso.";
    } else if (color === "verde") {
        mensaje = "El verde representa la esperanza y el crecimiento. Algo nuevo y positivo está por florecer en tu vida. Confía en los pequeños cambios que te acercan a tus metas.";
    } else if (color === "azul") {
        mensaje = "El azul simboliza la calma y la serenidad. Hoy estarás rodeado de tranquilidad y equilibrio. Aprovecha este momento para reflexionar y renovar tu energía.";
    } else if (color === "amarillo") {
        mensaje = "El amarillo es el color de la felicidad y el optimismo. ¡Prepárate para un día lleno de alegría y buenas noticias! Alguien cercano te sorprenderá de forma positiva.";
    } else if (color === "morado") {
        mensaje = "El morado evoca la sabiduría y la creatividad. Hoy te sentirás inspirado y lleno de ideas. Es el momento ideal para dejar volar tu imaginación y tomar decisiones importantes.";
    } else {
        mensaje = "Por favor, selecciona un color válido.";
    }

    document.getElementById('resultado').textContent = mensaje;
}
