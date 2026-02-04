# Aplicación de Gestión de Tareas

Aplicación full-stack para administrar tareas con backend en Node.js + Express + Sequelize + PostgreSQL y frontend en React + Tailwind CSS.

## Tecnologías Utilizadas

### Backend
- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL
- Docker & Docker Compose

### Frontend
- React 18
- Vite
- Tailwind CSS
- Axios

## Estructura del Proyecto
```
task-manager/
├── backend/          # API REST con arquitectura en capas
├── frontend/         # Interfaz de usuario con React
└── README.md
```

## Instrucciones de Instalación y Ejecución

### Prerrequisitos
- Node.js v16 o superior
- Docker Desktop
- Git

### Clonar el repositorio
```bash
git clone <tu-repo-url>
cd task-manager
```

### Configurar y ejecutar el Backend
```bash
# Ir a la carpeta backend
cd backend

# Instalar dependencias
npm install

# Levantar PostgreSQL con Docker
docker-compose up -d

# Iniciar el servidor de desarrollo
npm run dev
```

El backend estará disponible en: `http://localhost:3000`

### Configurar y ejecutar el Frontend
```bash
# Abrir una nueva terminal y ir a la carpeta frontend
cd frontend

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

El frontend estará disponible en: `http://localhost:5173`

## API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/tasks` | Obtener todas las tareas |
| GET | `/api/tasks/:id` | Obtener una tarea específica |
| POST | `/api/tasks` | Crear una nueva tarea |
| PUT | `/api/tasks/:id` | Actualizar una tarea |
| DELETE | `/api/tasks/:id` | Eliminar una tarea |

## Modelo de Datos

### Task
```javascript
{
  id: INTEGER (PK, autoincrement),
  title: STRING (requerido, mínimo 3 caracteres),
  description: TEXT (opcional),
  status: STRING (PENDING | IN_PROGRESS | DONE),
  createdAt: TIMESTAMP,
  updatedAt: TIMESTAMP
}
```

## Componentes Reutilizables

### Frontend

- **Button**: Componente de botón reutilizable con variantes (primary, success, danger, secondary)
- **Input**: Componente de input/textarea reutilizable con validaciones

## Docker

El proyecto incluye Docker Compose para levantar PostgreSQL:
```bash
cd backend
docker-compose up -d
```

Para detener la base de datos:
```bash
docker-compose down


```

# CRUD

CREAR (images/CREAR.png)

EDITAR (EDITAR.png)

ELIMINAR (ELIMINAR.png)

LISTAR (LISTAR.png)

## Autor
Damian Pillajo