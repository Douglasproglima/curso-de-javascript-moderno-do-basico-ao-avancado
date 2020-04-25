const CurrencyLoader = require('./app/models/services/loaderContext');
const pathAbsoluto = require('./app/models/routines/currencyRoutine');
const multiply = require('./mod');
console.log(multiply(2,2));

const real = new CurrencyLoader('Real', 'R$');
console.log(real);
console.log(pathAbsoluto());