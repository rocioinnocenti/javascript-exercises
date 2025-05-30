// Variables para los bocadillos y sus precios
let bocadillosJamon = 10;
let precioJamon = 3.5;

let bocadillosTortilla = 20;
let precioTortilla = 2.5;

let bocadillosTomateAceite = 30;
let precioTomateAceite = 1.75;

// Ventas de la mañana
let ventasMananaJamon = 4;
let ventasMananaTortilla = 10;
let ventasMananaTomateAceite = 15;

let gananciasManana = (ventasMananaJamon * precioJamon) + (ventasMananaTortilla * precioTortilla) + (ventasMananaTomateAceite * precioTomateAceite);

//Calculamos los bocadillos que quedan
bocadillosJamon = bocadillosJamon - ventasMananaJamon;
bocadillosTortilla = bocadillosTortilla - ventasMananaTortilla;
bocadillosTomateAceite = bocadillosTomateAceite - ventasMananaTomateAceite;

document.write("<p>Ganancias de la mañana: " + gananciasManana + " euros</p>");
document.write("<p>Bocadillos de jamón restantes: " + bocadillosJamon + "</p>");
document.write("<p>Bocadillos de tortilla restantes: " + bocadillosTortilla + "</p>");
document.write("<p>Bocadillos de tomate y aceite restantes: " + bocadillosTomateAceite + "</p>");

// Ventas al mediodía
let ventasMediodiaJamon = 3;
let ventasMediodiaTortilla = 5;
let ventasMediodiaTomateAceite = 3;

let gananciasMediodia = (ventasMediodiaJamon * precioJamon) + (ventasMediodiaTortilla * precioTortilla) + (ventasMediodiaTomateAceite * precioTomateAceite);

//Calculamos los bocadillos que quedan
bocadillosJamon = bocadillosJamon - ventasMediodiaJamon;
bocadillosTortilla = bocadillosTortilla - ventasMediodiaTortilla;
bocadillosTomateAceite = bocadillosTomateAceite - ventasMediodiaTomateAceite;

document.write("<p>Ganancias del mediodía: " + gananciasMediodia + " euros</p>");
document.write("<p>Bocadillos de jamón restantes: " + bocadillosJamon + "</p>");
document.write("<p>Bocadillos de tortilla restantes: " + bocadillosTortilla + "</p>");
document.write("<p>Bocadillos de tomate y aceite restantes: " + bocadillosTomateAceite + "</p>");

// Ventas a la tarde
let ventasTardeJamon = 2;
let ventasTardeTortilla = 4;
let ventasTardeTomateAceite = 8;

let gananciasTarde = (ventasTardeJamon * precioJamon) + (ventasTardeTortilla * precioTortilla) + (ventasTardeTomateAceite * precioTomateAceite);

//Calculamos los bocadillos que quedan
bocadillosJamon = bocadillosJamon - ventasTardeJamon;
bocadillosTortilla = bocadillosTortilla - ventasTardeTortilla;
bocadillosTomateAceite = bocadillosTomateAceite - ventasTardeTomateAceite;

document.write("<p>Ganancias de la tarde: " + gananciasTarde + " euros</p>");
document.write("<p>Bocadillos de jamón restantes: " + bocadillosJamon + "</p>");
document.write("<p>Bocadillos de tortilla restantes: " + bocadillosTortilla + "</p>");
document.write("<p>Bocadillos de tomate y aceite restantes: " + bocadillosTomateAceite + "</p>");

// Ventas por la noche (50% de descuento). Los bocadillos que quedan por su precio por el 50%
let gananciasNoche = ((bocadillosJamon * precioJamon) + (bocadillosTortilla * precioTortilla) + (bocadillosTomateAceite * precioTomateAceite)) * 0.5;

document.write("<p>Ganancias de la noche: " + gananciasNoche + " euros</p>");

// Ganancia total del restaurante
let gananciaTotal = gananciasManana + gananciasMediodia + gananciasTarde + gananciasNoche;
document.write("<p>Ganancia total del restaurante al final del día: " + gananciaTotal + " euros</p>");
