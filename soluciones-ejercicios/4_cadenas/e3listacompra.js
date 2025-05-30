// Almacena una lista de la compra en una cadena separadas por comas
let listaCompra = "leche, pan, manzana, huevo, arroz";

// 1. Muestra la longitud de la cadena que contiene la compra
let longitudLista = listaCompra.length;
document.write("Longitud de la cadena de la compra: " + longitudLista + "<br>");

// 2. Muestra la lista de la compra en mayúsculas
let listaCompraMayusculas = listaCompra.toUpperCase();
document.write("Lista de la compra en mayúsculas: " + listaCompraMayusculas + "<br>");

// 3. Muestra la lista de la compra en minúsculas
let listaCompraMinusculas = listaCompra.toLowerCase();
document.write("Lista de la compra en minúsculas: " + listaCompraMinusculas + "<br>");

// 4. Muestra true si la lista contiene la palabra "manzana"
let contieneManzana = listaCompra.includes("manzana");
document.write("¿La lista contiene la palabra 'manzana'? " + contieneManzana + "<br>");

// 5. Reemplaza un artículo de la compra por “lechuga”
let nuevaListaCompra = listaCompra.replace("huevo", "lechuga");
document.write("Nueva lista de la compra: " + nuevaListaCompra + "<br>");
