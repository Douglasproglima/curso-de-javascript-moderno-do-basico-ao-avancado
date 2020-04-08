//#region Escopo Léxico

/* 
    Escopo Léxico: Nada mais que o escopo de funções consegue enxergar as 
    variaveis e parametros fora do seu escopo
*/

const nome = 'Douglas Lima'; //Global

function funcaoEscopoPrivado(){
    //Se habilitar essa variavel a funcao irá dar preferencia para esse item que possui o mesmo nome da variavel externa
    //const nome = 'Fernando'; 
    console.log(nome); // Dentro do escopo da função é possível acessar as coisa de fora da function
}

function useFuncaoEscopoPrivado(){
    //Não acontece nada, porque a função que chama o nome é a anterior que por sinal usa a variavel global
    const nome = 'Rafaela'; 
    funcaoEscopoPrivado(); // Consegue chamar a função fora do seu escopo
}

useFuncaoEscopoPrivado();
//#endregion