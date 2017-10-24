import CourseApi from "../api/mockCourseApi";
import ActionTypes from "./actionTypes";

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
    CourseApi.saveCourse(course).then(function (savedCourse) {
      if (!course.id) {
        dispatch(createCourseSuccess(savedCourse));
      } else {
        dispatch(updateCourseSuccess(savedCourse));
      }
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
    CourseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(err => {
      throw err;
    });
  };
}

