//const CPF = '111.111.111-11'; 
const CPF = '705.484.450-52'; 
//const CPF = '185.844.856-76';
const INITIAL_COUNTDOWN = 0;

function ValidateCPF(paramCPF){
    Object.defineProperties(this, {
        formatCPF: {
            enumerable: true,
            get: function(){
                return this.unFormatCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
            }
        },
        unFormatCPF: {
            enumerable: true,
            get: function(){
                return paramCPF.replace(/\D+/g, '');
            }
        }
    });
}

ValidateCPF.prototype.isSequenceNumber = function(){
    const sequencialNumber = this.unFormatCPF[0].repeat(this.unFormatCPF.length);
    return sequencialNumber === this.unFormatCPF;
};
ValidateCPF.prototype.validate = function(){
    if(this.unFormatCPF.length !== 11) return false;
    if(this.unFormatCPF === 'undefined') return false;
    if(this.isSequenceNumber()) return false;

    const partialCPF = this.unFormatCPF.slice(0, -2);
    const firstDigit = this.createDigit(partialCPF);
    const secondDigit = this.createDigit(partialCPF + firstDigit);
    const newCPF = (partialCPF + firstDigit + secondDigit);

    return newCPF === this.unFormatCPF;
};
ValidateCPF.prototype.createDigit = function(partialCPF){
    const arrayCPF = Array.from(partialCPF);
    let countdown = arrayCPF.length + 1;
    const sumDigits = arrayCPF.reduce((acu, val) => {
        acu += (countdown * Number(val));
        countdown--;
        return acu;
    }, INITIAL_COUNTDOWN);
    
    const digit = (11 - (sumDigits % 11));
    return digit > 9 ? '0' : String(digit);
};

const cpf = new ValidateCPF(CPF);
if(cpf.validate())
    console.log(`O CPF ${cpf.formatCPF} é válido.`);
else
    console.log(`O CPF ${cpf.formatCPF} é inválido.`);