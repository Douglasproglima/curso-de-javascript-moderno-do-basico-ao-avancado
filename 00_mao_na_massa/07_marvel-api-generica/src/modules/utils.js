const crypt = require('crypto');
const ts = parseInt(Date.now() / 1000, 10);
const pubKey = '25d7b572068230e6627c4e8870dd7dd6';
const privKey = '88d51b34d7fb270f0cb3bd5e75e5903647ffc41c';

function createHash() {
    const preHash = ts + privKey + pubKey;
    const hash = crypt.createHash('md5').update(preHash).digest('hex');

    return hash;
}

exports.createURL = (route) => `http://gateway.marvel.com/v1/public/${route}?ts=${ts}&apikey=${pubKey}&hash=${createHash()}`;