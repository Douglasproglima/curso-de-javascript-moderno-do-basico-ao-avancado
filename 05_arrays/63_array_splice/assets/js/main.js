//#region ARRAYS -> SLIPCE(indice, qtde_elemento_a_ser_deletado, novosElementosSeparadosPorVirgula)
/*
    VANTAGENS:
        Remover mais de um item do array
            array.splice(posicaoInicial, posicaoFinal);

        Add mais um item no array
            Add no inicio: array.splice(arrayCopy.lenght+1, Number.MAX_VALUE, 'item1', 'item2');
            Add no fim: array.splice(0,0, 'item1', 'item2');

        Altera um ou mais de um item do array
            array.splice(indice,0, 'item1', 'item2');
        
*/

console.log('Removendo um ou mais itens');
//       Indices Negativos:      -6         -5         -4       -3       -2      -1
//       Indices Positivos:       0          1          2        3        4       5
const arrayLiteral = new Array('Douglas', 'Fernando', 'Lucas', 'Paulo', 'Mori', 'João'); //Array Construtor
const arrayLiteralCopy = [...arrayLiteral];

console.log('Original: ' + arrayLiteralCopy);


//                                         Posicao 3 e a Qtde de Item a ser removidos 2
const arrayRemovidos = arrayLiteral.splice(3, 2); //Remove 2 elementos  2 - Lucas e 3 - Paulo
console.log('arrayRemovidos: ' + arrayRemovidos);
console.log('');

console.log('Adicionando um ou mais itens a partir da posicao definida');
console.log('Original: ' + arrayLiteral);

const newItens = ['Kika', 'Alfred'];

//Apartir da ultima posicao add 2 novos
let arrayNewItens = arrayLiteral.splice(arrayLiteralCopy.length+1, Number.MAX_VALUE, newItens); 
console.log('Add no Final: ' + arrayLiteral);
console.log('');

//Adicionando no inicio do array
arrayNewItens = arrayLiteral.splice(0, 0, newItens); 
console.log('Add no Inicio: ' + arrayLiteral);

console.log('Items Add: ' + arrayLiteral);
console.log('');

console.log('Alterando um ou mais itens a partir da posicao definida');
console.log('Original: ' + arrayLiteral);

const arrayUpdateItens = arrayLiteral.splice(2, 1, 'NOVO MENBRO'); //Apartir da posicao 2 altera 1 item
console.log('Alterado: ' + arrayLiteral);
//#endregion