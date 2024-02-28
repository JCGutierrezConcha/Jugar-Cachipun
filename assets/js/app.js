
const msgGanaUsuario = "Felicitaciones, ganaste este juego";
const msgGanaMaq = "Que pena, perdiste este juego";
const msgEmpate = "Esta vez es un empate";
let inputCantidadJuegos = 0;
let cantidadJuegosRealizados = 0;
let cantidadJuegosRestantes = 0;
let juegosGanados = 0;
let juegosEmpatados = 0;
let juegosPerdidos = 0;


function ingresoCantidadJuegos() {
    let inputJuegos = document.getElementById("cantidad_juegos");
    inputCantidadJuegos = parseInt(inputJuegos.value);
    cantidadJuegosRestantes = inputCantidadJuegos - cantidadJuegosRealizados;
    if ((inputCantidadJuegos != NaN) && (inputCantidadJuegos > 0)) {
        asignarTextoElemento("total_juegos", "Cantidad de juegos ingresada!!");
        asignarTextoElemento("muestra_total_cant_juegos", inputCantidadJuegos);
        asignarTextoElemento("muestra_cant_juegos_realizados", cantidadJuegosRealizados);
        asignarTextoElemento("muestra_cant_juegos_restantes", cantidadJuegosRestantes);

        return inputCantidadJuegos;
    }
    else {
        asignarTextoElemento("total_juegos", "Ingrese un número entero mayor a cero!!");
    }
}

function juegoUsuario() {
    let ele = document.getElementsByName('jugada');
    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            return ele[i].value;
        }
    }
}

function juegoMaquina() {
    const arrJugadas = ['Piedra', 'Papel', 'Tijera'];
    let randomMaq = Math.floor(Math.random() * arrJugadas.length);
    return arrJugadas[randomMaq];
}

function resultadoJuego(usuario, maq) {
    if (usuario != maq) {
        switch (usuario) {
            case "Piedra":
                if (maq == "Papel") {
                    juegosPerdidos++;
                    return msgGanaMaq;
                } else {
                    juegosGanados++;
                    return msgGanaUsuario;
                }
            case "Papel":
                if (maq == "Tijeras") {
                    juegosPerdidos++;
                    return msgGanaMaq;
                } else {
                    juegosGanados++;
                    return msgGanaUsuario;
                }
                break;
            case "Tijera":
                if (maq == "Piedra") {
                    juegosPerdidos++;
                    return msgGanaMaq;
                } else {
                    juegosGanados++;
                    return msgGanaUsuario;
                }
        }
    }
    else {
        juegosEmpatados++;
        return msgEmpate;
    }

}

function asignarTextoElemento(id, texto) {
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto;
    return;
}

function mostrarResumen() {
    let resumen = document.getElementById("resumen_juegos");
    if (resumen.style.display === "none") {
        resumen.style.display = "block";
    }
}

function jugarCachipun() {
    if (cantidadJuegosRestantes > 0) {
        let jugadaUsuario = juegoUsuario();
        let jugadaMaq = juegoMaquina();
        let msgResultado = resultadoJuego(jugadaUsuario, jugadaMaq);
        asignarTextoElemento("eleccion_usuario", jugadaUsuario);
        asignarTextoElemento("eleccion_maq", jugadaMaq);
        asignarTextoElemento("resultado_juego", msgResultado);
        cantidadJuegosRestantes--;
        cantidadJuegosRealizados++;
        asignarTextoElemento("muestra_cant_juegos_realizados", cantidadJuegosRealizados);
        asignarTextoElemento("muestra_cant_juegos_restantes", cantidadJuegosRestantes);

    }
    else {
        document.getElementById('jugar').setAttribute('disabled', 'true');
        asignarTextoElemento("muestra_juegos_ganados", juegosGanados);
        asignarTextoElemento("muestra_juegos_empatados", juegosEmpatados);
        asignarTextoElemento("muestra_juegos_perdidos", juegosPerdidos);
        document.getElementById('mostrar_resumen').removeAttribute('disabled');
    }
}







