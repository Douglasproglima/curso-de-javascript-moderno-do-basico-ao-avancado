/*
    Escreva uma função chamada ePaisagem() que
    recebe dois argumentos(largura e Altura) de 
    uma imagem(number).
    Retorne true se a imagem estiver no modo paisagem.
*/
function contextMain(){
    function ePaisagem(weight, height){
        return weight > height;
    }

    const ePaisagem1 = (weight, height) => {
        return weight > height;
    }

    const ePaisagem2 = (weight, height) => weight > height;

    console.log(ePaisagem2(1920, 1080));
}

contextMain();