// const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const express = require('express')
const { log } = require('../../middlewares/logger.middleware')
const { getTasks, getTaskById, addTask, updateTask, performTask, removeTask } = require('/')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getTasks)
router.get('/:id', getTaskById)
router.post('/', addTask)
router.put('/:id/start', performTask)
router.put('/:id', updateTask)
router.delete('/:id', removeTask)

module.exports = router