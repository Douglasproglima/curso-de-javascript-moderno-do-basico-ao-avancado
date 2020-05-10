const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }
    
    async register() {
        this.valida();
        if(this.errors.length > 0) return;
        
        await this.userExists();
        if(this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);
        
        try {
            //Registra o User
            this.user = await LoginModel.create(this.body);
        } catch (e) {
            console.log(e); 
        }
    }

    async userExists() {
        //Retorna o usuário ou null
        const user = await LoginModel.findOne( { email: this.body.email } );
        if(user) 
            this.errors.push('E-mail já existe. Clique em "Esqueceu a Senha", caso tenha esquecido.');
    }

    valida() {
        this.cleanUp();
        if(!validator.isEmail(this.body.email)) 
            this.errors.push('E-mail inválido');

        if(this.body.password.length < 6 || this.body.password.length > 20) 
            this.errors.push('A senha precisa conter de 6 há 20 caracteres');
        
        if(this.body.password_repeat.length < 6 || this.body.password_repeat.length > 20) 
            this.errors.push('A senha precisa conter de 8 há 20 caracteres');

        if(this.body.password_repeat !== this.body.password)
            this.errors.push('Senha diferente, informe a mesma senha em ambos os campos.');
    }

    cleanUp() {
        for(let key in this.body) {
            if(typeof this.body[key] !== 'string') this.body[key] = ''; //Fields in the body
        }

        this.body = {
            email: this.body.email,
            password: this.body.password,
            password_repeat: this.body.password_repeat
        };
    }
}

module.exports = Login;