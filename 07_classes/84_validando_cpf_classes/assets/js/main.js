class ValidadeCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cleanCPF', {
            writable: false, //Não pode escrever
            enumerable: true, //True: irá aparecer no console.log
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        });
    }

    partialCPF() {
        return this.cleanCPF.slice(0, -2);
    }

    isSequenceValid() {
        const sequence = this.cleanCPF.charAt(0).repeat(11);
        return this.cleanCPF === sequence; 
    }

    initialValidade() {
        if(!this.cleanCPF) return false;
        if(this.cleanCPF.length !== 11) return false;
        if(this.cleanCPF === 'undefined') return false;
        if(typeof this.cleanCPF !== 'string') return false;
    }

    validade() {
        this.initialValidade();
        if(this.isSequenceValid()) return false;
        const partialCPF = this.partialCPF();
        const firstDigit = ValidadeCPF.getDigit(partialCPF);
        const secondDigit = ValidadeCPF.getDigit(partialCPF + firstDigit);
        const newCPF = partialCPF + firstDigit + secondDigit;

        return newCPF === this.cleanCPF;
    }

    //Método Static pois não precisa de nada da instancia, tudo é passado como parametro
    static getDigit(partialCPF){
        let sumDigit = 0;
        let countdown = partialCPF.length + 1;
        for(let strNumeric of partialCPF){
            sumDigit += (countdown * parseInt(strNumeric))
            countdown--;
        }

        const digit = 11 - (sumDigit % 11);
        return digit > 9 ? '0' : String(digit);
    }
}

const CPF = '111.111.111-11'; 
//const CPF = '185.844.856-76';
//const CPF = '705.484.450-52'; 
//const CPF = '076.392.316-80';
let cpf = new ValidadeCPF(CPF);
if(cpf.validade())
    console.log(`O CPF ${CPF} é válido.`);
else
    console.log(`O CPF ${CPF} é inválido.`);