function escopeLima() {
  //#region Callback

  /*FUNÇÕES DE CALLBACK
            São funções que são executadas quando uma ação finaliza
        */

  function rand(min = 1000, max = 2000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
  }

  function f1(callback) {
    setTimeout(function () {
      console.log(`F1, ${Math.floor(rand() / 60)} milesegundos`);
      if (callback) callback();
    }, rand());
  }
  function f2(callback) {
    setTimeout(function () {
      console.log(`F2, ${Math.floor(rand() / 60)} milesegundos`);
      if (callback) callback();
    }, rand());
  }
  function f3(callback) {
    setTimeout(function () {
      console.log(`F3, ${Math.floor(rand() / 60)} milesegundos`);
      if (callback) callback(); //Parametro que irá definir a prioridade de execução dessa funcao
    }, rand());
  }

  //Se não tivesse usado a função de callback setTimeout() a ordem seria  f1, f2, f3 e consolo.log(...);
  //f1();
  //f2();
  //f3();

  /* 
    Se houvesse a necessidade de executar as funções em ordem definida 
    é necessario usar a função de callback 
    */

  //Dessa forma prioriza a execucao das funcao em primeiro
  /*
    f1(function() {
        f2(function() {
            f3(function() {
                console.log('ULTIMO ITEM A SER EXECUTADO?');
            });
        });
    }); 
    */

  //Refatorando hadouken acima
  f1(f1Callback);

  function f1Callback() {
    f2(f2Callback);
  }
  function f2Callback() {
    f3(f3Callback);
  }
  function f3Callback() {
    console.log("ULTIMO ITEM A SER EXECUTADO?");
  }
  //#endregion
}
escopeLima();
