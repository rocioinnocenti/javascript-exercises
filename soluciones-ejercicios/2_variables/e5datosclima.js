// Declaro las variables con los datos del clima de mi ciudad
let temperaturaActual = 28; // en grados Celsius
let humedad = 60; // en porcentaje
let probabilidadLluvia = 20; // en porcentaje
let esDeDia = true;
let velocidadViento = 15; // en km/h

// Muestro los datos del clima en mi ciudad
document.write("Temperatura actual en mi ciudad: " + temperaturaActual + "°C<br>");
document.write("Humedad: " + humedad + "%<br>");
document.write("Probabilidad de lluvia: " + probabilidadLluvia + "%<br>");
document.write("¿Es de día?: " + esDeDia + "<br>");
document.write("Velocidad del viento: " + velocidadViento + " km/h<br><br>");

// Cambio los valores con la información del clima en Londres
temperaturaActual = 12; // en grados Celsius
humedad = 80; // en porcentaje
probabilidadLluvia = 70; // en porcentaje
esDeDia = false;
velocidadViento = 25; // en km/h

// Muestro los datos del clima en Londres
document.write("Temperatura actual en Londres: " + temperaturaActual + "°C<br>");
document.write("Humedad en Londres: " + humedad + "%<br>");
document.write("Probabilidad de lluvia en Londres: " + probabilidadLluvia + "%<br>");
document.write("¿Es de día en Londres?: " + esDeDia + "<br>");
document.write("Velocidad del viento en Londres: " + velocidadViento + " km/h<br>");
