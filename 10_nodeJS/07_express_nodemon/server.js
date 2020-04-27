const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Acesse http://locahost:3000');
    console.log('O servidor está executando na porta 3000');
});

app.get('/', (request, response) => {
   response.send('Nodemon na area'); 
});


