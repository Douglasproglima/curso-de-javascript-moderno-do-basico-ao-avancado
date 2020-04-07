//#region Declaração de Funções

//#region Function Hoisting
    /*
    1 - Hoisting somente ocorre quando se declara a função dessa forma
    2 - O que é Hoisnting?
        O hoisnting nada mais é do que colocar as funções declaradas dessa forma junto com variáveis
        declaradas com a palavra VAR para o topo do arquivo, ou seja, na linha 1;    
    */
    oi(); //Chamei a função antes da criação da mesma - Isso é o hoisnting
    function oi(){
        console.log('TESTE');
    }
//#endregion

//#region Function Expression
    /* 
    3 - Todas as funções são objetos de primeira class ou First-class-object:
        Function Expression criar uma variavel que recebe uma function
    */
    const souUmDado = function(){
        return 'SOU UM DADO.';
    }
    //Chama a variavel como se fosse uma function
    souUmDado();

    //Outra forma é passar a função como parâmetro para outra function
    function outraFuncao(funcao){
        console.log(funcao());
    }
    outraFuncao(souUmDado);
//#endregion

//#region Arrow Function - Faz diferença quando se usa o this
    const funcaoArrow = () => {
        console.log('ARROW FUNCTION');
    };
    funcaoArrow();

//#endregion

//#region Dentro de um object pode criar uma functio
const obj = {
    speak: function(){ 
        console.log('1 - LOUCURA');
    },
    speak2(){
        console.log('2 - LOUCURA');
    }
};

obj.speak();
obj.speak2();

//#endregion

//#endregion