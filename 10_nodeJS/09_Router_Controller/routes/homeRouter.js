const express = require('express');
const route = express.Router();
const homeController = require('../controllers/homeController');
const contatoController = require('../controllers/contactController');

//ROTA HOME -> http://meusite.com/
route.get('/', homeController.startPage);
route.post('/', homeController.validatePost);

// Rotas de Contato
route.get('/Contato', contatoController.index);

module.exports = route;