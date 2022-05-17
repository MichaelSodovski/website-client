// const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const express = require('express')
const { log } = require('../../middlewares/logger.middleware')
const { getUsers, getTaskById, addTask, updateTask, performTask, removeTask } = require('./task.controller')
const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getTaskById)
router.post('/', addTask)
router.put('/:id/start', performTask)
router.put('/:id', updateTask)
router.delete('/:id', removeTask)

module.exports = router