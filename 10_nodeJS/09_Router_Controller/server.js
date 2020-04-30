const express = require('express');
const app = express();
const routes = require('./routes/homeRouter');

//Trata o objeto que foi enviado no body da requisição
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => {
    console.log('Acesse http://locahost:3000');
    console.log('O servidor está executando na porta 3000');
});