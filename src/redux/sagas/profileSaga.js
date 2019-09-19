import {put, takeLatest, call, select} from 'redux-saga/effects';
import * as types from '../ducks/profileRedux';

import Api from 'api';
import {getAuth} from '../selectors/';

function* initProfile() {
  const {token} = yield select(getAuth);

  try {
    const resp = yield call(Api.getMenu, {token});
    yield put({
      type: types.INIT_PROFILE_FULFILLED,
      data: resp.data.data,
    });
  } catch (err) {
    console.log(err.response);
    yield put({
      type: types.INIT_PROFILE_REJECTED,
      message: err.response.data.message,
    });
  }
}

function* profileWatcher() {
  yield takeLatest(types.INIT_PROFILE_REQUEST, initProfile);
}

const profileSaga = [profileWatcher()];

export default profileSaga;
