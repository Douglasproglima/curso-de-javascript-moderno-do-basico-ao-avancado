//#region - PRIMEIRA 
let a = 'A'; //B - Resultado esperado
let b = 'B'; //C - Resultado esperado
let c = 'C'; //A - Resultado esperado

const letras = [b, c, a];
console.log(`Before: ${a}, ${b}, ${c}`);

[a, b, c] = letras; //ATRUIÇÃO VIA DESESTRUTURAÇÃO
console.log(`After: ${a}, ${b}, ${c}`);
console.log('');

/* OUTRO EXEMPLO */
let d = 'D';
let e = 'E';

console.log(`Before: ${d}, ${e}`);
[d, e] = [e, d];
console.log(`After: ${d}, ${e}`);
console.log('');

/* DESESTRUTURACAO COM FUNCÕES */
function myFunction(){
    return ['A1', 'B2', 'C3'];
}

console.log(`After: ${myFunction()[0]}, ${myFunction()[1]}`);
var a1, b2;
[b2, a1] = myFunction();
console.log(`Before: ${a1}, ${b2}`);
console.log('');
//#endregion

//#region SEGUNDA PARTE  ...REST OPERATOR e ...SPREAD OPERATOR
const numbers = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [one, two, three, , , ...restOperator] = numbers; //Ocultou as posições [3]->4000 e [4]->5000
console.log(one, two, three); //1000, 2000, 3000
console.log(restOperator); // [ 6000, 7000, 8000, 9000 ]

//#endregion

//#region COMPLEXO DEMAIS - ATRIBUICAO VIA DESESTRUTURACAO
//***********************************INDICES*************************************/                                 
//                        0             1             2
//                    0   1   2     0   1   2     0   1   2
const numbersInt = [ [10, 20, 30], [40, 50, 60], [70, 80, 90] ];

//Retornar o número 60
const [ , [ , , indice1_2] ] = numbersInt; //Torna o código confuso de ser lido
console.log(indice1_2);
console.log('');

//Mesma coisa acima de forma mais legivel
const [lista_1, lista_2, lista_3] = [ [10, 20, 30], [40, 50, 60], [70, 80, 90] ];
console.log(lista_2[2]);

//#endregion