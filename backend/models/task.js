const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Title is required'
      },
      len: {
        args: [3, 255],
        msg: 'Title must be at least 3 characters long'
      }
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'PENDING',
    validate: {
      isIn: {
        args: [['PENDING', 'IN_PROGRESS', 'DONE']],
        msg: 'Status must be PENDING, IN_PROGRESS, or DONE'
      }
    }
  }
}, {
  tableName: 'tasks',
  timestamps: true
});

module.exports = Task;