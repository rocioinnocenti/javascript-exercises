//Crear una funcion
function saludar() {
    //obtenemos el elemento que queremos modificar del html
    document.getElementById("parrafo").textContent = "Hola Mundo"
    
}

function despedir() {
    document.getElementById("parrafo").textContent = "Adios"
}

function cambiarColor() {
    //obtenemos el elemento del que queremos cambiar el color por id. Podeis ponerle el color en ingles, o en numero hexadecimal
    document.getElementById("parrafo").style.color = "red"
}

function ocultar() {
    //obtenemos el elemento con id parrafo, y cambiamos display a none para ocultarlo
    document.getElementById("parrafo").style.display = "none"
}

function mostrar() {
    //obtenemos el elemento con id parrafo y cambiamos display a block para mostrarlo
    document.getElementById("parrafo").style.display = "block"
}