import {put, takeLatest, call, select} from 'redux-saga/effects';
import * as types from '../ducks/menuRedux';
import {INIT_SCHEDULE_REQUEST} from '../ducks/scheduleRedux';

import Api from 'api';
import {getAuth} from '../selectors/';

function* initMenu() {
  const {token} = yield select(getAuth);

  try {
    const resp = yield call(Api.getMenu, {token});
    yield put({
      type: types.INIT_MENU_FULFILLED,
      data: resp.data.data,
    });

    yield put({type: INIT_SCHEDULE_REQUEST});
  } catch (err) {
    yield put({
      type: types.INIT_MENU_REJECTED,
      message: err.response.data.message,
    });
  }
}

function* addMenu({data}) {
  const {token} = yield select(getAuth);

  try {
    const resp = yield call(Api.createMenu, {token, data});
    yield put({type: types.ADD_MENU_FULFILLED, data: resp.data.data});
  } catch (err) {
    yield put({type: types.ADD_MENU_REJECTED});
  }
}

function* deleteMenu({data}) {
  const {token} = yield select(getAuth);

  try {
    const resp = yield call(Api.deleteMenu, {token, data});
    yield put({
      type: types.DELETE_MENU_BY_ID_FULFILLED,
      data,
    });
  } catch (err) {
    console.log(err.response);
    yield put({
      type: types.DELETE_MENU_BY_ID_REJECTED,
    });
  }
}

function* menuWatcher() {
  yield takeLatest(types.INIT_MENU_REQUEST, initMenu);
  yield takeLatest(types.DELETE_MENU_BY_ID_REQUEST, deleteMenu);
  yield takeLatest(types.ADD_MENU_REQUEST, addMenu);
}

const menuSaga = [menuWatcher()];

export default menuSaga;
