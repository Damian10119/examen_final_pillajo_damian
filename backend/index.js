const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


app.use('/api/tasks', taskRoutes);


app.get('/', (req, res) => {
  res.json({ message: 'API de Tasks funcionando correctamente' });
});


const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa');
    
    await sequelize.sync({ alter: true });
    console.log('Tablas sincronizadas');
    
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
  }
};

startServer();