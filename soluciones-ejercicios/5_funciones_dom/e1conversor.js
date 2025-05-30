
function convertirALibras() {
    let euros = document.getElementById("euros").valueAsNumber; // Obtiene el valor como número
    const tasaLibras = 0.85;  // Por ejemplo, 1 euro = 0.85 libras
    let libras = euros * tasaLibras;
    document.getElementById("resultado").textContent = euros + " euros son " + libras + " libras.";
}

function convertirADolares() {
    let euros = document.getElementById("euros").valueAsNumber; // Obtiene el valor como número
    const tasaDolares = 1.10;  // Por ejemplo, 1 euro = 1.10 dólares
    let dolares = euros * tasaDolares;
    document.getElementById("resultado").textContent = euros + " euros son " + dolares + " dólares.";
}
