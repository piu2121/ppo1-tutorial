const image = document.getElementById('base');
const pai = document.getElementById('buttons');
let i = 0;
let interval_id = null;
const trafego_luz = (event) => {
    parar();
    console.log(event.target.id)
    mudar[event.target.id]();

}

const parar = () => {
    clearInterval(interval_id);
}

const troca_color = () => {
    console.log('bola do dragão');

    const cores = ['vermelho', "verde", 'amarelo'];
    const cor = cores[i];
    mudar[cor]();
    i++;
    if (i == 3) {
        i = 0;
    }
}

const mudar = {
    'vermelho': () => image.src = '/semaforo/img/vermelho.png',
    'amarelo': () => image.src = '/semaforo/img/amarelo.png',
    'verde': () => image.src = '/semaforo/img/verde.png',
    'auto': () => interval_id = setInterval(troca_color, 1000)
}

pai.addEventListener('click', trafego_luz)