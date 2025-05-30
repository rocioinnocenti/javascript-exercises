// Declaro las variables con los datos sobre mi película favorita
let titulo = "El Señor de los Anillos";
let director = "Peter Jackson";
let anoLanzamiento = 2001;
let genero = "Fantasía";
let duracion = 178; // minutos
let tienePremios = true;

// Muestro los datos en español
document.write("Título de la película: " + titulo + "<br>");
document.write("Director de la película: " + director + "<br>");
document.write("Año de lanzamiento: " + anoLanzamiento + "<br>");
document.write("Género: " + genero + "<br>");
document.write("Duración: " + duracion + " minutos<br>");
document.write("¿Tiene premios?: " + tienePremios + "<br><br>");

// Cambio los valores a inglés
titulo = "The Lord of the Rings";
director = "Peter Jackson";
anoLanzamiento = 2001;
genero = "Fantasy";
duracion = 178;
tienePremios = true;

// Muestro los datos en inglés
document.write("Movie Title: " + titulo + "<br>");
document.write("Director: " + director + "<br>");
document.write("Release Year: " + anoLanzamiento + "<br>");
document.write("Genre: " + genero + "<br>");
document.write("Duration: " + duracion + " minutes<br>");
document.write("Has Awards?: " + tienePremios + "<br>");
