const dbService = require('../db.service')

async function query() {
    var query = `SELECT * FROM users_table`;
    return dbService.runSQL(query)
}

async function getById(taskId) {
    var query = `SELECT * FROM users_table WHERE user.id = ${taskId}`;
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



