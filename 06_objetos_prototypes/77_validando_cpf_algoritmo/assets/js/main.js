//const CPF = '705.484.450-52';
const CPF = '081.873.870-76';
const COUNTDOWN_ONE = [10, 9, 8, 7, 6, 5, 4, 3, 2];
const COUNTDOWN_TWO = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

function contextMain(){

    //#region Méthods
    const unFormatCPF = (paramCPF) => paramCPF.replace(/\D+/g, '');
    const formatCpf = (strCPF) => strCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");

    function getNineFirstNumbers(paramCPF) {
        const cpfNumberStr = unFormatCPF(paramCPF);
        const nineFirstNumbersOfCpf = cpfNumberStr.slice(0, 9);
        return nineFirstNumbersOfCpf;
    };

    function multiplyNumbers(arrayCountdown, arrayCPF){
        
        return arrayCPF.map((number, index) => {
            let countdownInt = parseInt(arrayCountdown[index]);
            let elementToInt = parseInt(number);
            return countdownInt * elementToInt;
        });
    }

    function sumNumbers(numberList){
        const INITIAL_COUNTDOWN = 0;
        return numberList.reduce((sumNumber, numbers) => (sumNumber + numbers), INITIAL_COUNTDOWN);
    }

    function getNewNumber(number) {
        const formula = (11 - (number % 11));
        return validateNewNumber(formula);
    }

    const createNewCPF = (strCPF, firstDigit, secondDigit) =>  `${strCPF}${firstDigit}${secondDigit}`;
    const validateNewNumber = (number) => number > 9 ? 0 : number;
    const isValidateCPF = (originalCPF, newCPF) => originalCPF === newCPF;
    //#endregion

    //#region Method Main
    function validateCPF(paramCPF){
        const strCPF = getNineFirstNumbers(paramCPF); //9 digitos do CPF sem os caracteres
        const arrayCPF = Array.from(strCPF); //Transforma cada numero em um elemento do array
        
        const firstStreak = multiplyNumbers(COUNTDOWN_ONE, arrayCPF);
        const sumFirstNumber = sumNumbers(firstStreak);
        const firstNumber = getNewNumber(sumFirstNumber);
        
        //Faz a cópia do array original para adicionar o novo número gerado pela sequencia regressiva um
        const arrayCopyCPF = [...arrayCPF];
        arrayCopyCPF.push(firstNumber);

        const secondStreak = multiplyNumbers(COUNTDOWN_TWO, arrayCopyCPF);
        const sumSecondNumber = sumNumbers(secondStreak);
        const secondNumber = getNewNumber(sumSecondNumber);
        const newCPF = createNewCPF(strCPF, firstNumber, secondNumber);

        const originalCPF = unFormatCPF(paramCPF);
        const isValidCPF = isValidateCPF(originalCPF, newCPF);
        const formatedCPF = formatCpf(originalCPF);

        return isValidCPF ? `CPF "${formatedCPF}" válido.` : `CPF "${formatedCPF}" Inválido.`;
    }
    //#endregion

    console.log(validateCPF(CPF));
};
contextMain();