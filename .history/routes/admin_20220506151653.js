const express = require('express');
const Router = express.Router();
const usersController = require('../app/controllers/usersController')

Router.get('/add-user', (req, res, next) => {
    res.send();
});

Router.post('/user', (req, res, next) => {
    res.redirect('/');
});

module.exports = Router;