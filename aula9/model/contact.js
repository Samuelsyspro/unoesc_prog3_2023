const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefone: {
        type: String,
        required: true
    }
});

const Contact = mongoose.model('Contatos', contactSchema);

module.exports = Contact;
