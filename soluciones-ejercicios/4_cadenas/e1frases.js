// Almacena una frase en una variable
let frase = "El aprendizaje es un viaje emocionante.";

// 1. Muestra la longitud de la frase
let longitudFrase = frase.length;
document.write("Longitud de la frase: " + longitudFrase+ "<br>");

// 2. Muestra la frase en mayúsculas
let fraseMayusculas = frase.toUpperCase();
document.write("Frase en mayúsculas: " + fraseMayusculas+ "<br>");

// 3. Muestra la frase en minúsculas
let fraseMinusculas = frase.toLowerCase();
document.write("Frase en minúsculas: " + fraseMinusculas+ "<br>");

// 4. Reemplaza una palabra en la frase por otra
let nuevaFrase = frase.replace("emocionante", "increíble");
document.write("Nueva frase: " + nuevaFrase + "<br>");
