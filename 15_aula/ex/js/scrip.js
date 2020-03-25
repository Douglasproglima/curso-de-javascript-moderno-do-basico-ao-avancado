let number = Number(prompt("Informe um número"));

const idTitulo = document.getElementById("id_titulo");
const idTxt = document.getElementById("id_txt");

idTitulo.innerHTML = number;
idTxt.innerHTML = '';
idTxt.innerHTML += `<p>Seu número + 2 é ${number + 2}.</p>`;
idTxt.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(number)}</p>`;
idTxt.innerHTML += `<p>${number + 2} é um número inteiro:  ${Number.isInteger(number) ? "Sim" : "Não"}</p>`;
idTxt.innerHTML += `É um NaN:  ${Number.isNaN(number) ? "Sim" : "Não"}</p>`;
idTxt.innerHTML += `Arrendondando para cima: ${Math.floor(number)}</p>`;
idTxt.innerHTML += `Arrendondando para baixo: ${Math.ceil(number)}</p>`;
idTxt.innerHTML += `Arrendondando com duas casas decimais: ${number.toFixed(2)}</p>`;
