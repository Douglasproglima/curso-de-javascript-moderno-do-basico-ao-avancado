//PROTOTYPES

//Função Construtora -> modelo(class)
function Pessoa(name, lastName){
    this.name = name;
    this.lastName = lastName;
}

//Usando o Prototype
Pessoa.prototype.fullName = () => this.name +''+ this.lastName;

//Instance
const p1 =  new Pessoa('Douglas', 'Lima');
const p2 =  new Pessoa('Rafaela', 'Lima');
console.dir(p1);
console.dir(p2);

console.log('Função Construtora Date() - E os metodos dentro do __Proto__');
const data = new Date();
console.dir(data); //Abrir o console do browser