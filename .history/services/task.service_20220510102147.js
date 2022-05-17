const dbService = require('../')


async function query() {
    var query = `SELECT * FROM task`;
    return dbService.runSQL(query)
}

async function getById(taskId) {
    var query = `SELECT * FROM task WHERE task._id = ${taskId}`;
    var tasks = await dbService.runSQL(query);
    if (task.length === 1) return tasks[0];
    throw new Error(`task id ${taskId} not found`);
}

async function remove(taskId) {
    var query = `DELETE FROM task WHERE task._id = ${taskId}`;
    return dbService.runSQL(query)
            .then(okPacket => okPacket.affectedRows === 1
                ? okPacket
                : Promise.reject(new Error(`No task deleted - task id ${taskId}`)));
}

async function add(task) {
    var sqlCmd = `INSERT INTO task (title, description, importance) 
                VALUES ("${task.title}",
                        "${task.description}",
                        "${task.importance}")`;
    return dbService.runSQL(sqlCmd)
}

async function update(task) {
    var query = `UPDATE task set title = "${task.title}",
                                description = "${task.description}",
                                importance = ${task.importance}
                WHERE task._id = ${task._id}`;
    var okPacket = await dbService.runSQL(query);
    if (okPacket.affectedRows !== 0) return okPacket;
    throw new Error(`No task updated - task id ${task._id}`);
}

module.exports = {
    query,
    getById,
    remove,
    add,
    update,
}

function _buildCriteria(filterBy) {
    const criteria = {}
    // if (filterBy.name) {
    //     const txtCriteria = { $regex: filterBy.name, $options: 'i' }
    //     criteria.name = txtCriteria
    // }
    // if (filterBy.inStock !== undefined && filterBy.inStock !== '') {
    //     criteria.inStock = { $eq: JSON.parse(filterBy.inStock) }
    // }
    // if (filterBy.labels) {
    //     if (filterBy.labels.length) {
    //         criteria.labels = { $in: filterBy.labels }
    //     }
    // }
    console.log('criteria:', criteria);
    return criteria
}


// _createToys()

async function _createTasks() {
    const collection = await dbService.getCollection('task')
    await collection.insertMany([
    {
        title: 'Call Grandma',
        description: 'Better do it Friday evening',
        importance: 3,
        createdAt: null,
        lastTriedAt: null,
        triesCount: 0,
        doneAt: null
    },
    {
        title: 'Wash the Dishes',
        description: 'Forks first',
        importance: 2,
        createdAt: null,
        lastTriedAt: null,
        triesCount: 0,
        doneAt: null
    },
    {
        title: 'Go to Supermarket',
        description: 'To buy cheese and milk',
        importance: 2,
        createdAt: null,
        lastTriedAt: null,
        triesCount: 0,
        doneAt: null
    },
    {
        title: 'Go to Gym',
        description: 'Need to renew the membership',
        importance: 1,
        createdAt: null,
        lastTriedAt: null,
        triesCount: 0,
        doneAt: null
    }
])
}


