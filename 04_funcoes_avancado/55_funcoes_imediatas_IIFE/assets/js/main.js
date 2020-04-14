
// IIFE - Immediately invoked function expression
function escopeLima() {
  //#region Funções Imediatas - IIFE
    console.log('EscopoLima');
  
  //#endregion
}
escopeLima();

//Formato (function(n1, n2){body....})(1, 2)
(function(name, lastName){
  
  function getName(){ return name; }
  function getLastName(){ return lastName; }
  function getAllName(){
    console.log(`Nome Completo: ${getName()} ${getLastName()}`);
  }

  getAllName();
})('Douglas', 'Lima');