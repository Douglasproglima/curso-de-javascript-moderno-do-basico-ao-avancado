import multiplicar, { nameExport as nameImport, sum } from './modulo1';
import { Company } from './modulo1';
//import * as myModulo from './modulo1'; //Importa tudo

console.log(sum(2, 1));
console.log(nameImport);
console.log('');

console.log(multiplicar(2.65, 8));
console.log('');


const brazilCompany = new Company(1, 'Brasilian Day', 'www.brazilianday.com.br');
console.log(brazilCompany);