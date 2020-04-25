const path = require('path');
const currency = require('../../controller/currency');
module.exports = currency;

console.log(path.resolve(__dirname, '..', '..', 'controller', 'currency'));