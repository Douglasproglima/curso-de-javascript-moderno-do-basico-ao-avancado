//#region ARRAYS -> CONCAT() -> array.concat(array2);
        
const array1 = [1, 2 ,3 ,4];
const array2 = new Array(5, 6, 7, 8, 9, 10);
const array3 = new Array('Douglas', 'Luiz');

//Unir arrays usando o Concat()
const array4 = array1.concat(array2.concat(array3));
console.log(array4);

//Unir arrays usando o spread(Vai esplar os elementos do array)
const a1 = [1, 2 ,3 ,4];
const a2 = new Array(5, 6, 7, 8, 9, 10);
const a3 = new Array('Douglas', 'Luiz');

const a4 = [...a1, ...a2, ...a3];
console.log(a4);
