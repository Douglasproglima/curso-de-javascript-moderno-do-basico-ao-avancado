import generatePassword from './generators';

const resultPassword = document.querySelector('.paragrafo-result');
const qtdeChars = document.querySelector('.qtde-chars');
const checkUpperChar = document.querySelector('.chk-upper');
const checkLowerChar = document.querySelector('.chk-lower');
const checkNumberChar = document.querySelector('.chk-num');
const checkSymbolChar = document.querySelector('.chk-symbol');
const btnGeneretePwd = document.querySelector('.btn-pwd');

export default () => { 
    btnGeneretePwd.addEventListener('click', () => {
        resultPassword.innerHTML = generator();
    });
};

function generator() {
    const password = generatePassword(
        qtdeChars.value, 
        checkUpperChar.checked,
        checkLowerChar.checked, 
        checkNumberChar.checked, 
        checkSymbolChar.checked
        );

    return password || 'Nenhuma opção está marcado';
}