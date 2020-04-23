const name = 'Douglas';
const lastName = 'Lima';

const speakName = () => `Nome completo: ${name} ${lastName}`;

exports.NAME = name;
exports.lastName = lastName;
exports.speakName = speakName;
//console.log(exports);

class People {
    constructor(name) {
        this.name = name;
    }
}

exports.People = People;