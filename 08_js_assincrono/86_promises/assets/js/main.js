/*
function esperaAi(msg, tempo){
    setTimeout(() => {
        console.log(msg);
    }, tempo);
}

//Nesse caso não tem controle sobre a ordem de execução das funções.
esperaAi('esperaAi> Frase 1', rand(1, 3));
esperaAi('esperaAi> Frase 2', rand(1, 3));
esperaAi('esperaAi> Frase 3', rand(1, 3));
console.log('----------------------------------');

//Para resolver o problema acima, era solucionado com as funções de callback
function esperaAi2(msg, tempo, callbackParam){
    setTimeout(() => {
        console.log('----------------------------------');
        console.log(msg);
        console.log('----------------------------------');

        //Quando o código terminar, chama a função abaixo
        if(callbackParam) callbackParam();
    }, tempo);
}

//O problema da ordem em que será executado as funções se resolve da forma abaixo, pois a frase 3 somente
//será chamada depois da frase 2 e frase 1
//Porém temos outro problema, função dentro de função(callbacks)
esperaAi2('esperaAi2: Frase 1', rand(1, 3), function(){
    esperaAi2('esperaAi2: Frase 2', rand(1, 3), function(){
        esperaAi2('esperaAi2: Frase 3', rand(1, 3));
    });
});
*/

console.log('/*******************Solução com PROMISES*********************** */');

//PROMISES - Solução para N callbacks
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) +  min);
}

function myPromise(msg, tempo){
    //Instância a classe/construtor Promise() e passa os dois parâmetros:
        //1 - resolve: Se afunção/código foi executado, resolve ele para mim
        //2 - reject: Se a função/código deu erro, rejeita isso
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('Erro proposital: ')); // OR reject('BAD VALUE');
        setTimeout(() => {
            /*console.log('----------------------------------');
            console.log(msg);
            console.log('----------------------------------');*/

            resolve(msg); //Só pode passar um parâmetro para resolve
        }, tempo);
    });
}

//Maneira de chamar o método myPromise()
myPromise('myPromise: Conecta ao BD', rand(1, 3))
    //Será executado quando resolver a promisse
    .then(resposta1 => {
        console.log(resposta1);
        
        //erro proposital para ver o funcionamento do catch.
        return myPromise(26121897, rand(1, 3));

        //É possível retornar outra promise dentro de outra
        //return myPromise('myPromise: Select dados BD', rand(1, 3));
    })
    .then(resposta2 => {
        console.log(resposta2);
        return myPromise('myPromise: Tratando os dados do BD', rand(1, 3));
    })
    .then(resposta3 => {
        console.log(resposta3); //Retornar o resolve da promise anterior
    })
    .then( () => {
        console.log('Mostra os dados na View');
    })
    //Será chamado após capturar algum erro
    .catch(error => {
        console.log(error);
    });

//O console abaixo executa antes das promises acima, pois as promises são exibidas apenas quando concluir a execução
//Por isso o nome de Assincrono(Executa depois)
console.log();