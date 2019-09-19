import {combineReducers} from 'redux';
import authRedux from './authRedux';
import menuRedux from './menuRedux';
import scheduleRedux from './scheduleRedux';
import sectionRedux from './sectionRedux';

export default combineReducers({
  auth: authRedux,
  menu: menuRedux,
  schedule: scheduleRedux,
  section: sectionRedux,
});
