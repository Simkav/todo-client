import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  tasks: [],
  isFetching: true,
  error: null,
};

function taskReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.GET_TASKS_SUCCESS: {
      const { tasks } = action;
      return {
        ...state,
        isFetching: false,
        error: false,
        tasks,
      };
    }
    case ACTION_TYPES.GET_TASKS_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    case ACTION_TYPES.CREATE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.CREATE_TASK_SUCCESS: {
      const { tasks } = state;
      const { task } = action;
      return {
        ...state,
        isFetching: false,
        error: false,
        tasks: [...tasks, task],
      };
    }
    case ACTION_TYPES.CREATE_TASK_ERROR: {
      const { error } = action;
      return { ...state, isFetching: false, error };
    }
    case ACTION_TYPES.UPDATE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.UPDATE_TASK_SUCCESS: {
      const { task: updatedTask } = action;
      const { tasks } = state;
      const newTasks = [...tasks];

      const updatedTaskIndex = newTasks.findIndex(
        oldtask => oldtask.id === updatedTask.id
      );
     

      const task = newTasks[updatedTaskIndex];

      newTasks[updatedTaskIndex] = { ...task, ...updatedTask };

      return {
        ...state,
        isFetching: false,
        error: false,
        tasks: [...newTasks],
      };
    }
    case ACTION_TYPES.UPDATE_TASK_ERROR: {
      const { error } = action;
      return { ...state, isFetching: false, error };
    }
    case ACTION_TYPES.DELETE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.DELETE_TASK_SUCCESS: {
      const {
        task: { id },
      } = action;
      const { tasks } = state;
      return {
        ...state,
        isFetching: false,
        error: false,
        tasks: tasks.filter(task => task.id !== id),
      };
    }
    case ACTION_TYPES.DELETE_TASK_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    default:
      return state;
  }
}

export default taskReducer;
