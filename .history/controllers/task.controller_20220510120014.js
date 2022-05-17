const taskService = require('../services/task.service');
const externalService = require('../services/external.service');
const logger = require('../../services/logger.service')

// GET LIST
async function getUsers(req, res) {
    try {
        const users = await taskService.query();
        res.json(users);
    } catch (err) {
        logger.error('Failed to get users', err)
        res.status(500).send({ err: 'Failed to get users' })
    }
}
// GET BY ID 
async function getTaskById(req, res) {
    try {
        const taskId = req.params.id;
        const task = await taskService.getById(taskId)
        res.json(task)
    } catch (err) {
        logger.error('Failed to get task', err)
        res.status(500).send({ err: 'Failed to get task' })
    }
}
// POST (add task)
async function addTask(req, res) {
    try {
        const task = req.body;
        const addedTask = await taskService.add(task)
        res.json(addedTask)
    } catch (err) {
        logger.error('Failed to add task', err)
        res.status(500).send({ err: 'Failed to add task' })
    }
}
// PUT (Update task)
async function updateTask(req, res) {
    try {
        const task = req.body;
        const updatedTask = await taskService.update(task)
        res.json(updatedTask)
    } catch (err) {
        logger.error('Failed to update task', err)
        res.status(500).send({ err: 'Failed to update task' })
    }
}
// POST (Perform task)
async function performTask(req, res) {
    const task = req.body;
    try {
        await externalService.execute(task);
        task.doneAt = Date.now();
    } catch (err) {
        logger.error('Failed to perform task', err);
        task.doneAt = false;
    } finally {
        task.lastTriedAt = Date.now();
        task.triesCount++;
        task.isRunning = false;
        const updatedTask = await taskService.update(task)
        res.json(updatedTask)
    }
}
// DELETE (Remove task)
async function removeTask(req, res) {
    try {
        const taskId = req.params.id;
        const removedId = await taskService.remove(taskId)
        res.send(removedId)
    } catch (err) {
        logger.error('Failed to remove task', err)
        res.status(500).send({ err: 'Failed to remove task' })
    }
}
module.exports = {
    getUsers,
    getTaskById,
    addTask,
    updateTask,
    performTask,
    removeTask
}

