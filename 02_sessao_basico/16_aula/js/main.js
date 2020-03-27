const alunos = ['Douglas', 'Takeshi', 'Niikura'];

alunos[alunos.length] = 'Mori';
alunos[alunos.length] = 'Izumi';
alunos[alunos.length] = 'Inagaki';
console.log(alunos);

console.log('----------------------');
alunos.unshift('Kitamura'); //Add no começo
alunos.push('Nakanishi'); //Add na última posição
console.log(alunos);

console.log('----------------------');
const alunosRemovidos = [];
alunosRemovidos.push(alunos.shift()); //remove o primeiro valor do array => Kitamura
alunosRemovidos.push(alunos.pop()); //remove o último valor do array -=> Nakanishi

console.log('Lista de Alunos Atualizada: ' + alunos);
console.log('Alunos removiso...........: ' + alunosRemovidos);

console.log('----------------------');
delete alunos[3]; // Remove apenas o valor, mas o índice ainda existe com o valor undefined
console.log(alunos);

console.log('----------------------');
//Acessando um index/value do array que não existe, nesse o caso o JS coloca o valor undefined
console.log(alunos[51]); 

console.log('----------------------');
console.log(alunos.slice(0, 1)); //Retornando elementos especificos do array
console.log(alunos.slice(0, -2)); //Retornando elementos especificos do array

console.log('----------------------');
console.log(typeof alunos); //Arrya é um objeto indexado
const num1 = 10;
console.log(alunos instanceof Array, num1 instanceof Array); //Verifica se é uma instancia de um array