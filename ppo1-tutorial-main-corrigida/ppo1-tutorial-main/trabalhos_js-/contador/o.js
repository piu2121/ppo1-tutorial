'use strict';

const formatardigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const s = document.getElementById('segundos');
    const m = document.getElementById('minutos');
    const h = document.getElementById('horas');
    const d = document.getElementById('dias');

    const qt = tempo % 60;
    const qtm = Math.floor((tempo % (60 * 60)) / 60);
    const qth = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtd = Math.floor(tempo/ (60 * 60*24));



    s.textContent = formatardigito(qt);
    m.textContent = formatardigito(qtm);
    h.textContent = formatardigito(qth);
    d.textContent = formatardigito(qtd);
}


const contagem = (tempo) => {
    const pararcontar = () => clearInterval(id);

    const contar = () => {
        if (tempo == 0) {
            pararcontar();
        }
        atualizar(tempo);
        tempo--
    }
    const id = setInterval(contar, 1000);
}
contagem(360000);