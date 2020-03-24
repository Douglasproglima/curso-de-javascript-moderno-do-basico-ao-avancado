let oneString = 'Uma "string" ';
console.log(oneString);
console.log("");

let barraString = "texto e \\";
console.log(barraString);
console.log("");
//------------01234567891011
const name = "Douglas Lima";

/*Em JS as strings são indexadas ou seja é criado um índice para cada caractere informado dentro das aspas*/
console.log(name[20], name[1]); //undefined pois não existem nenhum caractere alocado no índice 20
console.log("");

/*
O mesmo resultado pode ser feito usando string.charAt() a diferença é que caso seja informado um vlr fora do o índice
não irá gerar erro igual o exemplo anterior
*/
console.log(name.charAt(0)); //undefined pois não existem nenhum caractere alocado no índice 100
console.log("");

/*Para pegar o código da TABELA ASCII de uma caractere dentro da string use a function string.charCodeAt()*/
console.log(name.charCodeAt(7)); //Posição 7 é o "Espaço" entre o "Douglas" e "Lima"
console.log("");

/*Encontrar a posição inicial de uma string informada string.indexOf(texto)*/
console.log(name.indexOf("Li"));
console.log("");

/*Expressão Regular - match() search() e replace() */
console.log(name.match(/[A-Z, a-z]/g)); //Procura em toda a string letras minusulcas e maisculas o retorno é um array pois foi informado o [...]
console.log("");

console.log(name.search(/L/)); //Retorna apenas um índice
console.log("");

console.log(name.replace(/a/g, "4")); //Essa função vc pode ou não usar uma exprenssão regular e alterar o valor encontrado pelo segundo valor informado depois da virgula
console.log("");

/* splice pega o inicio ate o fim de uma ocorrenvia definida*/
let csvFile =
  "id, nome, sobreNome, cel;1, Douglas, Lima, 37 98838 5696;2, Lucas, Machado, 37 999897 8978;";
let csvPosHeader = csvFile.slice(0, csvFile.search(/;/)).length + 1;
let csvFileBodyAll = csvFile.substring(csvPosHeader, csvFile.length - 1);
let csvFileBody = csvFileBodyAll.split(";");
console.log(csvFileBody);
