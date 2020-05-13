const mongoose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    phoneNumber: { type: String, required: false, default: '' },
    create_date: { type: Date, default: Date.now }
});

const ContactModel = mongoose.model('Contact', ContactSchema);

function Contact(body) {
    this.body = body;
    this.errors = [];
    this.contact = null;
}

Contact.getById = async function(id) {
    if(typeof id !== 'string') return;
    const contact = await ContactModel.findById(id);
    return contact;
}

Contact.prototype.register = async function() {
    this.validate();
    if(this.errors.length > 0) return;

    this.contact = await ContactModel.create(this.body);
};

Contact.prototype.validate = function() {
    this.cleanUp();
    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
    if(!this.body.name) this.errors.push('Nome é obrigatório');
    if(!this.body.email && !this.body.phoneNumber) this.errors.push('Informe pelo ao menos um dos campos "E-mail" ou "Celular" ');
};

Contact.prototype.cleanUp = function() {
    for(let key in this.body) {
        if(typeof this.body[key] !== 'string') this.body[key] = ''; //Fields in the body
    }

    this.body = {
        name: this.body.name,
        lastName: this.body.lastName,
        email: this.body.email,
        phoneNumber: this.body.phoneNumber
    };
};

module.exports = Contact;