import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import * as TaskSagas from './taskSaga';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_TASK_REQUEST, TaskSagas.createTaskSaga);
  yield takeLatest(ACTION_TYPES.GET_TASKS_REQUEST, TaskSagas.getTasksSaga);
  yield takeLatest(ACTION_TYPES.UPDATE_TASK_REQUEST, TaskSagas.updateTaskSaga);
  yield takeLatest(ACTION_TYPES.DELETE_TASK_REQUEST, TaskSagas.deleteTaskSaga);
}

export default rootSaga;
