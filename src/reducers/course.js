import {CREATE_COURSE, LOAD_COURSES_OK} from '../actions/types';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state,
        Object.assign({}, action.course)
      ];

    case LOAD_COURSES_OK:
          return action.courses;

    default:
      return state;
  }
}
