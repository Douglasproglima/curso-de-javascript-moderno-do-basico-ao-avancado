
const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
    //return; //Garante que não irá utilizar nenhum middlare
};

exports.register = async function(req, res) {
    const login = new Login(req.body);
    
    try {
        await login.register();

        if(login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function() {
                return res.redirect('back');
            });
            return;
        }
        
        req.flash('success', 'Seu usuário foi criado com sucesso.');
        req.session.save(function() {
            return res.redirect('back');
        });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};

exports.login = (req, res) => {
    const login = new Login(req.body);
    res.send(login.body);
    //return; //Garante que não irá utilizar nenhum middlare
};
