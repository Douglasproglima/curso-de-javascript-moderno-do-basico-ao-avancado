const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
    //return; //Garante que não irá utilizar nenhum middlare
};

exports.register = (req, res) => {
    const login = new Login(req.body);
    res.send(login.body);
    //return; //Garante que não irá utilizar nenhum middlare
};

exports.login = (req, res) => {
    const login = new Login(req.body);
    res.send(login.body);
    //return; //Garante que não irá utilizar nenhum middlare
};

