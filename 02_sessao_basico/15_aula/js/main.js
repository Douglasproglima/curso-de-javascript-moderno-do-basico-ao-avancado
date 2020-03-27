let n1 = 9.56;
let n2 = Math.round(n1);
console.log(Math.max(1, 3, 5, 7, 8, 2, 4, 6, 9, 1000, -21, 1524.25555));
console.log(Math.min(1, 3, 5, 7, 8, 2, 4, 6, 9, 1000, -21, 1524.25555));

let numberHandom = 0;
let numberHandomAll = [];

let i = 0;
while (i <= 10) {
  numberHandom = Math.round(Math.random() * (1000 - 9) + 5);
  numberHandomAll.push(numberHandom);
  i++;
}
console.log(numberHandomAll);

/* Exponencial*/
console.log("-------Exponencial-------");
console.log(Math.pow(2, 10)); //2 elevado a 10
console.log(2 ** 10);

/*DIVISAO POR ZERO É ACEITA NESSA BAGAÇA DE JS*/
console.log("-------Divisão por Zero-------");
let numDiv = 100 / 0;
console.log(numDiv); //resultado infinity
console.log(typeof numDiv); //o tal retorno infinity é considerado numero - Estou comedo
console.log(!!numDiv);
