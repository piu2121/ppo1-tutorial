'use strict'

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

const criadiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('bolado');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('armazenador').appendChild(div);
}

const exibir = (sons) => Object.keys(sons).forEach(criadiv);
const tocarsom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`);
    audio.play();
}
const revome_efeito = (letra) => document.getElementById(letra)
    .classList.add('active');

const adicionarEfeito = (letra) => {
    const dive = document.getElementById(letra);
    const removeActive = () => dive.classList.remove('active');
    dive.addEventListener('transitionend', removeActive);
}

const ativar_div = (eventos) => {
    let letra = '';
    if (eventos.type == 'click') {
        letra = eventos.target.id;
    } else {
        letra = eventos.key.toUpperCase();
    }
    console.log(letra);
    const letraok = sons.hasOwnProperty(letra);
    if (letraok) {
        adicionarEfeito(letra);
        tocarsom(letra);
        revome_efeito(letra);
    }

}

exibir(sons);
document.getElementById('armazenador')
    .addEventListener('click', ativar_div);

window.addEventListener('keydown', ativar_div);   