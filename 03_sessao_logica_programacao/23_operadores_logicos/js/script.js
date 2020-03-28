/*
Operadores Lógicos
    && -> AND -> E
    || -> OR  -> OU
    !  -> NOT -> NÃO

    FALSY
        Qualquer valor abaixo será considerado falso em JS:
        false
        0
        '' "" ``
        null/ undefined
        NaN
*/
console.log('Douglas' && 'Maria'); //Duas expressões verdadeiras retorna o segundo vlr da expressão
console.log('Douglas' && NaN && 'Maria'); //False pois já existe um valor que é considerado false
console.log(0 || false || null || 'Douglas' || true); //Retorna a string Douglas pois foi o primeiro vlr true que JS encontrou

const corUser = null;
const colorDefault = corUser || 'red';