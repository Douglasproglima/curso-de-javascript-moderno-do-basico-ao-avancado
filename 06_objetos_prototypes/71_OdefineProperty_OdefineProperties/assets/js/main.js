//RESUMO  Object.defineProperty() e Object.defineProperties()
//Object.freeze => Trava o objeto para que o mesmo não possa ser alterado.

/*
  Travar apenas uma propriedade do Objeto ou Várias
*/

function Product(description, purchasePrice, salesPrice, stock, active){
  this.description = description;
  this.purchasePrice = purchasePrice;
  this.salesPrice = salesPrice;
  this.stock = stock;
  this.active = active;

  //Bloqueia a exibição do atributo ou valor ao escopo externo - APENAS UM ATRIBUTO
  //Object.defineProperty(obj, atributo, {configuracoes});
  Object.defineProperty(this, 'stock', {
    enumerable: true, //Nome do atributo/chave
    value: stock, //Mostra o valor
    writable: false, // Bloqueia alteração do valor do estoque
    configurable: false //Bloqueia a reconfiguração e exclusão da chave
  });

  //Bloqueia a exibição do atributo ou valor ao escopo externo - Vários Atributos
  //Object.defineProperties(obj, {atributo1{configuracoes}, atributo1{configuracoes});
  Object.defineProperties(this, {
    purchasePrice: {
      enumerable: false,
      value: purchasePrice,
      writable: false,
      configurable: false  
    },
    salesPrice: {
      enumerable: true,
      value: salesPrice,
      writable: true,
      configurable: false
    },
    active: {
      enumerable: true,
      value: active,
      writable: false,
      configurable: false
    }
  });
}

console.log('----------------------------PRODUTO----------------------------');
const cellPhone = new Product('Samsung Galaxy A30', 1.800, 2.600, 10, true);

cellPhone.stock = 20;
delete cellPhone.stock //configurable: true deixa apagar a chave
cellPhone.active = false;
console.log(cellPhone);
console.log(Object.keys(cellPhone));


const peoples = [
    {name: 'Douglas', lastName: 'Lima', age: 32, birthday: '26/12/1987'},
    {name: 'Pedro', lastName: 'Oliveira', age: 30, birthday: '08/03/1991'},
    {name: 'John', lastName: 'Chuke', age: 23, birthday: '01/03/1996'},
    {name: 'Jonathan', lastName: 'Jenvi', age: 61, birthday: '01/03/1950'},
    {name: 'Ruy', lastName: 'Ruanes', age: 70, birthday: '01/03/1955'},
    {name: 'Bryan', lastName: 'Kursh', age: 40, birthday: '10/10/1980'}
];
/*
console.log('----------------------------PESSOA ORIGINAL----------------------------');
console.log(peoples);
console.log(' ');
*/