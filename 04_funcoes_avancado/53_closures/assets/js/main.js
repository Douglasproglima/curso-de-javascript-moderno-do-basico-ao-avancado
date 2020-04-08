//#region Closures

/*
    Closure: 
        É a funcionalidade que permite que uma função anonima(funcao interna dentro de outra que usa o return)
    possa acessar os itens do seu escopo, do escopo da função pai e o escopo global.
*/

const flat = true; //Escopo global

function closure1(param){
    const test = 'FERNANDO'; //escopo da function PAI
    return function(){
        return param; //Escopo Local
    }
}

const c1 = closure1('Douglas');
const c2 = closure1('Lima');

console.dir(c1); //DIR mostra os detalhes dos escopos acessados pelas funções
console.dir(c2);
//#endregion