import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BACKEND_URL || 'http://localhost:3000',
});

export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data
};