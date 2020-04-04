//CONTINUE: Continua para próxima iteração
//BREAK...: Sai do laço

function contextMain(){
    const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    for (let numero of numberList) {
        if(numero === 2) continue; //Pula a iteração do numero 2

        console.log(numero);

        if (numero === 7) break; //Encontrou o 7 para o laço
    }
};
contextMain();
