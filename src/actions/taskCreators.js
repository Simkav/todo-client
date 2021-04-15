import ACTION_TYPES from './actionTypes';

export const createTaskRequest = values => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
  values,
});

export const createTaskSuccess = values => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  values,
});

export const createTaskError = error => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  error,
});

export const deleteTaskRequest = id => ({
  type: ACTION_TYPES.DELETE_TASK_REQUEST,
  id,
});

export const deleteTaskSuccess = id => ({
  type: ACTION_TYPES.DELETE_TASK_SUCCESS,
  id,
});

export const deleteTaskError = error => ({
  type: ACTION_TYPES.DELETE_TASK_ERROR,
  error,
});

export const updateTaskRequest = ({ id, values }) => ({
  type: ACTION_TYPES.UPDATE_TASK_REQUEST,
  body: { id, values },
});

export const updateTaskSuccess = ({ tasks }) => ({
  type: ACTION_TYPES.UPDATE_TASK_SUCCESS,
  tasks,
});

export const updateTaskError = error => ({
  type: ACTION_TYPES.UPDATE_TASK_ERROR,
  error,
});

export const getTaskRequest = id => ({
  type: ACTION_TYPES.GET_TASKS_REQUEST,
  id,
});

export const getTaskSuccess = ({ task }) => ({
  type: ACTION_TYPES.GET_TASKS_SUCCESS,
  task,
});

export const getTaskError = error => ({
  type: ACTION_TYPES.GET_TASKS_ERROR,
  error,
});

export const getTasksRequest = () => ({
  type: ACTION_TYPES.GET_TASKS_REQUEST,
});

export const getTasksSuccess = ({ tasks }) => ({
  type: ACTION_TYPES.GET_TASKS_SUCCESS,
  tasks,
});

export const getTasksError = error => ({
  type: ACTION_TYPES.GET_TASKS_ERROR,
  error,
});
