const express = require('express');
const router = require('../api/task/routes');
const Router = express.Router();

router.use('/add-user', (req, res, next) => {
    res.send();
});

router.use();

module.exports = Router;