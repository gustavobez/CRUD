const Timao = require('../models/timaoModel');

const timaoController = {
    createTimao: async (req, res) => {
        try {
            await Timao.create({
                nome: req.body.nome
            });
            res.redirect('/timaos');
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    getTimaoById: async (req, res) => {
        try {
            const timao = await Timao.findByPk(req.params.id);
            if (!timao) return res.status(404).json({ message: 'Timao not found' });
            res.render('timaos/show', { timao });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    getAllTimaos: async (req, res) => {
        try {
            const timaos = await Timao.findAll();
            res.render('timaos/index', { timaos });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    renderCreateForm: (req, res) => {
        res.render('timaos/create');
    },

    renderEditForm: async (req, res) => {
        try {
            const timao = await Timao.findByPk(req.params.id);
            if (!timao) {
                return res.status(404).json({ message: 'Timao not found' });
            }
            res.render('timaos/edit', { timao });
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    updateTimao: async (req, res) => {
        try {
            const timao = await Timao.findByPk(req.params.id);
            if (!timao) {
                return res.status(404).json({ message: 'Timao not found' });
            }
            await timao.update({
                nome: req.body.nome
            });
            res.redirect('/timaos');
        } catch (err) {
            res.status(500).json({ error: err });
        }
    },

    deleteTimao: async (req, res) => {
        try {
            const timao = await Timao.findByPk(req.params.id);
            if (!timao) {
                return res.status(404).json({ message: 'Timao not found' });
            }
            await timao.destroy();
            res.redirect('/timaos');
        } catch (err) {
            res.status(500).json({ error: err });
        }
    }
};

module.exports = timaoController;
