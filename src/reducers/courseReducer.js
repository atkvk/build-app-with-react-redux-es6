import {LOAD_COURSES_OK, CREATE_COURSES_OK, UPDATE_COURSES_OK} from '../actions/types';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case CREATE_COURSES_OK:
      return [
        ...state,
        Object.assign({}, action.course)
      ];

    case UPDATE_COURSES_OK:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];

    case LOAD_COURSES_OK:
      return action.courses;

    default:
      return state;
  }
}
