/*
CONSTRUCTOR FUNCTIONS - Funções Recursiva
*/
const array = [];
function recursive(max){
  if(max >= 5000) return;
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

//MAP() Retorna um novo array, ao qual pode retornar apenas uma parte do array
const users = [
  {name: 'Douglas', email: 'd@gmail.com', salary: 1500.99},
  {name: 'Fernando', email: 'f@gmail.com', salary: 3600.50 },
  {name: 'Rafael', email: 'r@gmail.com', salary: 7250.27 }
];
console.log('MAP()');
const userName = users.map((user)=>{
  return user.name;
});
console.log(userName);
console.log('----------------------------------------');

//Find() Retorna o primeiro item do array que atendere determinada condição
console.log('FIND()');
const fourth = array.find(number => {
  return number == 1000;
});
console.log(fourth);
console.log('----------------------------------------');

//ForEach() Executa uma ação para cada item do array
console.log('FOREACH()');
const userEmail = users.forEach(user => {
  console.log(user.email);
});
console.log(userEmail);
console.log('----------------------------------------');

//Some() Retorna um boolean se determinada condição do array for atendida
console.log('SOME()');
const userSalary = users.some(user => {
  return user.salary >= 1500;
});
console.log(userSalary);
console.log('----------------------------------------');

//Some() Retorna um boolean se todos itens do array atender determinada condição
console.log('EVERY()');
const checkSalaryUsers = users.every(user => {
  return user.salary <= 5000;
});
console.log(checkSalaryUsers);
console.log('----------------------------------------');

//Reduce() Executa uma função para cada item do array e retorna um valor único
console.log('REDUCE()');
const sumAllSalaryUsers = users.reduce((sumSalary, user) => {
  return user.salary + sumSalary;
}, 0);
console.log(sumAllSalaryUsers);
console.log('----------------------------------------');

//Includes() Retorna um boolean se pelo ao menos um item do array for encontrado
console.log('INCLUDES()');
console.log(array.includes(1655)); //true
console.log(array.includes(50000)); //false
console.log('----------------------------------------');

//Concate() Retorna um boolean se pelo ao menos um item do array for encontrado
console.log('CONCATE()');
const userAddress = [
  {userId: 1, street: 'Rua Juvenal das Flores', number: 325, city: 'Chapeco', country: 'Brazil'},
  {userId: 2, street: 'Rua Konoha', number: 10, city: 'Orlando', country: 'Japan'},
  {userId: 3, street: 'Rua Hokaido', number: 1025, city: 'Neshvile', country: 'Russia'}
];
const arrayTemp = users.concat(userAddress);
console.log(arrayTemp); //false
console.log('----------------------------------------');

//From() Tem a possibilidade de criar um array a partir de uma string
console.log('FROM()');
const hiragana = 'んわらやまはなたさかありみひにちしきいるゆむふぬつすくうれめへねてせけえをろよもほのとそこお';
const katakana = 'ンワラ	ヤマハナタサカアリミヒニチシキイルユムフヌツスクウヱレメヘネテセケエヲロヨモホノトソコオ';

const separateHiragana = Array.from(hiragana);
const separateKatakana = Array.from(katakana);

console.log(separateHiragana);
console.log(separateKatakana);

const concatHiraganaAndKatakana = separateHiragana.concat(separateKatakana);
console.log(concatHiraganaAndKatakana);