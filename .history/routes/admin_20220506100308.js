const express = require('express');
const router = require('../api/task/routes');
const Router = express.Router();

router.use('/add-user', (req, res, next) => {
    res.send()
});

module.exports = Router;