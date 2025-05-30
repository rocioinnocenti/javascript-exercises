// Almacena una dirección de correo electrónico en una variable
let correo = "usuario@ejemplo.com";

// 1. Muestra la longitud de la dirección de correo
let longitudCorreo = correo.length;
document.write("Longitud de la dirección de correo: " + longitudCorreo + "<br>");

// 2. Muestra la dirección de correo en mayúsculas
let correoMayusculas = correo.toUpperCase();
document.write("Dirección de correo en mayúsculas: " + correoMayusculas + "<br>");

// 3. Muestra la dirección de correo en minúsculas
let correoMinusculas = correo.toLowerCase();
document.write("Dirección de correo en minúsculas: " + correoMinusculas + "<br>");

// 4. Reemplaza el dominio del correo por "email.es"
let nuevoCorreo = correo.replace("@ejemplo.com", "@email.es");
document.write("Nuevo correo: " + nuevoCorreo + "<br>");
