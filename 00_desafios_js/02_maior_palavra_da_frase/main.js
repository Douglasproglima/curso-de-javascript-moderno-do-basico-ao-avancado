
/* Retornar a maior palavra de uma frase.*/

function maxWorldInPharse(str){
    let words = str.split(' ');
    let maxWord = '';
    
    for(let word of words){
        if(word.length > maxWord.length)
            maxWord = word;
    }

    return maxWord;
}

const pharse1 = 'Douglas AntonioSeverinoCostaLimaMariaFaria Lima'; //AntonioSeverinoCostaLimaMariaFaria =  34 
const pharse2 = 'Douglas Fernando de Faria Lima'; //Fernando = 8

console.log(maxWorldInPharse(pharse1));
console.log(maxWorldInPharse(pharse2));