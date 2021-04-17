import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3001/api/todo',
});

export const getTasks = () => {
  return httpClient.get(``);
};

export const createTask = data => {
  return httpClient.post('/', data);
};

export const updateTask = ({ values, id }) => {
  return httpClient.patch(`/${id}`, values);
};

export const deleteTask = id => {
  return httpClient.delete(`/${id}`);
};
