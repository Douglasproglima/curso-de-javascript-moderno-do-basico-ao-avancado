const Contact = require('../models/ContactModel');

exports.index = (req, res) => {
    res.render('contact', {
        contact: {}
    });
};

exports.register = async (req, res) => {
    try {
        const contact =  new Contact(req.body);
        await contact.register();

        if(contact.errors.length > 0) {
            req.flash('errors', contact.errors);
            req.session.save(() => res.redirect('back')); //Back -> Redireciona para page anterior
            return;
        }
        
        req.flash('success', 'Contato registrado com sucesso.');
        req.session.save(() => res.redirect(`/contact/${contact.contact._id}`)); //Back -> Redireciona para page anterior
        return;
    } catch (error) {
        console.log(e);
        return res.render('404');
    }
};

exports.editIndex = async function(req, res) {
    if(!req.params.id) return res.render('404');

    const contact = await Contact.getById(req.params.id);
    if(!contact) return res.render('404');

    res.render('contact', { contact: contact });
};