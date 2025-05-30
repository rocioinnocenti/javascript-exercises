function sumar() {
    //guardamos los valores del formulario
    let numero1 = document.getElementById("numero1").valueAsNumber;
    let numero2 = document.getElementById("numero2").valueAsNumber;

      //hacemos el calculo y lo mostramos
    let resultado = numero1 + numero2;
    document.getElementById("resultado").textContent = "Resultado de la suma: " + resultado;

     //Cambiamos el color del boton
     document.getElementById("botonsumar").style.color = "blue"; 
}

function restar() {
    //guardamos los valores del formulario
    let numero1 = document.getElementById("numero1").valueAsNumber;
    let numero2 = document.getElementById("numero2").valueAsNumber;

      //hacemos el calculo y lo mostramos
    let resultado = numero1 - numero2;
    document.getElementById("resultado").textContent = "Resultado de la resta: " + resultado;

     //Cambiamos el color del boton
     document.getElementById("botonrestar").style.color = "blue"; 
}

function multiplicar() {
     //guardamos los valores del formulario
    let numero1 = document.getElementById("numero1").valueAsNumber;
    let numero2 = document.getElementById("numero2").valueAsNumber;

    //hacemos el calculo y lo mostramos
    let resultado = numero1 * numero2;
    document.getElementById("resultado").textContent = "Resultado de la multiplicación: " + resultado;

    //Cambiamos el color del boton
    document.getElementById("botonmultiplicar").style.color = "blue"; 
}

function dividir() {
    //guardamos los valores del formulario
    let numero1 = document.getElementById("numero1").valueAsNumber;
    let numero2 = document.getElementById("numero2").valueAsNumber;
    //calculamos la division
    let resultado = numero1 / numero2;
    document.getElementById("resultado").textContent = "Resultado de la división: " + resultado;

    //Cambiamos el color del boton dividir
    document.getElementById("botondividir").style.color = "blue"; 

   
}
