const express = require('express');
const router = express.Router();
const taskService = require('../services/taskService');

// GET
router.get('/', async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET
router.get('/:id', async (req, res) => {
  try {
    const task = await taskService.getTaskById(req.params.id);
    res.json(task);
  } catch (error) {
    if (error.message === 'Task not found') {
      return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
});

// POST 
router.post('/', async (req, res) => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ 
        message: error.errors[0].message 
      });
    }
    res.status(400).json({ message: error.message });
  }
});

// PUT 
router.put('/:id', async (req, res) => {
  try {
    const task = await taskService.updateTask(req.params.id, req.body);
    res.json(task);
  } catch (error) {
    if (error.message === 'Task not found') {
      return res.status(404).json({ message: error.message });
    }
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ 
        message: error.errors[0].message 
      });
    }
    res.status(400).json({ message: error.message });
  }
});

// DELETE 
router.delete('/:id', async (req, res) => {
  try {
    await taskService.deleteTask(req.params.id);
    res.status(204).send();
  } catch (error) {
    if (error.message === 'Task not found') {
      return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;