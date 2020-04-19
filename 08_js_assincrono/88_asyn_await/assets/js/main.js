//PROMISES - Solução para N callbacks
function rand(min = 0, max = 5){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) +  min);
}

//As funções rand() e myPromise() foram criadas para simular uma requisição ao qual não sabe o tempo de retorno
function myPromise(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
            reject('Promise Rejeitada');
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na Promise.');
        }, tempo);
    });
}

//Indenpente do tempo que demorar cada requisição sempre será executada na ordem definda no then
//Porém o código ainda continua verboso.

//#region Modo verboso
/*
myPromise('Etapa 1', rand())
    .then( vlr => {
        console.log(vlr);
        return myPromise('Etapa 2', rand());
    })
    .then( vlr => {
        console.log(vlr);
        return myPromise('Etapa 3', rand());
    })
    .then( vlr => {
        console.log(vlr);
        return myPromise('Etapa 4', rand());
    })
    .then( vlr => {
        console.log('Termina a execução de todas etapas', vlr);
    })
    .catch( e => console.log(e));
*/
//#endregion

//Para substituir o encadeiamento acima podemos usar o: 
//ASYNC/AWAIT: => Só pode usar a palavra await quando a função estiver usando a palavra asyn)
//#region Modo Clean ou curto de escrever código
async function execute(){
    try {
        const etapa1 = await myPromise('Etapa 1', rand());
        console.log(etapa1);
        const etapa2 = await myPromise('Etapa 2', rand());
        console.log(etapa2);
        const etapaErro = await myPromise(1232121, rand());
        console.log(etapaErro);
        const etapa3 = await myPromise('Etapa 3', rand());
        console.log(etapa3);
        console.log('Termina a execução de todas etapas');
    } catch (error) {
        console.log('Erro: ' + error);
    }
}

execute();

//Se não usar o .then() ou await em async function(){} a promise cai nesse status pending<>
const promisePending = myPromise('Estado da promise? ', 5000);
console.log(promisePending);
//#endregion