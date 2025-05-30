function mostrarDatosMascota() {
    // Obtener los valores del formulario
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").valueAsNumber;
    let tipo = document.getElementById("tipo").value;

    // Calcular la edad en meses
    let edadEnMeses = edad * 12;
  
    // Mostrar los datos de la mascota
    document.getElementById("resultado").textContent = 
        "Nombre de la mascota: " + nombre.toUpperCase() + 
        ", Tipo: " + tipo.toUpperCase() + 
        ", Edad en meses: " + edadEnMeses + " meses.";

    // Ocultar el formulario
    document.getElementById("formularioMascota").style.display = "none";
    
    // Mostrar el resultado
    document.getElementById("resultado").style.display = "block";
}
