//#region Declaração de Funções

/* COMPLEXO */
//Quando há um alinhamento de função dentro da outra o retorno da funcao pai será o resultado da funcao interna
function formaFrase(inicioFrase){
    function finalFrase(restoFrase){
        return inicioFrase+ ' ' +restoFrase;
    }

    return finalFrase;
}
const frase = formaFrase('Olá'); //Passa o parametro 1 para funcao pai - formaFrase()
const final =  frase('mundo'); //Passa o parametro 2 para a funcao filha - finalFrase()

console.log(final);

/* EXEMPLO DE UTILIDADE PARA O EXEMPLO ACIMA NA VIDA REAL */
//CODIGO REPETIDO
console.log('-------------CODIGO PORCO-----------');
function duplicaVlr(n){
    return n * 2;
}
function triplicaVlr(n){
    return n * 3;
}
function quadriplicaVlr(n){
    return n * 4;
}
console.log(duplicaVlr(2));
console.log(triplicaVlr(2));
console.log(quadriplicaVlr(2));

console.log('-------------CODIGO REFATORADO-----------');
//CODIGO USANDO FUNCAO DENTRO DE FUNCAO
function multiplicatorNumber(multiplicator){
    return function multiplate(n){
        return n * multiplicator
    };
}

const duplicaVlr_ = multiplicatorNumber(2);
const triplicaVlr_ = multiplicatorNumber(3);
const quadriplicaVlr_ = multiplicatorNumber(4);

console.log(duplicaVlr_(2));
console.log(triplicaVlr_(2));
console.log(quadriplicaVlr_(2));



//#endregion