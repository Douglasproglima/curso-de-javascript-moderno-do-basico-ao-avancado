const express = require('express');
const app = express();

//https://meusite.com/ -> GET

//Parametros: Rota, Function(Requisição, Resposta)
app.get('/', (request, response) => {
    response.send(`
        <form action="/" method="POST">
            <label for="name">Nome</label>
            <input type="text" name="" id="name">
            <button>Enviar</button>
        </form>
        `);
});


app.post('/', (request, response) => {
    response.send('Recebi os dados do formulário anterior.');
});

app.get('/contato', (request, response) => {
    response.send('Página Contato');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});