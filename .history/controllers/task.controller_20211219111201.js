const taskService = require('./task.service.js');
const externalService = require('../../services/external.service.js');
const logger = require('../../services/logger.service')

// GET LIST
async function getTasks(req, res) {
  try {
    const tasks = await taskService.query();
    res.json(tasks);
  } catch (err) {
    logger.error('Failed to get tasks', err)
    res.status(500).send({ err: 'Failed to get tasks' })
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
  getTasks,
  getTaskById,
  addTask,
  updateTask,
  performTask,
  removeTask
}




  // const avgsMap = {};
    // notDoneTasks.forEach(task => {
    //   const avg = (+task.importance + task.triesCount) / 2;
    //   avgsMap[task.title] = avg;
    // })
    // console.log('avgsMap:', avgsMap);

    // var avgsArr = [];
    // for (const taskTitle in avgsMap) {
    //   avgsArr.push(avgsMap[taskTitle]);
    // }
    // const sum = avgsArr.reduce((avg, acc) => avg + acc, 0);
    // const mainAvg = sum / avgsArr.length;
    
    // Sorting:
    // const sortedTasks2 = sortedTasks1.sort((task1, task2) => +task2.importance - +task1.importance);
    // console.log('sortedTasks2:', sortedTasks2);