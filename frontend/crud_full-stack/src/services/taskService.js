import axios from 'axios';

const API_URL = 'http://localhost:3000/api/tasks';


export const getAllTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};


export const getTaskById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};


export const createTask = async (taskData) => {
  const response = await axios.post(API_URL, taskData);
  return response.data;
};


export const updateTask = async (id, taskData) => {
  const response = await axios.put(`${API_URL}/${id}`, taskData);
  return response.data;
};


export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};