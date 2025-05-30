function cifrar() {
    let palabra = document.getElementById('palabra').value.toLowerCase();
    
    // Mostrar la palabra en minúsculas
    document.getElementById('resultado').textContent = "Palabra a cifrar: " + palabra + "\n";

    // Reemplazar vocales por los números
    let palabraCifrada = palabra.replace("a", "4");
    palabraCifrada = palabraCifrada.replace("e", "3");
    palabraCifrada = palabraCifrada.replace("i", "1");
    palabraCifrada = palabraCifrada.replace("o", "0");
    palabraCifrada = palabraCifrada.replace("u", "5");

    // Convertir la palabra cifrada a mayúsculas
    palabraCifrada = palabraCifrada.toUpperCase();

    // Mostrar resultado
    document.getElementById('resultado').textContent = "Palabra cifrada: " + palabraCifrada;;
}
