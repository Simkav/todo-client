import { put } from 'redux-saga/effects';
import * as API from '../api';
import * as TaskActionCreators from '../actions/taskCreators';

export function * createTaskSaga (action) {
  try {
    const {
      data: { data },
    } = yield API.createTask(action.values);
    yield put(TaskActionCreators.createTaskSuccess(data));
  } catch (error) {
    yield put(TaskActionCreators.createTaskError(error));
  }
}
export function * getTasksSaga (action) {
  try {
    const {
      data: { data },
    } = yield API.getTasks();
    yield put(TaskActionCreators.getTasksSuccess(data));
  } catch (error) {
    yield put(TaskActionCreators.getTasksError(error));
  }
}
