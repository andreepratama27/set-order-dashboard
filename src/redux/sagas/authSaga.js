import {put, takeLatest, call, select} from 'redux-saga/effects';
import * as types from '../ducks/authRedux';
import {INIT_MENU_REQUEST} from '../ducks/menuRedux';

import Api from 'api';

function* login({data}) {
  try {
    const resp = yield call(Api.restaurantLogin, data);
    yield put({
      type: types.LOGIN_FULFILLED,
      data: resp.data.data,
      token: resp.data.token,
    });
    yield put({type: INIT_MENU_REQUEST});
  } catch (err) {
    yield put({
      type: types.LOGIN_REJECTED,
      message: err.response.data.message,
    });
  }
}

function* logout() {
  try {
    yield put({type: types.LOGOUT_FULFILLED});
  } catch (err) {
    console.log(err);
  }
}

function* loginWatcher() {
  yield takeLatest(types.LOGIN_REQUEST, login);
}

function* logoutWatcher() {
  yield takeLatest(types.LOGOUT_REQUEST, logout);
}

const authSaga = [loginWatcher(), logoutWatcher()];

export default authSaga;
