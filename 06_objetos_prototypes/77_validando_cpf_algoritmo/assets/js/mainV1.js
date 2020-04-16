const CPF = '111.111.111-11'; //const CPF = '705.484.450-52'; //const CPF = '185.844.856-76';
const INITIAL_COUNTDOWN = 0;

const unFormatCPF = (paramCPF) => paramCPF.replace(/\D+/g, '');
const formatCPF = (paramCPF) => paramCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");

function getPartialCPF(paramCPF) {
    const strCPF = unFormatCPF(paramCPF);
    const partialCPF = strCPF.slice(0, -2);
    return partialCPF;
};

function createDigite(partialCPF){
    const arrayCPF = Array.from(partialCPF);
    
    let countDown = arrayCPF.length +1;
    const total = arrayCPF.reduce((sumNumbers, number) => {
        sumNumbers += (countDown * Number(number));
        countDown--;
        return sumNumbers;
    }, INITIAL_COUNTDOWN);

    const digite = (11 - (total % 11));
    return digite > 9 ? '0' : String(digite);
}

function isSeqValid(cleanCPF) {
    const sequence = cleanCPF[0].repeat(cleanCPF.length);
    return sequence === cleanCPF;
};

const isValidateCPF = (originalCPF, newCPF) => originalCPF === newCPF;

function initalValidateCPF(paramCPF){
    if(paramCPF === 'undefined') return false;
    const cleanCPF = unFormatCPF(paramCPF);
    if(cleanCPF.length !== 11) return false;
    if(isSeqValid(cleanCPF)) return false;
}

function validate(paramCPF){

    initalValidateCPF(paramCPF);
    const partialCPF = getPartialCPF(paramCPF); //9 digitos do CPF sem os caracteres
    const firstNumber = createDigite(partialCPF);
    const secondNumber = createDigite(partialCPF + firstNumber);
    const newCPF = partialCPF + firstNumber + secondNumber;
    return isValidateCPF(unFormatCPF(paramCPF), newCPF);
}

if(validate(CPF))
    console.log(`O CPF ${CPF} é inválido.`);
else
    console.log(`O CPF ${CPF} é válido.`);