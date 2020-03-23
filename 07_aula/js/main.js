const number1 = 10.2
const number2 = 2
const SOMA = 'soma', SUBTRACAO = 'subtracao', MULTIPLICACAO = 'multiplicacao', DIVISAO = 'divisao' 

Calculate(number1, SOMA, number2)

function Calculate(num1, typeOperator, num2){
    let calculo
    let result

    switch (typeOperator) {
        case 'soma':
            calculo = num1 + num2
            result = console.log(num1 + ' + '+ num2 + ' é igual à: ' + calculo)
            break;

        case 'subtracao':
            calculo = num1 - num2
            result = console.log(num1 + ' - '+ num2 + ' é igual à: ' + calculo)
            break;

        case 'divisao':
            calculo = num1 / num2
            result = console.log(num1 + ' / '+ num2 + ' é igual à: ' + calculo)
            break;

        case 'multiplicacao':
            calculo = num1 * num2
            result = console.log(num1 + ' * '+ num2 + ' é igual à: ' + calculo)
            break;

        default:
            result = 0;
    }

    return result
}