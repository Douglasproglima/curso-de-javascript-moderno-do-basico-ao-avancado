
// IIFE - Immediately invoked function expression
function escopeLima() {
  //#region Funções Imediatas - IIFE
    console.log('EscopoLima');
  
  //#endregion
}
escopeLima();

//Formato (function(n1, n2){body....})(1, 2)
(function(name, firstName){
  
  function getName(){ return name; }
  function getFirstName(){ return firstName; }
  function getAllName(){
    console.log(`Nome Completo: ${getName()} ${getFirstName()}`);
  }

  getAllName();
})('Douglas', 'Lima');