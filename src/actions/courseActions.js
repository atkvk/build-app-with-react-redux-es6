import {CREATE_COURSE, LOAD_COURSES_OK} from './types';
import courseApi from '../api/mockCourseApi';

export function createCourse(course) {
  return {
    type: CREATE_COURSE,
    course
  };
}

export function loadCourses(dispatch) {
  return dispatch => {
    return courseApi.getAllCourses()
      .then(courses => dispatch(loadCoursesOk(courses)))
      .catch(error => {
        throw(error);
      });
  };
}

function loadCoursesOk(courses) {
  return {
    type: LOAD_COURSES_OK,
    courses
  };
}
