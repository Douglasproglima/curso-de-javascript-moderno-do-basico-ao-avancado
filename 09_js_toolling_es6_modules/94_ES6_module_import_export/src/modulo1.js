const name = 'Douglas';
const lastName = 'Lima';
const age = 32;

function sum(x, y) {
    return x + y;
}

//Valor padrão do export, ao importar é necessário dar um nome aleatório
export default (n1, n2) => n1 * n2;  

//Exportando varios itens de uma vez
export {name as nameExport, lastName, age, sum };

//Exportando direto no item
export class Company {
    constructor(id, descrition, website){
        this.id = id;
        this.descrition = descrition;
        this.website = website;
    }
}