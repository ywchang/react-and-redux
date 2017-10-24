import {ActionTypes} from "./actionTypes";
import CourseApi from "../api/mockCourseApi";

export function createCourse(course) {
  return {
    type: ActionTypes.CREATE_COURSE,
    course
  };
}

function loadCoursesSuccess(courses) {
  return {
    type: ActionTypes.LOAD_COURSES_SUCCESS,
    courses
  };
}

export function loadCourses() {
  return function (dispatch) {
    CourseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(err => {
      throw err;
    });
  };
}

