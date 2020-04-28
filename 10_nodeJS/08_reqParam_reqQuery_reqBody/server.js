const express = require('express');
const app = express();

//Trata o objeto que foi enviado no body da requisição
app.use(
    express.urlencoded({ extended: true })
);

app.listen(3000, () => {
    console.log('Acesse http://locahost:3000');
    console.log('O servidor está executando na porta 3000');
});

/************************ROTAS************************/

//ROTA HOME -> http://meusite.com/
app.get('/', (request, response) => {
    response.send(`
        <form action="/" method="POST">
            <label for="name">Nome</label>
            <input type="text" name="name" id="name">
            <label for="name">Sobrenome</label>
            <input type="text" name="lastName" id="lastName">
            <button>Enviar</button>
        </form>
        `);
});

//ROTA FIND -> http://meusite.com/123?campanha=google&tipo_campanha=es6
app.get('/campanhas/:id?/:params?', (request, response) => {
    // /profiles/3
    // /profiles/?chave1=valor1&chave2=valor2&chave3=valor3
    response.send(request.params);
});


app.post('/', (request, response) => {
    console.log(request.body); //Vem no corpo da requisição
    response.send(`Recebi os dados do formulário anterior: <strong>${request.body.name} | ${request.body.lastName} </strong>`);
});


