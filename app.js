let amigos = [];
let listaSorteados = [];
let amigoSorteado = 0;

function agregarAmigo() {
    let nombreAmigos = document.getElementById("amigo").value;
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (nombreAmigos === "") {
        alert("Por favor, ingrese un nombre.");
    } else if (amigos.includes(nombreAmigos)) {
        alert('Ese nombre ya fue ingresado, por favor ingresa un nombre distinto');
    } else if (!regex.test(nombreAmigos)) {
        alert('Por favor, ingresa un nombre válido. No se permiten números ni símbolos');

    } else {
        amigos.push(nombreAmigos); // Agregar el nombre al array
    }

    limpiarCaja('amigo');
    listarAmigos();
    return;
}


function listarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
    return;
}

function sortearAmigo() {
    let sorteo = document.getElementById('resultado');
    sorteo.innerHTML = '';


    if (amigos.length === 0) {
        alert("no hay amigos en la lista para sortear");
    } else {

        amigoSorteado = amigos[IndiceAleatorio()];

        if (amigos.length === listaSorteados.length) {
            alert('Todos los amigos han sido sorteados, inicie de nuevo')
            reiniciarSorteo();
        } else {

            //mientras en la lista de sorteados este incluido el amigo sorteado 
            // accedemos para obtnener otro amigo sorteado
            while (listaSorteados.includes(amigoSorteado)) {
                amigoSorteado = amigos[IndiceAleatorio()];
            }


            let sorteado = (`El amigo secreto sorteado es: ${amigoSorteado}`);
            let li = document.createElement('li');
            li.textContent = sorteado
            sorteo.appendChild(li);
            listaSorteados.push(amigoSorteado);
        }

        let listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = '';

    }
    return;
}


function IndiceAleatorio() {
    let aleatorio = Math.floor(Math.random() * amigos.length);
    return aleatorio;
}

function limpiarCaja(elemento) {
    document.getElementById(elemento).value = '';
    return;
}

function reiniciarSorteo() {
    amigos = [];         //Limpiar la lista de amigos
    listaSorteados = [];    // Limpiar la lista de sorteados

    // Limpiar la interfaz para que quede vacía
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    let sorteoResultado = document.getElementById('resultado');
    sorteoResultado.innerHTML = '';
    return;
}



