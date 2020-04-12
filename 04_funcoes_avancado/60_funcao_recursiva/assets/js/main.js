/*
CONSTRUCTOR FUNCTIONS - Funções Recursiva
*/
const array = [];
function recursive(max){
  if(max >= 5000) return; Number.
  max++;
  recursive(max);
  array.unshift(max); 

}
recursive(0);

//Filter() Retorna apenas os elementos do array que atender determinada condição
console.log('FILTER()');
const maxNumber = array.filter((index) => {
  return index <= 10; 
});
console.log(maxNumber);
console.log('----------------------------------------');