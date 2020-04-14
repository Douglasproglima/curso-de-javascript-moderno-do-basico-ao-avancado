//GETTERS E SETTERS
/*
  Resumo sobre objetos:

  Já visto:
    Objetct.keys             (Retorna as chaves)
    Objetct.freeze           (Congela o objeto)
    Objetct.defineProperties (define várias propriedades)
    Objetct.defineProperty   (define uma propriedade)

  Ainda não abordado
    Objetct.values
    Objetct.entries
    Objetct.assign(des, any)
    Objetct.getOwnPropertyDescriptor(o, 'prop')
    ...(spread)
*/

//Objetos assim como Arrays usam a mesma logica quand se atribui um objeto a outro
const product = {descriptor: 'Monitor Samsung LF95', purchasePrice: 321, salesPrice: 215, stock: 10};
const productCloneFake = product;

console.log('/**************************...SPREAD**************************/');
//Para fazer uma copia, a forma mais simples é usando o ...spread
const productClone = {...product};

console.log('/**************************OBJECT ASSIGN******************************/');
//Para fazer uma copia, a outra forma é usando o oject.assign(objA, objB)
const productClone2 = Object.assign({}, product);

productCloneFake.descriptor = 'Alterado o valor'; //Alterou o objeto clone mas alterou tambem o produto
console.log(product);
console.log(productCloneFake);
console.log(productClone); // Esse não foi alterado pois é outro endereço na memoria
console.log(productClone2); // Esse não foi alterado pois é outro endereço na memoria

console.log('/************************OBJECT DEFINEPROPERTY**********************/');
//Alterando as propriedades do item do objeto
/*
VALORES PADRAO:
    value: 'Alterado o valor',
    writable: true,
    enumerable: true,
    configurable: true
*/
Object.defineProperty(productClone2, 'stock', {
  writable: false,
  configurable: false
});
productClone2.descriptor = 'Douglas Lima';
delete productClone2.stock;

console.log('/******************OBJECT GETOWNPROPERTYDESCRIPTOR*****************/');
console.log(productClone2);

//Retorna o o descritor da propriedade do objeto
console.log(Object.getOwnPropertyDescriptor(productClone2, 'descriptor'));

console.log('/**************************OBJECT KEYS*****************************/');
//Retorna um array com as chaves do objeto
console.log(Object.keys(productClone2));

console.log('/**************************OBJECT VALUE****************************/');
//Retorna um array com as valores do objeto
console.log(Object.values(productClone2));

console.log('/**************************OBJECT ENTRIES**************************/');
//Retorna um array com as chaves e valores do objeto
console.log(Object.entries(productClone2));
for(let entry of Object.entries(productClone2)){
  console.log(entry);
}
//Fazendo Desestruração do array direto no for
for(let [chaves, valor] of Object.entries(productClone2)){
  console.log(chaves, valor);
}
//Forma antiga
for(let valor of Object.entries(productClone2)){
  console.log(valor[0], valor[1]);
}