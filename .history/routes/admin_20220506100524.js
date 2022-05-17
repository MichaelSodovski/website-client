const express = require('express');
const Router = require('../api/task/routes');
const Router = express.Router();

Router.get('/add-user', (req, res, next) => {
    res.send();
});

Router.post('/user', (req, res, next) => {
    res.redirect('/');
});

module.exports = Router;