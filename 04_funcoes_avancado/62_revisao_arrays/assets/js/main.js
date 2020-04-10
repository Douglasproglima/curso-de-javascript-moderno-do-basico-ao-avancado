//#region ARRAYS
const arrayLiteral = ['Douglas', 'Fernando', 'Lucas']; //Array Literal
const arrayConstrutor = new Array('Paulo', 'Mori', 'João'); //Array Construtor
console.log('arrayLiteral: ' + arrayLiteral);
console.log('');

//Copiar um Array não basta apenas atribuir com o sinal de =
const arrayLieteralTemp = arrayLiteral; //Não é uma cópia, se altear um altera o outro também, é a mesma referencia na memoria

//Para criar uma copia do array basta usar o operador Spread ou Rest ...
const arrayLieteralCopy = [...arrayLiteral];

const primeiroItemDel = arrayLiteral.shift(); //Remove o primeiro item e retorna o mesmo
const ultimoItemDel = arrayLiteral.pop(); //Remove o último item e retorna o mesmo

console.log('Primeiro removido: '+primeiroItemDel);
console.log('');
console.log('Último removido: '+ultimoItemDel);
console.log('');
console.log('arrayLiteral: ' + arrayLiteral);

console.log('Primeiro Add: '+arrayLiteral.unshift(primeiroItemDel)); //Add na primeira posicao, afeta os demais indices
console.log('');

console.log('Último Add: '+arrayLiteral.push(ultimoItemDel)); // Add na ultima posicao
console.log('');
console.log('arrayLiteral: ' + arrayLiteral);

console.log('');
console.log('arrayLieteralTemp: ' + arrayLieteralTemp);
console.log('');
arrayLieteralCopy.push(arrayConstrutor.toString());
console.log('arrayLieteralCopy: ' + arrayLieteralCopy);
console.log('');


console.log('Converte uma String');
const array = arrayConstrutor.join(',');
const arrays = array.split(','); //Convertendo a string em um array
const arrayTemp = arrays.concat(arrayLiteral);


console.log(arrayTemp);
console.log('');


//Remover ultimo item usando o slice da posicao 0 até -1, nesse caso ele inverte
console.log('Remover item usando o slice e posicao 0, -1');
const newArray = ['Paulo', 'Mori', 'João', 'Douglas', 'Fernando', 'Lucas'];
const newArrayTemp = [...newArray];

console.log(newArray);
console.log(newArray.slice(0, -1)); //Remove o ultimo item
console.log('');

console.log(newArrayTemp);
console.log(newArrayTemp.slice(1, -2)); //Remove o primeiro e ultimo

//#endregion