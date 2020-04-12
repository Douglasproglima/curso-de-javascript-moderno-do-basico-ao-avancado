//#region ARRAYS->REDUCE()
/*
    Geralmente usado para reduzir o array ou elemento;
*/

const arrayNumber = [6, 7, 8, 9, 1026, 1, 41, 56, 2 ,3 ,4, 129, 5, 10, 1483.45, 21, 29, 35];

//****************************DESAFIOS***************************
//1 - Some todos os números - REDUCE()
const total = arrayNumber.reduce((acumulate, el, index, array) => {
    return acumulate += el;
}, 0);
//console.log(total);
console.log(' ');

//2 - Retorne os numeros pares - FILTER()
const pares = arrayNumber.reduce((acumulate, el) => {
    if(el % 2 === 0) acumulate.push(el);
    return acumulate;
}, []);
//console.log(pares);
console.log(' ');

//3 - Retorne um array com o dobro dos valores (Map)
const dobro = arrayNumber.reduce((acumulate, el) => {
    acumulate.push(el * 2);
    return acumulate;
}, []);
//console.log(dobro);
console.log(' ');

const peoples = [
    {name: 'Douglas', lastName: 'Lima', age: 32, birthday: '26/12/1987'},
    {name: 'Pedro', lastName: 'Oliveira', age: 30, birthday: '08/03/1991'},
    {name: 'John', lastName: 'Chuke', age: 23, birthday: '01/03/1996'},
    {name: 'Jonathan', lastName: 'Jenvi', age: 61, birthday: '01/03/1950'},
    {name: 'Ruy', lastName: 'Ruanes', age: 70, birthday: '01/03/1955'},
    {name: 'Bryan', lastName: 'Kursh', age: 40, birthday: '10/10/1980'}
];

//4 - Retorne a pessoa mais velha
const oldPeople = peoples.reduce(function(acumulate, el) {
    if(acumulate.age > el.age) 
        return acumulate;

    return el;
});

console.log(oldPeople);
console.log(' ');
