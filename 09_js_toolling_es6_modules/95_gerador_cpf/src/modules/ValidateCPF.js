export default class ValidateCPF {
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

    validate() {
        this.initialValidade();
        if(this.isSequenceValid()) return false;
        const partialCPF = this.partialCPF();
        const firstDigit = ValidateCPF.createDigit(partialCPF);
        const secondDigit = ValidateCPF.createDigit(partialCPF + firstDigit);
        const newCPF = partialCPF + firstDigit + secondDigit;

        return newCPF === this.cleanCPF;
    }

    static formatCPF(paramCPF) {
        return paramCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4")  
    }

    //Método Static pois não precisa de nada da instancia, tudo é passado como parametro
    static createDigit(partialCPF){
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