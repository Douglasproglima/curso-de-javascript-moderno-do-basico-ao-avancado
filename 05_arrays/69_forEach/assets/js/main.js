//COMBINACAO DE FILTER, MAP E REDUCE
const arrayNumber = [6, 7, 8, 9, 1026, 1, 41, 56, 2 ,3 ,4, 129, 5, 10, 1483.45, 21, 29, 35];
console.log('----------------------------ORIGINAL----------------------------');
console.log(arrayNumber);
console.log(' ');

let total = 0; 
arrayNumber.forEach((el) => total += el ); //Faça com Reduce();
console.log(total);