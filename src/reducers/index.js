import {combineReducers} from 'redux';
import courseReducer from './course';

const rootReducer = combineReducers({
  courses: courseReducer
});

export default rootReducer;
