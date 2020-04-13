//COMBINACAO DE FILTER, MAP E REDUCE
const arrayNumber = [6, 7, 8, 9, 1026, 1, 41, 56, 2 ,3 ,4, 129, 5, 10, 1483.45, 21, 29, 35];
console.log('----------------------------ORIGINAL----------------------------');
console.log(arrayNumber);
console.log(' ');

/*
    1 - Retornar a soma do dobro de todos os pares
        -> Filtrar os numeros pares
        -> Dobrar o valor dos numeros
        -> Reduzir ou somar todos os numeros
*/
const numbersPar = arrayNumber.filter(el => el % 2 === 0);
console.log('----------------------------Números Pares----------------------------');
console.log(numbersPar);
console.log(' ');

const doubleNumbersPar = numbersPar.map(el => el * 2);
console.log('----------------------------Dobro----------------------------');
console.log(doubleNumbersPar);
console.log(' ');

const totalNumbersPar = doubleNumbersPar.reduce((acumulator, el) => acumulator + el);
console.log('----------------------------Soma----------------------------');
console.log(totalNumbersPar);
console.log(' ');


const arrayNumber1 = [6, 7, 8, 9, 1026, 1, 41, 56, 2 ,3 ,4, 129, 5, 10, 1483.45, 21, 29, 35];
console.log('----------------------------ORIGINAL----------------------------');
console.log(arrayNumber1);
console.log(' ');

//Tudo em apenas uma expressão
const allOptions = arrayNumber1
    .filter(el => el % 2 === 0)
    .map(el => el * 2)
    .reduce((acumulator, el) => acumulator + el)
console.log('----------------------------TODAS EXPRESSÕES----------------------------');
console.log(allOptions);
console.log(' ');