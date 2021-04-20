import ACTION_TYPES from '../actions/actionTypes';
import produce from 'immer';

const initialState = {
  tasks: [],
  isFetching: true,
  error: null,
};

const errHandler = produce((draftState, action) => {
  const { error } = action;
  draftState.error = error;
  draftState.isFetching = false;
});

const reqHandler = produce(draftState => {
  draftState.isFetching = true;
});

const handlers = {
  [ACTION_TYPES.CREATE_TASK_REQUEST]: reqHandler,
  [ACTION_TYPES.GET_TASKS_REQUEST]: reqHandler,
  [ACTION_TYPES.UPDATE_TASK_REQUEST]: reqHandler,
  [ACTION_TYPES.DELETE_TASK_REQUEST]: reqHandler,

  [ACTION_TYPES.CREATE_TASK_SUCCESS]: produce((draftState, action) => {
    const { task } = action;
    draftState.isFetching = false;
    draftState.tasks.push(task);
  }),

  [ACTION_TYPES.GET_TASKS_SUCCESS]: produce((draftState, action) => {
    const { tasks } = action;
    draftState.isFetching = false;
    draftState.tasks = tasks;
  }),
  [ACTION_TYPES.UPDATE_TASK_REQUEST]: produce((draftState, action) => {
    const { id, values } = action;
    const taskIndex = draftState.tasks.findIndex(oldTask => oldTask.id === id);
    draftState.tasks[taskIndex] = { ...draftState.tasks[taskIndex], ...values };
    draftState.isFetching = false;
  }),
  [ACTION_TYPES.DELETE_TASK_SUCCESS]: produce((draftState, action) => {
    const {
      task: { id },
    } = action;
    draftState.isFetching = false;
    draftState.tasks = draftState.tasks.filter(task => task.id !== id);
  }),
  [ACTION_TYPES.CREATE_TASK_ERROR]: errHandler,
  [ACTION_TYPES.GET_TASKS_ERROR]: errHandler,
  [ACTION_TYPES.UPDATE_TASK_ERROR]: errHandler,
  [ACTION_TYPES.DELETE_TASK_ERROR]: errHandler,
};

function taskReducer (state = initialState, action) {
  const handler = handlers[action.type];
  if (handler) {
    return handler(state, action);
  }
  return state;
}

export default taskReducer;
