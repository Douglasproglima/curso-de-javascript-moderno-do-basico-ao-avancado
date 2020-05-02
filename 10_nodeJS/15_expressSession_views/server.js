//Gerenciamento as configurações da conexão com o bd para que a senha e user não fique exposta
require('dotenv').config();

const express = require('express');
const app = express();

/********************Variável para conectar ao BD********************/
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }) 
  .then(() => {
    app.emit('Great');
  })
  .catch(error => console.log(error));

//********************Session********************/
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flashMessage = require('connect-flash');

//********************Configuração da Session********************/
const sessionOptions = session({
  secret: 'asd32)()*(&¨¨¨:>>:?:^^LIOIOIPOHU*(*78787sdfsdf',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, //7 dias em milessimo de segundos
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flashMessage());

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, middlewareSecond } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//********************Meus middlewares********************/
app.use(middlewareGlobal);
app.use(middlewareSecond);
app.use(routes);

//********************CONEXAO BD********************
//A conexão com o BD so ira ocorrer quando o app abaixo emitir o sinal definido no .then() do mongoose.connect()
app.on('Great', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});

