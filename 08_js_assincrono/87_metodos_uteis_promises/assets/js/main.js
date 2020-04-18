//PROMISES - Solução para N callbacks
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) +  min);
}

function myPromise(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
            //reject(false); 
            //reject(new Error('Erro proposital: ')); 
            reject('Promise Rejeitada');

            return; //Se quer que pare de executar
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na Promise.');
        }, tempo);
    });
}

/*
    Promise.all()     -> Resolve todas as promises na ordem correta
    Promise.race()    -> Retorna a primeira promise que for resolvida
    Promise.resolve() -> Entrega uma Promisse prometida.
    Promise.reject()  -> Entrega uma Promisse rejeitada.
*/
console.log('**********Principais Métodos************');

//----------------------------------Promisse.all()----------------------------------
const arrayPromisesAll = [
    'Primeiro Vlr - All()',
    myPromise('PromiseAll 1', rand(1, 3)),
    myPromise('PromiseAll 2', rand(1, 3)),
    myPromise('PromiseAll 3', rand(1, 3)),
    'Outro vlr - All()'
];
Promise.all(arrayPromisesAll)
.then(valor => {
    console.log('--------------Promisse.all()--------------');
    console.log(valor);
    console.log('------------------------------------------');
    console.log('');
})
.catch(error => {
    console.log(error);
});

//---------------------------Promisse.race()----------------------------
const arrayPromisesRace = [
    //'Primeiro Vlr - Race()', //Como isso não é uma promise, sempre será entregue esse valor primeiro, pois sempre será resolvido 1
    myPromise('PromiseRace 1', rand(1, 5)),
    myPromise('PromiseRace 2', rand(1, 5)),
    myPromise('PromiseRace 3', rand(1, 5)),
    //myPromise(1000, rand(1, 3)),
    //'Outro Vlr - Race()'
];
Promise.race(arrayPromisesRace)
.then(vlr => {
    console.log('-------------Promisse.race()--------------');
    console.log(vlr);
    console.log('------------------------------------------');
    console.log('');
})
.catch(e => {
    console.log(e);
})

//---------------------------Promisse.resolve()----------------------------//
function pageDownload(){
    const inCache = false; //true
    if(inCache)
        return Promise.resolve('Página em cache');
    else{
        return myPromise('Download da página realizado.', 3000);
    }
}

pageDownload()
    .then((result) => {
        console.log('------------Promisse.resolve()------------');
        console.log(result);
        console.log('------------------------------------------');
        console.log('');
    })
    .catch((err) => {
        console.log(err);
    });

//---------------------------Promisse.reject()----------------------------//
function csvDown(){
    const inCache = true;
    if(inCache)
        return Promise.reject('Aguardando leitura CSV');
    else{
        return myPromise('Download do arquivo realizado.', 3000);
    }
}

csvDown()
    .then((result) => {
        console.log('------------Promisse.reject()------------');
        console.log(result);
        console.log('------------------------------------------');
        console.log('');
    })
    .catch((err) => {
        console.log('------------Promisse.reject()------------');
        console.log('Erro do rejeact.', err);
        console.log('------------------------------------------');
        console.log('');
    });