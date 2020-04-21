import ValidateCPF from './ValidateCPF';

export default class GeneratorCPF {
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    createNewCPF() {
        const partialCPF = this.rand();
        const firstDigit = ValidateCPF.createDigit(partialCPF);
        const secondDigit = ValidateCPF.createDigit(partialCPF + firstDigit);
        const newCPF = partialCPF + firstDigit + secondDigit;

        return ValidateCPF.formatCPF(newCPF);
    }
}