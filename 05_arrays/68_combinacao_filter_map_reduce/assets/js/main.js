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
const numbersPar = arrayNumber.filter(el => {
    if(el % 2 === 0) return el
});
console.log('----------------------------Números Pares----------------------------');
console.log(numbersPar);
console.log(' ');

const doubleNumbersPar = numbersPar.map(el => el * 2 );
console.log('----------------------------DOBRO----------------------------');
console.log(doubleNumbersPar);
console.log(' ');

const totalNumbersPar = doubleNumbersPar.reduce((acumulate, obj) => acumulate + obj ); 
console.log('----------------------------SOMA----------------------------');
console.log(totalNumbersPar);
console.log(' ');


const arrayNumber1 = [6, 7, 8, 9, 1026, 1, 41, 56, 2 ,3 ,4, 129, 5, 10, 1483.45, 21, 29, 35];
const allOptions = arrayNumber1
    .filter( el => el % 2 === 0)
    .map(el => el * 2)
    .reduce((acumulate, el) => acumulate + el);

console.log('----------------------------SOMA----------------------------');
console.log(allOptions);
console.log(' ');
