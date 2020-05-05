const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contactController');

function myMiddleware(request, response, next) {
    console.log();
    console.log('Entrou no middleware - routes.js');
    console.log();
    next();
}

// Rotas da home
route.get('/', myMiddleware, homeController.index);
route.post('/', homeController.validatePost);

// Rotas de contato
route.get('/contato', contatoController.index);

module.exports = route;