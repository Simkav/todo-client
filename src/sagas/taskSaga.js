import { put } from 'redux-saga/effects';
import * as API from '../api';
import * as TaskActionCreators from '../actions/taskCreators';
//TODO ERROR HANDLING

export function * createTaskSaga (action) {
  try {
    const { values } = action;
    const {
      data: { data },
    } = yield API.createTask(values);
    yield put(TaskActionCreators.createTaskSuccess(data));
  } catch ({message}) {
    yield put(TaskActionCreators.createTaskError(message));
  }
}
export function * getTasksSaga () {
  try {
    const {
      data: { data },
    } = yield API.getTasks();
    yield put(TaskActionCreators.getTasksSuccess(data));
  } catch ({message}) {
    yield put(TaskActionCreators.getTasksError(message));
  }
}
export function * updateTaskSaga (action) {
  try {
    const { id, values } = action;
    const {
      data: { data },
    } = yield API.updateTask({ id, values });
    yield put(TaskActionCreators.updateTaskSuccess(data));
  } catch ({message}) {
    yield put(TaskActionCreators.updateTaskError(message));
  }
}
export function * deleteTaskSaga (action) {
  try {
    const { id } = action;
    const {
      data: { data },
    } = yield API.deleteTask(id);
    yield put(TaskActionCreators.deleteTaskSuccess(data));
  } catch ({message}) {
    yield put(TaskActionCreators.deleteTaskError(message));
  }
}
