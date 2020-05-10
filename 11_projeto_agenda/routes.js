const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// Rotas da home
//route.get('/home', homeController.index);
route.post('/home', homeController.index);

//Rotas de Login
route.get('/', loginController.index);
//route.post('/login/login', loginController.login);
//route.get('/login/register', loginController.register);
route.post('/login/register', loginController.register);

module.exports = route;