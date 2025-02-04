let amigos = [];

function agregarAmigo() {
    nombreAmigos = document.getElementById("amigo").value;
    console.log(nombreAmigos);
    if (nombreAmigos === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(nombreAmigos); // Agregar el nombre al array
    console.log(amigos);
    limpiarCaja();
    listarAmigos();
}

function limpiarCaja() {
    let valorCaja = document.querySelector("#amigo").value = "";
}

function listarAmigos() {
    listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("no hay amigos en la lista para sortear");
        return;
    }

    let IndiceAleatorio = Math.floor(Math.random() * amigos.length)
    amigoSorteado = amigos[IndiceAleatorio];
    document.getElementById("resultado").innerHTML = `🎉 El amigo secreto sorteado es: ${amigoSorteado}🎉`;
}
