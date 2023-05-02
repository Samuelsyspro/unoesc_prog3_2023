const express = require('express');
const router = express.Router();
const Contact = require('../models/contact.js');

// Rota para obter todos os contatos na lista
app.get('/contacts', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota para adicionar um novo contato à lista
app.post('/contacts', async (req, res) => {
    const { nome, email, telefone } = req.body;
    const contact = new Contact({ name, email, phone });

    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Rota para atualizar as informações de um contato existente na lista
app.put('/contacts/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const contact = await Contact.findById(id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        const { nome, email, telefone } = req.body;
        if (nome) contact.nome = nome;
        if (email) contact.email = email;
        if (telefone) contact.telefone = telefone;

        const updatedContact = await contact.save();
        res.json(updatedContact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota para excluir um contato da lista
app.delete('/contacts/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const contact = await Contact.findById(id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        await contact.remove();
        res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota para encontrar os contatos com o mesmo e-mail
app.get('/contacts/email/:email', async (req, res) => {
    const { email } = req.params;

    try {
        const contacts = await Contact.find({ email });
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
