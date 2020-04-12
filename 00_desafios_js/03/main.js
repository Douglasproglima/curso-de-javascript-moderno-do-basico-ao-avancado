/*
    Neste desafio precisamos transformar a string, tornando-a titlecase, ou seja, 
    todas as primeiras letras devem ser maiúsculas  
*/

function upperCaseFirstCaracter(str){
    const words = str.toLowerCase().split(' ');
    
    for(index in words){
        const word = words[index];
        words[index] = word[0].toUpperCase() + word.slice(1);
    }

    return words.join(' ');
}

const title = 'titulo da redação do ano atual';
console.log(upperCaseFirstCaracter(title));