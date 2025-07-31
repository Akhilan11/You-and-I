const express = require('express');
const router = express.Router();

const { createTask,getAllTasks,updateTask,deleteTask } = require('../controller/taskController');

// Route: Create a task
router.post('/', createTask);

// Route: Get all tasks
router.get('/', getAllTasks);

// Route: Update a task
router.put('/:id', updateTask);

// Route: Delete a task
router.delete('/:id', deleteTask);

module.exports = router;
