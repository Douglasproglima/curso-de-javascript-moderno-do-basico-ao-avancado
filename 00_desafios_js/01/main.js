/*
    DESAFIO>
        Verificar se a soma de todos os numeros de uma array, resulta no maior numero contido dentro do proprio
*/
const arrayNumbers1 = [1, 2, 3, 5, 11]; //1 + 2 + 3 + 5 = 11 O maior número é 11 - TRUE
const arrayNumbers2 = [1, 4, 5, 20, 8]; //1 + 4 + 5 + 8 = 18 O maior é número é 20 - FALSE


function validadeSumMaxNumbers(array){
    const arrayOrderAsc = array.sort(function(n1, n2){
        return n1 - n2;
    });
    
    [n1, n2, n3, n4, ...maxNumber] = arrayOrderAsc;
    const sumNumber = (n1 + n2 + n3 + n4);
    return (sumNumber == maxNumber)
        ? `A soma é maior ou igual: Soma: ${sumNumber} | Maior Número: ${maxNumber}`
        : `A soma não é maior ou igual: Soma: ${sumNumber} | Maior Número: ${maxNumber}`;

}

console.log(validadeSumMaxNumbers(arrayNumbers1));
console.log(validadeSumMaxNumbers(arrayNumbers2));