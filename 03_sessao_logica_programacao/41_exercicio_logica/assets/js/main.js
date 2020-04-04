// Escreva uma função que recebe 2 números e retorne o maior deles

function contextMain(){

    //Código Porco
    function getMaxNumber1(num1, num2){
        if(num1 > num2){
            return num1;
        }else{
            return num2
        }
    }

    //Código Aceitavel
    function getMaxNumber2(num1, num2){
        return num1 > num2 ? num1 : num2;
    }

    //ArrowFunction - Código Aceitavel
    const getMaxNumber3 = (num1, num2) => {
        return num1 > num2 ? num1 : num2;
    };

    //Aceitavel mas confuso
    const getMaxNumber4 = (num1, num2) => num1 > num2 ? num1 : num2;

    console.log(getMaxNumber4(1474, 2));
}

contextMain();