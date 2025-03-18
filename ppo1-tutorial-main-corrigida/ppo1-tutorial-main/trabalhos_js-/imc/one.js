const bt = document.getElementById('calc');

function imc() {
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resposta');

  if (nome.value !== '' && altura !== '' && peso !== '') {
    const valorimc = (peso / (altura * altura)).toFixed(1);

    let classificacao = "";
    if (valorimc < 18.5) {
      classificacao = 'abaixo do peso';

    } else if (valorimc < 25) {
      classificacao = "peso ideal.";
    } else if (valorimc < 35) {
      classificacao = 'com obesidade grau I.';
    } else if (valorimc < 40) {
      classificacao = 'com obesidade grau II';
    } else {
      classificacao = 'com obesidade grau III. Cuidado!!';
    }
    resultado.textContent = `${nome} seu IMC é ${valorimc} e você está ${classificacao}`;
  } else {
    resultado.textContent = 'preenche ai'
  }
}

bt.addEventListener('click', imc);