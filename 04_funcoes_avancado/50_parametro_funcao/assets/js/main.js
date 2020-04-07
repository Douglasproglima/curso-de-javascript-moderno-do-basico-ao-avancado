//#region Declaração de Funções

/* Funções definidas com a palavra FUNCTION possuem uma variavel especial chamada arguments */
function funcao(){
    let total = 0;
    for(let argumento of arguments)
        total += argumento+',';

        console.log('Não tem parametro.', total, arguments);
}
funcao('VALOR',1,2,3,4,5,6,7,8,9); //Não dá erro. Só funcionar essa parada com function(){}

console.log('');
/* Quando uma função possui qtde X de parametros e ao chamar a função é passado mais parametros do que a função tem */
function funcao2(a, b, c){
    console.log(a, b, c);
}
funcao2(1, 2, 3, 4, 5); //Passou mais para metros que a função espera receber, o JS coloca o valor undefinied

console.log('');
/* Definindo valores defaults para os parametros da function */
function funcao3(a = 0, b, c = 4){ //Forma recente define o valor padrão direto no parametro da funcao
    b = b || 2; //Forma antiga de definir valores defaults

    console.log(a + b + c);
}
funcao3(2, undefined, 20); //Foi passado somente o primeiro parametro


/* ATRIBUICAO DE PARAMETROS VIA DESESTRUTURACAO */
//#region  OBJETO
console.log('');
function funcao4({name, firstName, old}){
    console.log(name, firstName, old);
}
let pessoa = { name: 'Douglas', firstName: 'Lima', old: 32 }; 
funcao4(pessoa);
//#endregion

//#region ARRAY
console.log('');
function funcao5([userName, email, password]){
    console.log(userName, email, password);
}

users = ['douglasproglima', 'douglasproglima@gmail.com', '123456'];
funcao5(users);
//#endregion

/* OUTRAS FORMAS INTERESSANTES */
//Usando o arguments da function name(){....} e O REST OPERATOR

//QUANDO PRECISAR CRIAR UMA FUNÇÃO AO QUAL NÃO SE SABE A QTDE PARAMETROS A RECEBER USAR O REST OPERATOR ...ARGS
console.log('');
function calculate(operator, acumulator, numbers){ //o parametro number tem o rest operator
    for(let number of numbers){
        switch (operator) {
            case '+': acumulator += number; break;
            case '-': acumulator -= number; break;
            case '/': acumulator /= number; break;
            case '*': acumulator *= number; break;
            default: break;
        }
    }

    console.log(acumulator);
}

calculate('+', 1, [20, 30]);
//#endregion