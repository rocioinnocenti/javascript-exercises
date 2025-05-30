// Variables para las dimensiones de las habitaciones
let largoHabitacion1 = 5.5;
let anchoHabitacion1 = 5;
let largoHabitacion2 = 4.5;
let anchoHabitacion2 = 6;
let largoSalon = 4;
let anchoSalon = 5;
let largoCocina = 5;
let anchoCocina = 3.5;
let largoBano = 3;
let anchoBano = 2.5;

// Calculo de áreas
let areaHabitacion1 = largoHabitacion1 * anchoHabitacion1;
let areaHabitacion2 = largoHabitacion2 * anchoHabitacion2;
let areaSalon = largoSalon * anchoSalon;
let areaCocina = largoCocina * anchoCocina;
let areaBano = largoBano * anchoBano;

// Muestra de áreas de cada habitación
document.write("<p>Área de la Habitación 1: " + areaHabitacion1 + " m²</p>");
document.write("<p>Área de la Habitación 2: " + areaHabitacion2 + " m²</p>");
document.write("<p>Área del Salón: " + areaSalon + " m²</p>");
document.write("<p>Área de la Cocina: " + areaCocina + " m²</p>");
document.write("<p>Área del Baño: " + areaBano + " m²</p>");

// Área total de la casa
let areaTotal = areaHabitacion1 + areaHabitacion2 + areaSalon + areaCocina + areaBano;
document.write("<p>Área total de la casa: " + areaTotal + " m²</p>");

// Número de láminas de parquet necesarias
let areaParquet = areaHabitacion1 + areaHabitacion2 + areaSalon;
let superficieLamina = 0.5;
let laminasParquet = areaParquet / superficieLamina;
document.write("<p>Número de láminas de parquet necesarias: " + laminasParquet + "</p>");

// Número de lozas de granito necesarias
let areaGranito = areaCocina + areaBano;
let superficieLoza = 0.4;
let lozasGranito = areaGranito / superficieLoza;
document.write("<p>Número de lozas de granito necesarias: " + lozasGranito + "</p>");
