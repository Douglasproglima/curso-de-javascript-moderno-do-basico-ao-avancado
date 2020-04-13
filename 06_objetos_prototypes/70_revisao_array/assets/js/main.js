//RESUMO ARRAYS
/*
    Formas de criar um array:
    Literal:
        const array = [];
    Construtor:
        const array = new Array();
*/


const arrayNumber = [6, 7, 8, 9, 1026, 1, 41, 56, 2 ,3 ,4, 129, 5, 10, 1483.45, 21, 29, 35];
console.log('----------------------------ARRAY ORIGINAL----------------------------');
console.log(arrayNumber);
console.log(' ');

const peoples = [
    {name: 'Douglas', lastName: 'Lima', age: 32, birthday: '26/12/1987'},
    {name: 'Pedro', lastName: 'Oliveira', age: 30, birthday: '08/03/1991'},
    {name: 'John', lastName: 'Chuke', age: 23, birthday: '01/03/1996'},
    {name: 'Jonathan', lastName: 'Jenvi', age: 61, birthday: '01/03/1950'},
    {name: 'Ruy', lastName: 'Ruanes', age: 70, birthday: '01/03/1955'},
    {name: 'Bryan', lastName: 'Kursh', age: 40, birthday: '10/10/1980'}
];
console.log('----------------------------PESSOA ORIGINAL----------------------------');
//FORMAS DE ACESSASR OS ITENS DO OBJETO
console.log(peoples[0]['name']);
console.log(peoples[0].age);
console.log(' ');

//APAGAR UM ELEMENTO DO OBJETO
delete peoples[0].name; //Retorna true se o elemento do objeto for deletado
console.log(peoples[0]);

const objTest = {
    name: 'Douglas',
    age: 32,
    getYearBirthday: function (){
        const dateNow = new Date();
        return dateNow.getFullYear() - this.age;
    }
};
console.log(objTest.getYearBirthday());

for(key in objTest)
    console.log(objTest[key]);

//Criar models -> Factory Functions e Contructors Functions - Padrões de Projeto

//Factory Function
console.log('*********************FACTORY FUNCTION*********************');
function createEntities(entity, atributosArray){
    const entities = {entity, atributosArray: atributosArray };
    return entities
}
const cliente = createEntities('cliente', new Array('name', 'email', 'password'));
const fornecedor = createEntities('forncedor', new Array('name', 'email', 'password'));
const user = createEntities('usuario', new Array('name', 'email', 'password'));
console.log(cliente, fornecedor, user);
console.log(' ');

//Constructor Function
console.log('*********************CONSTRUCTOR FUNCTION*********************');
function Entities(id, entity, atributosArray){
    this.id = id;
    this.entity = entity;
    this.atributosArray = atributosArray;
}

const cli = new Entities(1, 'cliente', new Array('name', 'email', 'password'));
const forn = new Entities(2, 'fornecedor', new Array('name', 'email', 'password'));
const use = new Entities(3, 'usuario', new Array('name', 'email', 'password'));
console.log(cli, forn, use);
