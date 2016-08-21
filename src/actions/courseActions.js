import {
  CREATE_COURSE,
  LOAD_COURSES_OK,
  CREATE_COURSES_OK,
  UPDATE_COURSES_OK
} from './types';

import courseApi from '../api/mockCourseApi';
import {beginAjaxCall} from'./ajaxStatusActions';

export function createCourse(course) {
  return {
    type: CREATE_COURSE,
    course
  };
}

export function loadCourses() {
  return dispatch => {

    dispatch(beginAjaxCall());

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

export function saveCourse(course) {
  return function (dispatch, getState) {
    courseApi.saveCourse(course)
      .then(function (course) {
        if (course.id) {
          dispatch(updateCourseOk(course));
        } else {
          dispatch(createCourseOk(course));
        }
      })
      .catch(function (error) {
        throw error;
      });
  };
}

function updateCourseOk(course) {
  return {
    type: UPDATE_COURSES_OK,
    course
  };
}

function createCourseOk(course) {
  return {
    type: CREATE_COURSES_OK,
    course
  };
}
