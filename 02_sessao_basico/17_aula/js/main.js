/* Criadas de forma literal */
function myFunction(){
    console.log('Forma Literal');
}

/* Passadas como parâmetros para outras funções */
function myFunctionParam(param){
    return param;
}
myFunctionParam(new function(){
                    console.log('Função com parâmetro');
                })

/* Atribuídas para propriedades de objetos; */
//definindo um objeto com uma propriedade que é uma função
let obj = {
    start:function(){}
};

//atribuindo uma função como propriedade para um objeto dinamicamente
const raiz = function(n){
    return n ** 0.5;
}
console.log(`A raiz quadra de 9 é: ${raiz(9)}`)
//Com Arrow Function
const raiz2 = n => n ** 0.5
console.log(`(Arrow Function) A raiz quadra de 9 é: ${raiz2(9)}`)

//let obj = {};
//obj.myFunction = new function(){};

/* Retornadas como resultado de uma função */
function myFunction(){
    return new function(){} //retornando uma função como resultado
}

/* Possuir propriedades que podem ser atribuídas dinamicamente */
function myFunction0(){}
myFunction0.starTime = 0; // atribuindo uma propriedade para a função
//let myFunction0 = new function(){}
myFunction0.starTime = 0;

/* ------------------Arrow functions------------------ */
let myFunctionArrow = (x, y) => x + y
console.log(myFunctionArrow(1,3)) // o resultado é 4
//O exemplo acima é o equivalente a isso:
let myFunctionArrow0 = function(x, y){
    return x + y;
};

//Outras formas de Arrow Functions
// corpo com mais de uma linha
let myFunctionArrow1 = (x, y) => {
    let z = 2 
    return x + y + z;
};
// apenas um parâmetro
let myFunctionArrow2 = x => x * 2

let myFunctionArrow3 = x => {
        return x * 2
};
let myFunctionArrow4 = () => {
    console.log("Arrow function!")
};