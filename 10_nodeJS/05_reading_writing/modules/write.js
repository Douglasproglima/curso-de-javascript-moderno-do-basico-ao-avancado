const fs = require('fs').promises;

module.exports = (path, dates) => {
    //w -> Apaga e escreve dados 
    //a -> Adiciona por último
    fs.writeFile(path, dates, {flag: 'w', encoding: 'utf8' });
};
