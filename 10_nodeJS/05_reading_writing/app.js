const path = require('path');
const pathFile = path.resolve(__dirname, 'peoples.json');
const write = require('./modules/write');
const read = require('./modules/read');

const peoples = [
    { "name": "Douglas", "lastName": "Lima" },
    { "name": "Fernando", "lastName": "Salvo" },
    { "name": "Ana", "lastName": "Montres" },
    { "name": "Flávia", "lastName": "Bueno" },
    { "name": "Cristiano", "lastName": "Morcir" },
    { "name": "Paulo", "lastName": "Huks" },
    { "name": "Lucas", "lastName": "Jackes" },
    { "name": "Henrique", "lastName": "Ruan" },
    { "name": "Welington", "lastName": "Oliveira" },
    { "name": "Juca", "lastName": "Fachines" }
];

const json = JSON.stringify(peoples, '', 2);
write(pathFile, json);

async function readFile(pathJson) {
    const dates = await read(pathFile)
    renderDates(dates);
}

function renderDates(date) {
    date = JSON.parse(date);
    date.forEach(val => console.log(val.name));
}
readFile(pathFile);