import {all} from 'redux-saga/effects';

import authSaga from './authSaga';
import menuSaga from './menuSaga';
import scheduleSaga from './scheduleSaga';
import sectionSaga from './sectionSaga';

export default function* rootSaga() {
  yield all([...authSaga, ...menuSaga, ...scheduleSaga, ...sectionSaga]);
}
