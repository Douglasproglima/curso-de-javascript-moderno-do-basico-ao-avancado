//Gerenciamento as configurações da conexão com o bd para que a senha e user não fique exposta
require('dotenv').config();

const express = require('express');
const app = express();

/* Variável para conectar ao BD */
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }) 
  .then(() => {
    app.emit('Great');
  })
  .catch(error => console.log(error));


const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, middlewareSecond } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Meus middlewares
app.use(middlewareGlobal);
app.use(middlewareSecond);
app.use(routes);

//A conexão com o BD so ira ocorrer quando o app abaixo emitir o sinal definido no .then() do mongoose.connect()
app.on('Great', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});

