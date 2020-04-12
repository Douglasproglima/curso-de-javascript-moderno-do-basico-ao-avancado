//#region ARRAYS->FILTER() - Sempre retorna o array com a mesma qtde de elementos ou filtrado que o array original
        
const arrayNumber = [1, 2 ,3 ,4, 5, 6, 7, 8, 9, 10, 21, 29, 35, 41, 56, 129, 1026];

//Método tradicional
function callBackFilter(vlr){
    return vlr > 10;
}
const arrayFilterCallBack = arrayNumber.filter(callBackFilter);
//console.log(arrayFilterCallBack);

//Função de Callback - ArrowFunction
const arrayFilters = arrayNumber.filter((n, index, array) => {
    const i = index;
    const a = array;
    return n > 10;
});
//console.log(arrayFilters);

//OR
const arrayFiltersSimple = arrayNumber.filter(n => n > 10);
//console.log(arrayFiltersSimple);

//------------------------Array de Objetos----------------------------
const characters = [
    {
        char_id: 1,
        name: "Walter White",
        birthday: "09-07-1958",
        occupation: {
            0: "High School Chemistry Teacher",
            1: "Meth King Pin"
        },
        img: {
            url: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
            thumbmail: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg'
        },
        status: "Presumed dead",
        nickname: "Heisenberg"
    },
    {
        char_id: 1,
        name: "Jesse Pinkman",
        birthday: "09-24-1984",
        occupation: {
            0: "High School Chemistry Teacher",
            1: "Meth King Pin"
        },
        img: {
            url: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg',
            thumbmail: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg'
        },
        status: "Alive",
        nickname: "Cap n' Cook"
    },
    {
        char_id: 2,
        name: "Skyler White",
        birthday: "08-11-1970",
        occupation: {
            0: "High School Chemistry Teacher",
            1: "Meth King Pin"
        },
        img: {
            url: 'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg',
            thumbmail: 'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg'
        },
        status: "Alive",
        nickname: "Sky"
    }
];

const peoples = [
    {name: 'Douglas', lastName: 'Lima', old: 32, birthday: '26/12/1987'},
    {name: 'Pedro', lastName: 'Oliveira', old: 30, birthday: '08/03/1991'},
    {name: 'John', lastName: 'Chuke', old: 23, birthday: '01/03/1996'},
    {name: 'Jonathan', lastName: 'Jenvi', old: 61, birthday: '01/03/1950'},
    {name: 'Ruy', lastName: 'Ruanes', old: 70, birthday: '01/03/1955'},
    {name: 'Bryan', lastName: 'Kursh', old: 40, birthday: '10/10/1980'}
];

/* Desafios
    Retorne as pessoas que tem o nome com 5 letras ou mais
    Retorne as pessoas com mais de 50 anos
    Retorne as pessoas cujo sobrenome termina com A 
*/

console.log('Nome com mais de 5 caracteres');
const arrayNameMaiorCinco = peoples.filter(n => n.name.length > 5);
console.log(arrayNameMaiorCinco);
console.log('');

console.log('Pessoas com mais de 60 anos de idade');
const arrayPeoplesOlds = peoples.filter( n => n.old > 60);
console.log(arrayPeoplesOlds);
console.log('');

console.log('Pessoas ao qual o sobrenome termina A');
const arrayPeoplesLastNameA = peoples.filter( n => n.lastName.toLowerCase().endsWith('a'));
console.log(arrayPeoplesLastNameA);
console.log('');