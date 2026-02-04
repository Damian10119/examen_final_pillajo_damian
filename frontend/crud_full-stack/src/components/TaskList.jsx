import React from 'react';
import Button from './Button';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      case 'IN_PROGRESS':
        return 'bg-blue-100 text-blue-800';
      case 'DONE':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'PENDING':
        return 'Pendiente';
      case 'IN_PROGRESS':
        return 'En Progreso';
      case 'DONE':
        return 'Completada';
      default:
        return status;
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No hay tareas creadas. ¡Crea tu primera tarea!
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {tasks.map((task) => (
        <div key={task.id} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-800">{task.title}</h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(task.status)}`}>
              {getStatusText(task.status)}
            </span>
          </div>
          
          {task.description && (
            <p className="text-gray-600 mb-4">{task.description}</p>
          )}
          
          <div className="flex gap-2">
        
            <Button variant="primary" onClick={() => onEdit(task)}>
              Editar
            </Button>
            
        
            <Button variant="danger" onClick={() => onDelete(task.id)}>
              Eliminar
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;