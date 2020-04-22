const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateUpperChar = () => String.fromCharCode(rand(65, 91));
const generateLowerChar = () => String.fromCharCode(rand(97, 123));
const generateNumber = () => String.fromCharCode(rand(48, 58));
const symbols = ',.;~^[]{}!@#$%¨&*()_+=-/\/?:><}º`´|ª§¬¢£³²¹"°';
const generateSymbol = () => symbols[rand(0, symbols.length)];

export default function generatePassword(qtdeChar = 5, upperChar, lowerChar, numbers, symbols) {
    const pwdArray = [];
    qtdeChar = Number(qtdeChar);

    for(let i = 0; i < qtdeChar; i++){
        upperChar && pwdArray.push(generateUpperChar());
        lowerChar && pwdArray.push(generateLowerChar());
        numbers && pwdArray.push(generateNumber());
        symbols && pwdArray.push(generateSymbol());
    }

    return pwdArray.join('').slice(0, qtdeChar);
}