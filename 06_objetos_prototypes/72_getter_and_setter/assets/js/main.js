//RESUMO  GETTERS E SETTERS
function Product(description, purchasePrice, salesPrice, stock, active){
  this.description = description;
  this.purchasePrice = purchasePrice;
  this.salesPrice = salesPrice;
  let stockPrivate = stock;

  //Bloqueia a exibição do atributo ou valor ao escopo externo - APENAS UM ATRIBUTO
  //Object.defineProperty(obj, atributo, {configuracoes});
  Object.defineProperty(this, 'stock', {
    enumerable: true, //Nome do atributo/chave
    //value: stock, //Mostra o valor
    //writable: false, // Bloqueia alteração do valor do estoque
    configurable: true, //Bloqueia a reconfiguração e exclusão da chave
    get: function(){ return stockPrivate; },
    set: function(vlr){ 
      if(typeof vlr !== 'number')
        throw new TypeError('Tipo de dados inválido: Esperado dado número.');

        stockPrivate = vlr; 
    }
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
      //value: active,
      //writable: false,
      configurable: true,
      get: () => active,
      set: (vlr) => active = vlr
    }
  });
}

console.log('----------------------------PRODUTO----------------------------');
const cellPhone = new Product('Samsung Galaxy A30', 1.800, 2.600);
cellPhone.stock = 20;
//delete cellPhone.stock //configurable: true deixa apagar a chave
cellPhone.active = false;
cellPhone.stock = 25;
console.log(cellPhone, cellPhone.stock);
console.log(Object.keys(cellPhone));


console.log('----------------------------FACTORY FUNCTION----------------------------');
function createProduct(description, salesPrice, purchasePrice, stock, active){
  return {
    get description(){ return description; },
    set description(vlr){ description = vlr; },
    
    get salesPrice(){ return salesPrice; },
    set salesPrice(vlr){ salesPrice = vlr; },
    
    get purchasePrice(){ return purchasePrice; },
    set purchasePrice(vlr){ purchasePrice = vlr; },
    
    get stock(){ return stock; },
    set stock(vlr){ stock = vlr; },
    
    get active(){ return active; },
    set active(vlr){ active = vlr; }
  }
}

const laptop = createProduct('Noteebook Acer Aspire 9E', 7500.97, 3.550, 5, true);

const showLaptop = [];
showLaptop.push(laptop.description);
showLaptop.push(laptop.salesPrice);
showLaptop.push(laptop.purchasePrice);
showLaptop.push(laptop.stock);
showLaptop.push(laptop.active);

console.log(showLaptop);