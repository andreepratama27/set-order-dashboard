import {put, takeLatest, call, select} from 'redux-saga/effects';
import * as types from '../ducks/sectionRedux';

import Api from 'api';
import {getAuth} from '../selectors/';

function* initSection() {
  const {token} = yield select(getAuth);

  try {
    const resp = yield call(Api.getSection, {token});
    yield put({
      type: types.INIT_SECTION_FULFILLED,
      data: resp.data.data,
    });
  } catch (err) {
    yield put({
      type: types.INIT_SECTION_REJECTED,
      message: err.response.data.message,
    });
  }
}

function* addSection({data}) {
  const {token} = yield select(getAuth);

  try {
    const resp = yield call(Api.createSection, {token, data});
    yield put({type: types.ADD_SECTION_FULFILLED, data: resp.data.data});
  } catch (err) {
    yield put({type: types.ADD_SECTION_REJECTED});
  }
}

function* deleteSection({data}) {
  const {token} = yield select(getAuth);

  try {
    const resp = yield call(Api.deleteSection, {token, data});
    yield put({
      type: types.DELETE_SECTION_BY_ID_FULFILLED,
      data,
    });
  } catch (err) {
    yield put({
      type: types.DELETE_SECTION_BY_ID_REJECTED,
    });
  }
}

function* sectionWatcher() {
  yield takeLatest(types.INIT_SECTION_REQUEST, initSection);
  yield takeLatest(types.DELETE_SECTION_BY_ID_REQUEST, deleteSection);
  yield takeLatest(types.ADD_SECTION_REQUEST, addSection);
}

const sectionSaga = [sectionWatcher()];

export default sectionSaga;
