/*
CONSTRUCTOR FUNCTIONS - Funções construtoras criam e retornam os objetos
OBSERVACAO: Na função construtora SEMPRE deve iniciar a primera letra com letra maiuscula
EXEMPLO:
  Factory Function....: createPeople(...){....};
  Constructor Function: const nameVariavel = new People(...);
*/
function People(name, lastName){
  //Atributos/Métodos Privados
  const ID = 1;
  const metodoPrivado = function() { console.log(`${this.name } : Sou método privado.`) };
  
  //Atributos/Métodos Públicos
  this.name = name;
  this.lastName = lastName;

  this.metodoPublico = function(){ console.log(`${ID} ${this.name } ${this.lastName}: Sou método público.`); };
}

const people1 = new People('Douglas', 'Lima');
//console.log(people1.metodoPrivado);

const people2 = new People('Ótavio', 'Berk');
console.log(people2.metodoPublico());
/* */
