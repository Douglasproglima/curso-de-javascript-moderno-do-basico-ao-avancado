//LET tem escopo de bloco {....} if(condicao){.....}
//VAR Tem escopo de função function(){....}

console.log('/*****************TESTE DO LET*****************/');
const FLAG = true;
let name = 'Douglas'; //Espaço A na memória
var name2 = 'Felipe'; //Criado

if(FLAG){
    let name = 'Douglas IF 1'; //Espaço B na memória
    //console.log(`LET ${name} | VAR ${name2}`);

    if(FLAG){
        let name = 'Douglas IF 2'; //Espaço C na memória
        //console.log(`LET ${name} | VAR ${name2}`);
    }
}

console.log('');
console.log('/*****************TESTE DO VAR*****************/');
var name2 = 'Felipe Alterado'; //Redeclarando e alterando o valor
//console.log(`LET ${name} | VAR ${name2}`);

if(FLAG){
    var name2 = 'Felipe IF 1'; //Redeclarando e alterando o valor
    //console.log(`LET ${name} | VAR ${name2}`);

    if(FLAG){
        var name2 = 'Felipe IF 2'; //Redeclarando e alterando o valor
        //console.log(`LET ${name} | VAR ${name2}`);
    }
}
console.log(`ESCOPO GLOBAL LET ${name} | VAR ${name2}`);

console.log('');
console.log('/*****************ESCOPO DE FUNÇÂO*****************/');

//var sobreNome = 'Lima';
function getQualquerCoisa(){
    var sobreNome = 'sobreNome'; //VAR É global dentro do escopo de functions()
    if(FLAG){
        console.log('1 -'+sobreNome);
    }
}

getQualquerCoisa();
//console.log('2 - '+sobreNome); //Não encontra a função pois var é especial somente dentro de functions(){....}


/* CUIDADO COM O HOISTING DO JS - JS cria a variavelsem vlr no inicio do arquivo quando encontra o mesmo nome de variavel posterior a sua chamada */
console.log(varDepoisDoConsole); // Resultado undefined mas não gera o erro por não encontrar a variável
var varDepoisDoConsole = 'VAR FOI CRIADO DEPOIS DO CONSOLE';

//console.log(letDepoisDoConsole); //Não ocorre o hoisting igual as demais linguagens
//let letDepoisDoConsole = 'LET FOI CRIADO DEPOIS DO CONSOLE';

/* HOISTING OCORRE COM FUNÇÔES TAMBEM */
console.log(funcaoCriadaDepois());//LOUCO, CHAMADA A FUNÇÂO CRIADA DEPOIS DO CONSOLE.LOG: HOISTING CRIA A FUNCAO NO INCIO DO ARQUIVO OU ELEVA ELA PARA O INICIO DO ARQUIVO

function funcaoCriadaDepois(){
    return 'FUNCAO CRIADA DEPOIS';
}
