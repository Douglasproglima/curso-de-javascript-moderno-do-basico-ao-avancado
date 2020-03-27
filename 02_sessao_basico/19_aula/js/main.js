/* 
Tipos de Dados Primitivos - Valores Imutáveis:
  string, number, boolean, undefined, null, bigint e symbol

Tipos por referência - Valor Mutáveis(Que são alterados e apontam para o mesmo endereço da memória)
  Array, Object e Function  

EM RESUMO:
  OS TIPOS ARRAY, OBJECT E FUNCTION OS VALORES SERÃO APONTANDO PARA O MESMO LOCAL NA MEMORIA

  JÁ OS TIPOS PRIMITIVOS SERÃO CRIADO UMA CÓPIA(STRING, NUMBER, BOOLEAN, UNDEFINED, NULL, BIGINT E SYMBOL)
*/

//Tipos Primitivo - STRING
let a = "A - ORIGINAL";
let b = a; //Cópia
console.log(a, b);

a = "A UPDATE";
console.log(a, b);

//Tipos Não Primitivo - Dados por Referência e são multáveis Arrays, Object e Functions
//ARRAY
let c = [1, 2, 3];
let d = c;
console.log(`Nesse caso tanto C quanto D apontam para o mesmo local na memória. C: ${c} D: ${d}`);

c.push(4);
console.log(`Inserindo o valor 4 no array C afeta o array D. C: ${c} D: ${d}`);

//Remove o último valor do array
d.pop(); //Remove o item do array, nesse também irá afetar o C pois ambos arrays apontam para o mesmo endereço da memoria
console.log(`Removendo o último valor de D afeta o array C. C: ${c} D: ${d}`);

/* Para preservar um valor passado por referência deve ser o usar [...Variavel] Spread */
let e = ['Douglas', 'Renderson', 'Rafaela'];
let f = [...e]; //Spread - Literalmente criando ou espaço na memória para a variavel e
let g = f;
console.log(`E: ${e} F: ${f}`);

f.push('Edivane'); //Nesse caso F e G apontam para o mesmo espaço. Então possui os mesmos valores e quaisquer alterações
console.log(`"E" não foi alterado: ${e} F: ${f} G: ${g}`);

/* OBJECT */
//Na forma abaixo é a mesma coisa é o mesmo valor para ambos variaveis pois são do tipo Object
const h = {
  name: 'Douglas',
  lastName: 'Lima'
};
const j = h;

j.name = 'Fulano';
j.lastName = 'Siglano';

console.log(j);
console.log(h);