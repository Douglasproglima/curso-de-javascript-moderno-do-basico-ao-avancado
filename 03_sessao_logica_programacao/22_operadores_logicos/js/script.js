/*
Operadores Lógicos
    && -> AND -> E
    || -> OR  -> OU
    !  -> NOT -> NÃO

*/
const expressAnd = true && true && true && true; //Todas devem ser true para retornar true
console.log(expressAnd);

const expressOr = true || false;
console.log(expressOr);

const user = 'douglaslima';
const password = '123456';

const isLogar = user === 'douglaslima' && password === '123456';
console.log(`Logado: ${isLogar}`);