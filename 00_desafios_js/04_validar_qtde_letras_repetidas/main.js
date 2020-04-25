function countLetters(str){
    let arrayTemp = str.split('');

    let letters = '';
    let count = 1;

    for(let index = 0; index < arrayTemp.length; index++) {
        if(arrayTemp[index] == arrayTemp[index + 1]) count++;
        else{
            let value = `${count}${arrayTemp[index]}`;
            letters = [...letters, value];
            count = 1;
        }
    }

    return letters.join('').replace(',', '');
}

const firstString = 'wwwweeeqq';
const secondString = 'ppprrrrtt';
console.log(countLetters(firstString));