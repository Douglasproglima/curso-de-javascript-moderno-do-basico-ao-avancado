/*
    Neste desafio precisamos transformar a string, tornando-a titlecase, ou seja, 
    todas as primeiras letras devem ser maiúsculas  
*/

/*Primera Forma -> For Nomal */
function upperCaseFirstCaracter1(str){ 
    
    const words = str.toLowerCase().split(' '); //Converte a string no array pelos espaços
    for(index in words){
        const word = words[index];
        words[index] = word[0].toUpperCase() + word.slice(1);
    }
    return words.join(' '); // Faz o array virar uma string novamente
}

/* Usando Map() */
function upperCaseFirstCaracter2(str){

    let words = str.split(' ').map(word => {
        let firstLetter = word.slice(0, 1); //Corta uma parte do array
        let rest = word.slice(1); //Não foi passado o segundo parametro, nesse caso pega até o final
        firstLetter = firstLetter.toUpperCase();

        return `${firstLetter}${rest}`;
    });

    return words.join(' ');
}

const title = 'titulo da redação do ano atual';
console.log('Old:');
console.log(upperCaseFirstCaracter1(title));

console.log('New:');
console.log(upperCaseFirstCaracter2(title));