
//Declarar variables con cadenas
let saludo = "Hola mundo";
let saludo2 = "Hello world";

//Concatenar cadenas
let saludoCompleto = saludo + " " + saludo2;

//Mostrar cadenas
document.write("Saludo completo " + saludoCompleto + "</br>");


//Mostrar la longitud de una cadena
document.write("Longitud de la cadena: " + saludoCompleto.length + "</br>");

//Mostrar la cadena en mayuscula

document.write("Saludo en mayusculas: " + saludoCompleto.toUpperCase() + "</br>" );

//Mostrar la cadena en minuscula

document.write("Saludo en minuscula:" + saludoCompleto.toLowerCase() + "</br>");

//Reemplazar texto de una cadena
let despedida = saludoCompleto.replace("Hola", "Adios");
document.write("Saludo con palabra reemplazada " + despedida + "</br>");

//Includes muestra true si la cadena contiene la palabra indicada o false sino. Distingue mayusculas y minusculas.

document.write("El saludo completo tiene la palabra mundo?" + saludoCompleto.includes("mundo")  + "</br>");
document.write("El saludo completo tiene la palabra MUNDO?" + saludoCompleto.includes("MUNDO") + "</br>");
document.write("El saludo completo tiene la palabra Marta?" + saludoCompleto.includes("marta") + "</br>");




