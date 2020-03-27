let num1 = 10.54;
let num2 = 2;
let num3 = 5 * "32132asdasds";

//ROUND 2 casas decimais
console.log(num1.toFixed(2));

//Validar se o valor informado é um int ou float
let is_number = Number.isFinite(num2);
console.log(is_number);

//Verifica se o retorno é um NaN
console.log(Number.isNaN(num3));

//IEEE 754-2008 - Padrão de precisão dos números decimais no motor do JS
let n1 = 0.7;
let n2 = 0.1;
console.log(n1 + n2); //O resultado deveria ser 0.8 mas retorna 0.7999999999999999

//Solução para isso é converter usando o parseFloat ou Number e depois usar o toFixed(2)
n1 += n2; //0.8
n1 += n2; //0.9
n1 += n2; //1
n1 += n2; //1.1
n1 += n2; //1.2
n1 += n2; //1.3
n1 += n2; //1.4
n1 += n2; //1.5
n1 += n2; //1.6
n1 += n2; //1.7
n1 += n2; //1.8
n1 += n2; //1.9
n1 += n2; //2

/*
//converte para float e depois aplica o round de 2 casas decimais elimando a 
  precisão conforme o padrão IEEE 754-2008 
*/
n1 = parseFloat(n1.toFixed(2)); // OU n1 = Nu mber(n1.toFixed(2));

console.log(n1);
console.log(Number.isInteger(n1));
