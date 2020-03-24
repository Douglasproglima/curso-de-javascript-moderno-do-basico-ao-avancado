/*Operadores Aritméticos: 
        + Adiçao ou Concatenação
        - Subtração
        * Multiplicação
        / Divisão

        ** Potenciação(Elevar ex: 2 ** 10 = )
        % Resto da divisão
*/

/*Operadores de Incremento ++ e Decremento -- */ 
let count = 1;
count++; //Pós Incremento + 1 = 2, Executa há ação primeiro para depois incrementar.
//Exemplo abaixo irá exibir 2 e incrementará porém não irá mostrar
console.log(count++); //valor não mostrado 3
console.log(count); //Mostrando que o novo valor é 3

console.log(++count); //Pré Incremento +1  e já mostra o valor atualizado 4, porém incrementa primeiro para depois executar há ação.
console.log(--count); //Pré Decremento -1

/*Operador de Atribuição*/
console.log('');
let num = 1;
num = num + 1;
console.log(num);
//ou o mesmo resultado acima pode ser feito da seguinte maneira
let num1 = 1;
num1 += 1; // num1 = num1 + 1;
console.log(num1);
console.log('');

/*NaN: NOT A NUMBER*/
let num3 = 5;
let num4 = 'Douglas';
console.log(num3 * num4); //NaN - Tipos de dados inválidos durante a operação

/*Concatenação ou Converter > parseInt, parseFloat e Number*/
let num5 = 10.1;
let num6 = '5';
console.log(num5 + num6); // Apenas concatena pois o operador '+' server para somar somente quando for o mesmo tipo de dados
console.log(typeof num5, typeof num6);

console.log('Converter o tipo de dados')
console.log(num5 + Number(num6)); //int e int
console.log(typeof num5, typeof Number(num6));

