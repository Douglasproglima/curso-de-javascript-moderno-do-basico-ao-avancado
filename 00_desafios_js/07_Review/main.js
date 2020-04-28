function counterLetters(str) {
    const arrayStr = [...str];
    let letters = '';
    let count = 1;
    for(let i = 0; i < arrayStr.length; i++) {
        if(arrayStr[i] == arrayStr[i + 1]) count++;
        else{
            const vlr = `${count}${arrayStr[i]}`;
            console.log([...letters, vlr]);
            count = 1;
        }
    }

    //console.log(arrayStr);
}

counterLetters('wwwweeeqq');
//counterLetters('ppprrrrtt');