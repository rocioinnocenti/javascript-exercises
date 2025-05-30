// Variables para los precios
let precioCamiseta = 10;
let precioSudadera = 20.5;
let precioGorra = 5.5;

// Cliente 1. 2 Camisetas y 1 Gorra
let totalCliente1 = (2 * precioCamiseta) + precioGorra;

document.write("Total Cliente 1: " + totalCliente1 + " euros<br><br>");

// Cliente 2. 1 Camiseta y 5 Gorras
let totalCliente2 = (1 * precioCamiseta) + (5 * precioGorra);

document.write("Total Cliente 2 sin descuento: " + totalCliente2 + " euros<br>");

// Aplicar descuento del 20%
let descuento = totalCliente2 * 0.20;
let totalConDescuento = totalCliente2 - descuento;

document.write("Descuento del 20%: " + descuento + " euros<br>");
document.write("Total Cliente 2 con descuento: " + totalConDescuento + " euros<br><br>");

// Cliente 3. 1 Camiseta, 2 Sudaderas y 3 Gorras
let totalCliente3 = (1 * precioCamiseta) + (2 * precioSudadera) + (3 * precioGorra);

document.write("Total Cliente 3: " + totalCliente3 + " euros<br>");
