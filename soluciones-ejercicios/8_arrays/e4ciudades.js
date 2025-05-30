function verCiudadValidar() {
    let formulario = document.getElementById("ciudad");
    if (formulario.value) {
        verCiudad();
    } else {
        document.getElementById("resultado").textContent = "Por favor, introduce una ciudad válida.";
    }
}

function verCiudad() {
    const ciudad = document.getElementById("ciudad").value;
    
    let listaCiudades = obtenerLista(ciudad);

    document.getElementById("resultado").textContent = "Lista Final: " + listaCiudades;

    
}

function obtenerLista(ciudad) {
    const listaCiudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Granada", "Málaga", "Zaragoza", "Alicante", "Córdoba"];
    //pasamos la ciudad a minuscula para comparar
    ciudad = ciudad.toLowerCase();
    // Encontrar la posición de la ciudad en la lista

    if (listaCiudades[0].toLowerCase() === ciudad) {
        // Si está en la posición 1 ordenamos la lista
        listaCiudades.sort();
    } else if (listaCiudades[1].toLowerCase() === ciudad) {
        // Si está en la posición 2, eliminar las 2 últimas ciudades
        listaCiudades.pop();
        listaCiudades.pop();
    
    } else {
        // En cualquier otro caso, agregar la ciudad a la lista
        listaCiudades.push(ciudad);
    }

    return listaCiudades;

}


