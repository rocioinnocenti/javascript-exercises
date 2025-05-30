function gatitoPerdido() {
    document.getElementById('mensaje').textContent = 'Gatito perdido';
    document.getElementById('gatito').style.display = 'none';
}

function gatitoEncontrado() {
    document.getElementById('mensaje').textContent = 'Gatito encontrado';
    document.getElementById('gatito').style.display = 'block';
}