import { put } from 'redux-saga/effects';
import * as API from '../api';
import * as TaskActionCreators from '../actions/taskCreators';
//TODO ERROR HANDLING
const parseError = error => {
  const {
    response: {
      data: { error: errMessage },
    },
  } = error;
  return errMessage;
};

export function * createTaskSaga (action) {
  try {
    const { values } = action;
    const {
      data: { data },
    } = yield API.createTask(values);
    yield put(TaskActionCreators.createTaskSuccess(data));
  } catch (error) {
    yield put(TaskActionCreators.createTaskError(parseError(error)));
  }
}
export function * getTasksSaga () {
  try {
    const {
      data: { data },
    } = yield API.getTasks();
    yield put(TaskActionCreators.getTasksSuccess(data));
  } catch (error) {
    yield put(TaskActionCreators.getTasksError(parseError(error)));
  }
}
export function * updateTaskSaga (action) {
  try {
    const { id, values } = action;
    const {
      data: { data },
    } = yield API.updateTask({ id, values });
    yield put(TaskActionCreators.updateTaskSuccess(data));
  } catch (error) {
    yield put(TaskActionCreators.updateTaskError(parseError(error)));
  }
}
export function * deleteTaskSaga (action) {
  try {
    const { id } = action;
    const {
      data: { data },
    } = yield API.deleteTask(id);
    yield put(TaskActionCreators.deleteTaskSuccess(data));
  } catch (error) {
    yield put(TaskActionCreators.deleteTaskError(parseError(error)));
  }
}
