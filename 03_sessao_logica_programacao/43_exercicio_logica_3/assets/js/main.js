/*
    Escreva uma função que recebe um número e
    retorne o seguinte resultado:
        Número é divisivel por 3 = Fizz
        Número é divisivel por 5 = Buzz
        Número é divisivel por 3 e 5 = FizzBuzz
        Número NÃO é divisivel por 3 e 5 = Retorne o próprio número
        
    Checar se o número é relamente um número
    Use a função com números de 0 a 100
*/
function contextMain(){
    
    function fizzBuzzCheck(num){
        let result = num;
        if(typeof num == 'number'){
            if((num % 3 === 0) && (num % 5 === 0)) result = 'FizzBuzz';
            else if(num % 3 === 0) result = 'Fizz';
            else if(num % 5 === 0) result = 'Buzz';
        }else
            result = num;

        return result;
    }

    for(let i = 0; i <= 100; i++){
        console.log(i, fizzBuzzCheck(i));
    }
}

contextMain();