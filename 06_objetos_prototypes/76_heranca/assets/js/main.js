//PROTOTYPES -> HERANÇA
console.log('*******************HERANÇA*********************');

//#region Modelo de Produto
function ModelProduct(name, pricePurchase){
    this.name = name;
    this.pricePurchase = pricePurchase;
}
ModelProduct.prototype.increase = function(quantity){
    this.pricePurchase += quantity;
};
ModelProduct.prototype.discount = function(quantity){
    this.pricePurchase -= quantity;
};

const produto = new ModelProduct('Produto', 21, 5);
console.log(produto);
produto.increase(10.5);
console.log(produto);
console.log('');
//#endregion

//#region Calcaldos 
//Funcao Construtora
function Shoes(name, pricePurchase, stock, priceSale, model, type, color, size){
    ModelProduct.call(this, name, pricePurchase); //Herda os atributos da função construtora pai

    //Cria os próprios atributos da função atual.
    this.stock = stock;
    this.priceSale = priceSale;
    this.model = model;
    this.type = type;
    this.color = color;
    this.size = size;
}

//Altera o prototype de Shoes que recebe um novo prototype criado apontando para ModelProduct
Shoes.prototype = Object.create(ModelProduct.prototype);

//Relaciona novamente o Prototype Shoes ao dele mesmo, sem essa linha objeto não possui construtor
Shoes.prototype.constructor = Shoes;

//Sobrescreve metodo increase() e discount() do ModelProduct
Shoes.prototype.increase = function(percentage){
    this.priceSale = Math.round(this.priceSale + (this.priceSale * (percentage / 100)), 2);
}

Shoes.prototype.discount = function(percentage){
    this.priceSale = Math.round(this.priceSale - (this.priceSale * (percentage / 100)), 2);
}

//Instanciando o objeto dessa forma o construtor é o do próprio objeto e o proto é o ModelProduct
const shoes = new Shoes('Rebook', 78.55, 10, 85.55, 'Elegance France', 'France', 'black');
console.log(shoes);
shoes.increase(5);
console.log(shoes);
console.log('');
//#endregion

//#region Roupas
function Clothes(name, pricePurchase, priceSale, model, category, color, size, stock){
    ModelProduct.call(this, name, pricePurchase);

    this.priceSale = priceSale;
    this.model = model;
    this.category = category;
    this.color = color;
    this.size = size;
    
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,
        get: function(){ return stock; },
        set: function(value){ 
            if(typeof value !== 'number') return;
            stock = value; 
        }
    });
}

Clothes.prototype = Object.create(ModelProduct.prototype);
Clothes.prototype.constructor = Clothes;

Clothes.prototype.increase = function(percentage){
    this.priceSale = Math.round(this.priceSale + (this.priceSale * (percentage / 100)),2);
};

Clothes.prototype.discount = function(percentage){
    this.priceSale = Math.round(this.priceSale - (this.priceSale * (percentage / 100)),2);
};

const tShirt = new Clothes('Camisa Polo', 10.56, 16.9, 'Polo', 'T-shirt', '#ffff', 'P', 50);
console.log(tShirt);
tShirt.increase(15);
console.log(tShirt);
console.log('');

const shorts = new Clothes('Permuda FG', 5.23, 12.7, 'Praiana', 'Shorst Beach', 'black', 'GG', 21);
console.log(shorts);
shorts.increase(25);
console.log(shorts);
console.log('');

const jaquet = new Clothes('Jaqueta', 250.87, 420.82, 'Rock', 'Jaqueta', 'blue', 'M', 100);
jaquet.stock = 55;
console.log(jaquet);
jaquet.increase(56);
console.log(jaquet);
console.log('');
//#endregion