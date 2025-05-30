function verAnimalValidar() {
    let formulario = document.getElementById("formularioAnimal");
    if (formulario.checkValidity()){
        verAnimal();
    }
    else {
        document.getElementById("resultado").textContent = "Formulario invalido";
    }
}


function verAnimal() {
    //obtenemos la posicion
    let posicion = document.getElementById("numero").valueAsNumber;
    //obtenemos el animal elegido del array
    let animalElegido = obtenerAnimal(posicion);
    //obtenemos el color segun el animal elegido
    let color = obtenerColorAnimal(animalElegido);

    //mostramos el mensaje y el color
    document.getElementById("resultado").textContent = "Animal elegido: " + animalElegido;
    document.getElementById("resultado").style.color = color;

}

function obtenerAnimal (posicion) {
    const listaAnimales = ["Gato", "Jirafa", "Elefante", "Cocodrilo", "Leon", "Buey", "Ballena", "Pez Globo", "Caballo", "Armadillo"];
    //como el array empieza en 0, debemos restarle 1 a la posicion. Ya que la posicion 1, corresponde a 0 en el array y asi sucesivamente.
    let animalElegido = listaAnimales[posicion-1];

    return animalElegido;

}

function obtenerColorAnimal(animalElegido) {
    let color = 'blue';
    //pasamos a minuscula para comparar con las letras da igual si esta en mayuscula o minuscula la palabra.
    animalElegido = animalElegido.toLowerCase();

    if (animalElegido.includes('a')) {
        color = 'blue';
    }
    else if (animalElegido.includes('b')){
        color='green';
    }
    else {
        color = 'orange';
    }

    return color;
}