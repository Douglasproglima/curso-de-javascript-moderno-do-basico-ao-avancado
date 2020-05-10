const mongoose = require('mongoose');
const validator = require('validator');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    password_repeat: { type: String, required: true }
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
        
        try {
            this.user = await LoginModel.create(this.body);
        } catch (e) {
            console.log(e); 
        }
    }

    valida() {
        this.cleanUp();

        if(!validator.isEmail(this.body.email)) 
            this.errors.push('E-mail inválido');

        if(this.body.password.length < 6 || this.body.password.length > 20) 
            this.errors.push('A senha precisa conter de 6 há 20 caracteres');
        
        /*
        if(this.body.password_repeat.length < 8 || this.body.password_repeat.length > 20) 
            this.errors.push('A senha precisa conter de 8 há 20 caracteres');*/
    }

    cleanUp() {
        for(const key in this.body) {
            if(typeof this.body[key] !== 'string'){ //Fields in the body
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password,
            password_repeat: this.body.password_repeat
        };
    }
}

module.exports = Login;