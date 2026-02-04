import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { getAllTasks, createTask, updateTask, deleteTask } from './services/taskService';

function App() {
  
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(true);

  
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await getAllTasks();
      setTasks(data);
      setError(null);
    } catch (err) {
      setError('Error al cargar las tareas');
      console.error(err);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      await createTask(taskData);
      loadTasks();
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || 'Error al crear la tarea');
    }
  };

  const handleUpdateTask = async (taskData) => {
    try {
      await updateTask(editingTask.id, taskData);
      loadTasks();
      setEditingTask(null);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || 'Error al actualizar la tarea');
    }
  };

  const handleDeleteTask = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar esta tarea?')) {
      try {
        await deleteTask(id);
        loadTasks();
        setError(null);
      } catch (err) {
        setError(err.response?.data?.message || 'Error al eliminar la tarea');
      }
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Gestor de Tareas
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            <strong>Error:</strong> {error}
          </div>
        )}

        {showForm && (
          <TaskForm
            onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
            onCancel={editingTask ? handleCancelEdit : null}
            initialTask={editingTask}
          />
        )}

        <TaskList
          tasks={tasks}
          onEdit={handleEdit}
          onDelete={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
