const dbService = require('../../services/db.service')
const { ObjectId } = require('mongodb')

async function query() {
    try {
        const collection = await dbService.getCollection('task')
        var tasks = await collection.find().toArray()
        return tasks;
    } catch (err) {
        logger.error('cannot find tasks', err)
        throw err
    }
}

async function getById(taskId) {
    try {
        const collection = await dbService.getCollection('task')
        const task = collection.findOne({ '_id': ObjectId(taskId) })
        return task
    } catch (err) {
        logger.error(`while finding task ${taskId}`, err)
        throw err
    }
}

async function remove(taskId) {
    try {
        const collection = await dbService.getCollection('task')
        await collection.deleteOne({ '_id': ObjectId(taskId) })
        return taskId
    } catch (err) {
        logger.error(`cannot remove task ${taskId}`, err)
        throw err
    }
}

async function add(task) {
    try {
        const collection = await dbService.getCollection('task')
        const addedTask = await collection.insertOne(task)
        return addedTask
    } catch (err) {
        logger.error('cannot insert task', err)
        throw err
    }
}

async function update(task) {
    try {
        var id = ObjectId(task._id)
        delete task._id
        const collection = await dbService.getCollection('task')
        await collection.updateOne({ "_id": id }, { $set: { ...task } })
        task._id = ObjectId(id) + ''
        return task;
    } catch (err) {
        logger.error(`cannot update task ${taskId}`, err)
        throw err
    }
}

module.exports = {
    query,
    getById,
    remove,
    add,
    update,
}
