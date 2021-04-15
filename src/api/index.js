import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api/todo',
});


export const getTasks = () => {
  return httpClient.get(``);
};

export const createTask = data => {
  return httpClient.post('', data);
};

export const updateTask = ({ data, id }) => {
  return httpClient.patch(`/${id}`, data);
};

export const deleteTask = id => {
  return httpClient.delete(`/${id}`);
};
