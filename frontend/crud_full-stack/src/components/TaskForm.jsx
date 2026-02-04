import React, { useState, useEffect } from 'react';
import Input from './Input';
import Button from './Button';

const TaskForm = ({ onSubmit, onCancel, initialTask = null }) => {
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'PENDING'
  });

  
  useEffect(() => {
    if (initialTask) {
      setFormData({
        title: initialTask.title,
        description: initialTask.description || '',
        status: initialTask.status
      });
    }
  }, [initialTask]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">
        {initialTask ? 'Editar Task' : 'Crear Nueva Task'}
      </h2>

      <Input
        label="Título"
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Escribe el título de la tarea"
        required={true}
      />

      <Input
        label="Descripción"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Escribe una descripción (mínimo 10 caracteres para DONE)"
        isTextArea={true}
      />

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Estado <span className="text-red-500">*</span>
        </label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="PENDING">Pendiente</option>
          <option value="IN_PROGRESS">En Progreso</option>
          <option value="DONE">Completada</option>
        </select>
      </div>

      <div className="flex gap-3">

        <Button type="submit" variant="success">
          {initialTask ? 'Guardar Cambios' : 'Crear Task'}
        </Button>


        {onCancel && (
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancelar
          </Button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;