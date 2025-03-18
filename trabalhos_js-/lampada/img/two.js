const btoff = document.getElementById('off');
const bton = document.getElementById('on');
const lamp = document.getElementById('base');

function se_ta() {
    return lamp.src.indexof ('quebrada') > -1;
}
function acender () {
    if (!se_ta ()){
    
    lamp.src='./img/ligada.jpg'
    }
}
function desligar() {
    if (!se_ta ()){

    lamp.src='./img/desligada.jpg'
    }
}
function quebrar() {
    lamp.src='./img/quebrada.jpg'
    
}
btoff.addEventListener('click',desligar);
bton.addEventListener('click',acender);
lamp.addEventListener('mouseover',acender);
lamp.addEventListener('mouseleave',desligar);
lamp.addEventListener('dblclick',quebrar);


