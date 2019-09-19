import {put, takeLatest, call, select} from 'redux-saga/effects';
import * as types from '../ducks/scheduleRedux';

import Api from 'api';
import {getAuth} from '../selectors/';

function* initSchedule() {
  const {token} = yield select(getAuth);

  try {
    const resp = yield call(Api.getSchedule, {token});
    yield put({
      type: types.INIT_SCHEDULE_FULFILLED,
      data: resp.data.data,
    });
  } catch (err) {
    yield put({
      type: types.INIT_SCHEDULE_REJECTED,
      message: err.response.data.message,
    });
  }
}

function* addSchedule({data}) {
  const {token} = yield select(getAuth);

  try {
    const resp = yield call(Api.createSchedule, {token, data});
    yield put({type: types.ADD_SCHEDULE_FULFILLED, data: resp.data.data});
  } catch (err) {
    yield put({type: types.ADD_SCHEDULE_REJECTED});
  }
}

function* deleteSchedule({data}) {
  const {token} = yield select(getAuth);

  try {
    const resp = yield call(Api.deleteSchedules, {token, data});
    yield put({
      type: types.DELETE_SCHEDULE_BY_ID_FULFILLED,
      data,
    });
  } catch (err) {
    yield put({
      type: types.DELETE_SCHEDULE_BY_ID_REJECTED,
    });
  }
}

function* scheduleWatcher() {
  yield takeLatest(types.INIT_SCHEDULE_REQUEST, initSchedule);
  yield takeLatest(types.DELETE_SCHEDULE_BY_ID_REQUEST, deleteSchedule);
  yield takeLatest(types.ADD_SCHEDULE_REQUEST, addSchedule);
}

const scheduleSaga = [scheduleWatcher()];

export default scheduleSaga;
