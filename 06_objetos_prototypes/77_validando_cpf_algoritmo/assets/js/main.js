//const CPF = '111.111.111-11'; 
//const CPF = '185.844.856-76';
//const CPF = '705.484.450-52'; 
const CPF = '076.392.316-80'; 
const INITIAL_COUNTDOWN = 0;

function ValidateCPF(paramCPF){
    Object.defineProperty(this, 'cleanCPF', {
        enumerable: true,
        get: function(){
            return paramCPF.replace(/\D+/g, '');
        }
    });
}

ValidateCPF.prototype.validate = function() {

    if(this.cleanCPF === 'undefined') return false;
    if(this.cleanCPF.length !== 11) return false;
    if(this.isSequencialNumeric()) return false;
    
    const partialCPF = this.cleanCPF.slice(0, -2);
    const firstDigit = this.createDigit(partialCPF);
    const secondDigit = this.createDigit(partialCPF + firstDigit);
    const newCPF = partialCPF + firstDigit + secondDigit;

    return newCPF === this.cleanCPF;
}

ValidateCPF.prototype.isSequencialNumeric = function(){
    const sequencial = this.cleanCPF[0].repeat(this.cleanCPF.length);
    return sequencial === this.cleanCPF;
}

ValidateCPF.prototype.createDigit = function(partialCPF){
    const arrayCPF = Array.from(partialCPF);
    let countDown = arrayCPF.length + 1;
    const sumNumber = arrayCPF.reduce((acumulate, value) => {
        acumulate += (countDown * Number(value));
        countDown--;
        return acumulate;
    }, INITIAL_COUNTDOWN);
    
    const digit = (11 - (sumNumber % 11));
    return digit > 9 ? '0' : String(digit);
};

const cpf = new ValidateCPF(CPF);
if(cpf.validate())
    console.log(`O CPF ${CPF} é válido.`);
else
    console.log(`O CPF ${CPF} é inválido.`);