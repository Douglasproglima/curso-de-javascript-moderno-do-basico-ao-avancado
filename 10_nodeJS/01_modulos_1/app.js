/* 
//Importa o mod1 e executa o método speakName()
const mod1 = require('./mod1');
console.log(mod1.speakName());
*/

//Importa apenas o método speakName e renomeia aliasSpeakName();
const aliasSpeakName = require('./mod1').speakName;
console.log(aliasSpeakName());

//Outra forma de importar e renomear metodos
const mod1 = require('./mod1');
const newMethodSpeakName = mod1.speakName;
console.log(newMethodSpeakName());

//Destructore
const { name, lastName, speakName } = require('./mod1');
console.log(name, lastName, speakName());

//Desctructore, removendo a chave pessoa dentro do Obj 
const { People } = require('./mod1'); //Módulos criados pelo dev devem ser informado o caminho
const p1 = new People('Fernando');
console.log(p1);

//Módulos nativos do Node e módulos instalados via npm/yarn etc... não precisa informar o caminho, apenas o nome
const path = require('path'); //Pacote padrão do NodeJS
//console.log(path);

//Após instalar o axios => npm i axios, é possivel acessar sem passar o caminho, basta informar apenas o nome do axios
console.log('');
const axios = require('axios');

const cpfs = new Array();

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(result => {
        for(let data of result.data) 
            cpfs.push(data.cpf);
        console.log(cpfs.length);
    })
    .catch(err => console.log(err));