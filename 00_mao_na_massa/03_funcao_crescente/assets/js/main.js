/*
Nós queremos escrever um programa que imprima dois números, sendo eles o número de vacas e galinhas 
em uma fazenda com as palavras Cows (vacas) e Chickens (galinhas) depois deles e algarismos zeros antes 
de ambos os números para que sejam sempre números de três dígitos.
*/

function contextMain(){
    
    console.log('Código Porco que resolve o problema somente naquele momento.');
    /* Código Horrivel - Se o fazendeiro começar a criar porcos ai lascou né Zé*/
    function showFarmInventory(cows, chickens){
        let cowString = String(cows);
        while(cowString.length < 3)
            cowString = `00${cowString}`;
        console.log(cowString + ' vacas');
        
        let chickenString = String(chickens);
        while(chickenString.length < 3)
            chickenString = `00${chickenString}`;
        console.log(chickenString + ' frangos');
    }
    showFarmInventory(5, 9);
    console.log('-------------------------');

    console.log('Código meia boca - resolve o problema por enquanto');
    /* Um pouco melhor */
    function insertZeroPaddeWhithLabel(number, label){
        let numberString = String(number);
        while(numberString.length < 3)
            numberString = `0${numberString}`;
        console.log(`${numberString} ${label}`);
    }

    function showFarmInventory2(cows, chickens, pigs){
        insertZeroPaddeWhithLabel(cows, 'Vacas');
        insertZeroPaddeWhithLabel(chickens, 'Frangos');
        insertZeroPaddeWhithLabel(pigs, 'Porcos');
    }
    showFarmInventory2(2, 10, 2);

    console.log('-------------------------');
    console.log('Código limpo');
    const zeroPad = (number, width) => {
        let string = String(number);
        while(string.length < width) string = `0${string}`;
        return string;
    }

    const showFarmInventory3 = (cows, chickens, pigs) => {
        console.log(`${zeroPad(cows, 3)} Vacas`);
        console.log(`${zeroPad(chickens, 3)} Frangos`);
        console.log(`${zeroPad(pigs, 3)} Porcos`);
    }
    showFarmInventory3(4, 20, 4);

}
contextMain();