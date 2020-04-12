//#region ARRAYS->MAP() -> Altera os valores do array 

//Dobrar os valores dos elementos contidos no array
const arrayNumber = [6, 7, 8, 9, 1026, 1, 41, 56, 2 ,3 ,4, 129, 5, 10, 21, 29, 35];
const doubleNumber = arrayNumber.map( el => el * 2);
const newArray = arrayNumber.concat(doubleNumber);
console.log(newArray);
console.log(' ');

const peoples = [
    {name: 'Douglas', lastName: 'Lima', age: 32, birthday: '26/12/1987'},
    {name: 'Pedro', lastName: 'Oliveira', age: 30, birthday: '08/03/1991'},
    {name: 'John', lastName: 'Chuke', age: 23, birthday: '01/03/1996'},
    {name: 'Jonathan', lastName: 'Jenvi', age: 61, birthday: '01/03/1950'},
    {name: 'Ruy', lastName: 'Ruanes', age: 70, birthday: '01/03/1955'},
    {name: 'Bryan', lastName: 'Kursh', age: 40, birthday: '10/10/1980'}
];
const peoplesOrigin = [...peoples];

//Retorna apenas uma string com o nome da pessoa
const arrayNameThePeoples = peoples.map( e => e.name);
console.log(arrayNameThePeoples);
console.log(' ');

//Remova apenas a chave nome do Objeto
const arrayPeoplesLastNameA = peoples.map( el => {
    
    //Primeira Forma -> Retorne o objeto sem o atributo necessário
    //return { lastName: el.lastName, age: el.age, birthday: el.birthday };

    /* Segunda Forma -> Remova o atributo desejado */
    //OR simplesmente use a palavra 'delete obj.atributo
    delete el.name;
    return el;
});
console.log(arrayPeoplesLastNameA);
console.log('');

//Adicionar uma chave ID no objeto
const arrayNewElement = peoples.map( (el, index) => {
    const newObj = {...el};
    newObj.id = (index + 1); 
    return newObj;
});
console.log('Original');
console.log(peoplesOrigin);
console.log('');

console.log('Alterado');
console.log(arrayNewElement);
console.log('');
console.log(' ');