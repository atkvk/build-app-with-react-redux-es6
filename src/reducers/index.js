import {combineReducers} from 'redux';
import courseReducer from './courseReducer';
import authorReducer from './authorReducer';
import ajaxStateReducer from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses: courseReducer,
  authors: authorReducer,
  ajaxCallInProgress: ajaxStateReducer
});

export default rootReducer;
