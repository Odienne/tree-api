const Tree = require('../models/tree.model');
const bcrypt = require('bcryptjs');

// Initialisation du Salt pour le hashage du mot de passe 
const salt = bcrypt.genSaltSync(10);


exports.find = (req, res) => {
    Tree.find(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: err.message
                });
            } else {
                res.status(500).send({
                    message: err.message
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.findAll = (req, res) => {
    Tree.findAll((err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: err.message
                });
            } else {
                res.status(500).send({
                    message: err.message
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.create = (req, res) => {
    Tree.create(req.body.name, req.body.price, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: err.message
                });
            } else {
                res.status(500).send({
                    message: err.message
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.delete = (req, res) => {
    Tree.delete(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: err.message
                });
            } else {
                res.status(500).send({
                    message: err.message
                });
            }
        } else {
            res.send(data);
        }
    });
};