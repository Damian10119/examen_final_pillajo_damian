const taskRepository = require('../repositories/taskRepository');

class TaskService {

  validateDoneStatus(status, description) {
    if (status === 'DONE') {
      if (!description || description.trim().length < 10) {
        throw new Error('Tasks with status DONE must have a description of at least 10 characters');
      }
    }
  }

  async getAllTasks() {
    return await taskRepository.findAll();
  }

  async getTaskById(id) {
    const task = await taskRepository.findById(id);
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  }

  async createTask(taskData) {

    this.validateDoneStatus(taskData.status, taskData.description);
    
    return await taskRepository.create(taskData);
  }

  async updateTask(id, taskData) {
    
    this.validateDoneStatus(taskData.status, taskData.description);

    const task = await taskRepository.update(id, taskData);
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  }

  async deleteTask(id) {
    const task = await taskRepository.delete(id);
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  }
}

module.exports = new TaskService();