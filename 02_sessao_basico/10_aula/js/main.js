/*Tipos de Dados Primitivos> String, Number, Undefined, Null, Boolean, Symbol*/
/*STRING*/
const name = "Douglas Aspas Duplas";
const name1 = 'Douglas Aspas Simples';
const name2 = `Douglas Crase`; //Template strigs ou interpolação de strings

/*NUMBER*/
const num1 = 10;
const num2 = 10.3;

/* UNDEFINED AND NULL */
let nameStudent; //Definido pelo motor do JS
const lastNameStudent = null; //Não aponta para nenhum local na memory

/*BOOLEAN*/
const isAprovate = true;
const isNotAprovate = false;
console.log(typeof isAprovate, typeof nameStudent, typeof lastNameStudent);


/*TIPOS DE DADOS VS ATRIBUICAO*/
let a = [1, 2]
let b = a; //Passagem de valor por referencia
console.log(a, b);

b.push(3); //Na teória deveria atribui o valor 3 apenas para variavel b
console.log(a, b); //Porém como foi um atribuicao de valores ambas as variaveis apontam para o mesmo endereço da memoria.

let c = 1;
let d = c;
console.log(c, d);
d = 5; //Nesse caso alterou pois
console.log(c, d);