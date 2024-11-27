document.getElementById("miBoton").addEventListener("click", presionarBoton);
const contador = document.getElementById("contador");

function presionarBoton() {
    let valor = parseInt(contador.innerHTML);
    valor++;
    contador.innerHTML = valor;
}

