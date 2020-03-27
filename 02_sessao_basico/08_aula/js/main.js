const name = 'Douglas';
const lastName = 'Lima';
const old = 32;
const weight = 68;
const height = 1.78;
let imc = weight / (height * height); //p / (a * a)
const yearBorn = new Date(1987, 12, 26).getFullYear;

const msg = `${name} ${lastName} tem ${old} anos, pesa ${weight} kg e tem ${height} de altura e seu IMC é de ${Math.round(imc)}`;
console.log(msg);