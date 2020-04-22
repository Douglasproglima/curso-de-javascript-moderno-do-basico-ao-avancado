/*
    DESAFIO>
        Verificar se a soma de todos os numeros de uma array, resulta no maior numero contido dentro do proprio
*/
function validadeSumMaxNumbers(paramArray) {
    const arraySort = paramArray.sort((n1, n2) => n1 - n2 );
    
    const arrayCopy = [...arraySort];
    const maxNumber = arrayCopy.pop();
    const total = arrayCopy.reduce((acu, vlr) => acu += vlr);
    return total === maxNumber 
        ? `A soma é maior ou igual: Soma: ${total} | Maior Número: ${maxNumber}`
        : `A soma não é maior ou igual: Soma: ${total} | Maior Número: ${maxNumber}`;
}

const array1 = [1, 2, 3, 5 , 11];
const array2 = [1, 4, 5, 20, 278, 8, 20, 32, 21, 32, 55, 36, 32, 12];
const array3 = [1, 4, 5, 20, 8, 20, 32, 21, 32, 55, 209, 11];
const array4 = [1, 4, 5, 20, 8];
console.log(validadeSumMaxNumbers(array1));
console.log(validadeSumMaxNumbers(array2));
console.log(validadeSumMaxNumbers(array3));
console.log(validadeSumMaxNumbers(array4));