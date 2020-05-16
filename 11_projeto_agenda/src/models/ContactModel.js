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

Contact.prototype.edit = async function(id) {
    if(typeof id !== 'string') return;
    this.validate();
    if(this.errors.length > 0) return;
    
    this.contact = await ContactModel.findByIdAndUpdate(id, this.body, { new: true });
};

/* MÉTODOS ESTÁTICOS - Não vão para o Prototype */
Contact.getById = async function(id) {
    if(typeof id !== 'string') return;
    const contact = await ContactModel.findById(id);
    return contact;
};

Contact.getContacts = async function() {
    const contacts = await ContactModel.find().sort( { create_date: -1 } );
    return contacts;
};

Contact.delete = async function(id) {
    if(typeof id !== 'string') return;
    const contact = await ContactModel.findOneAndDelete( { _id: id } );
    return contact;
};

Contact.formatPhoneNumber = function(str) {
    let cleaned = ('' + str).replace(/\D/g, '');
  
  //Check if the input is of correct
  let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  
  if (match) {
    //Remove the matched extension code
    //Change this to format for any country code.
    let intlCode = (match[1] ? '+1 ' : '')
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
  }
  
  return null;
}

module.exports = Contact;