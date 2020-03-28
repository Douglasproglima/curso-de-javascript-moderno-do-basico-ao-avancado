/*
Operadores de Comparação
    >   maior que
    >=  maior que ou igual a
    <   menor que
    <=  menor que ou igual a
    ==  igualdade (vlr) *****************
    === igualdade estrita (vlr e tipo)
    !=  diferente (vlr)
    !== diferente estrito (vlr e tipo)
*/

const num1 = 10; //number
const num2 = '10'; //string
const result = num1 == num2;
console.log(result); //Mesmo sendo tipos de dados diferentes a linguagem disse que é, por causa da correção de tipos do JS

const result1 = num1 === parseInt(num2);
console.log(result1);

