import CourseApi from "../api/mockCourseApi";
import ActionTypes from "./actionTypes";
import {ajaxCallError, beginAjaxCall} from "./ajaxStatusActions";

function createCourseSuccess(course) {
  return {
    type: ActionTypes.CREATE_COURSE_SUCCESS,
    course
  };
}

function updateCourseSuccess(course) {
  return {
    type: ActionTypes.UPDATE_COURSE_SUCCESS,
    course
  };
}

export function saveCourse(course) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return CourseApi.saveCourse(course).then(savedCourse => {
      if (!course.id) {
        dispatch(createCourseSuccess(savedCourse));
      } else {
        dispatch(updateCourseSuccess(savedCourse));
      }
    }).catch(error => {
      dispatch(ajaxCallError());
      throw error;
    });
  };
}

function loadCoursesSuccess(courses) {
  return {
    type: ActionTypes.LOAD_COURSES_SUCCESS,
    courses
  };
}

export function loadCourses() {
  return dispatch => {
    dispatch(beginAjaxCall());
    CourseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(err => {
      throw err;
    });
  };
}

