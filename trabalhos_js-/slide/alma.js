'use strict';

const imagens = [
    { 'id': '1', 'url': './img/images.jpg' },
    { 'id': '2', 'url': './img/pxz_2.jpg' },
    { 'id': '3', 'url': './img/pvz_3.jpg' },
]

const loca_l = document.querySelector('#imagens_local');

const loadimages = (imagens, local) => {
    imagens.forEach(image => {
        local.innerHTML += `
        <div class='item'>
            <img src='${image.url}'
        </div
        `
    })
}

loadimages(imagens, loca_l);

let items = document.querySelectorAll('.item');

const anterior = () => {
    
    loca_l.appendChild(items[0]);
     items = document.querySelectorAll('.item');

}

const proximo = () => {
    const lastitem = items[items.lenght - 1]
    loca_l.insertBefore(lastitem, items[0]);
     items = document.querySelectorAll('.item');

}

document.querySelector('#anterior').addEventListener('click', anterior);
document.querySelector('#proximo').addEventListener('click', proximo);