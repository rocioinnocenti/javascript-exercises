function listaCompra() {
    //Crear una lista
    let listaCompra = ["Huevo", "Cebolla", "Aguacate", "Zanahoria"];

    //Mostrar la lista
    document.getElementById("listacompra").textContent = "Lista: " + listaCompra;

    //Agregar elemento a la lista
    listaCompra.push("Tomate");

    //Mostrar la lista
    document.getElementById("listacompra").textContent += " Agregar a la lista: " + listaCompra;

        //Obtener la longitud de la lista
        let longitud2 = listaCompra.length;
        document.getElementById("listacompra").textContent += " Longitud: " + longitud2;


    //Eliminar ultimo elemento de la lista
    listaCompra.pop();
    document.getElementById("listacompra").textContent += " Eliminar de la lista: " + listaCompra;

    //Obtener la longitud de la lista
    let longitud = listaCompra.length;
    document.getElementById("listacompra").textContent += " Longitud: " + longitud;

    //Ordenar la lista de A a Z. Si fueran numeros seria de menor a mayor.

    listaCompra.sort();
     //Mostrar la lista
     document.getElementById("listacompra").textContent += " Lista Ordenada: " + listaCompra;

     //Mostrar el segundo elemento de la lista. Posicion 0, 1, 2 ....
     let segundo = listaCompra[1];
     document.getElementById("listacompra").textContent += " Segundo elemento lista: " + segundo;




}