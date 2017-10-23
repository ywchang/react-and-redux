import {ActionTypes} from "./actionTypes";

export function createCourse(course) {
  return {
    type: ActionTypes.CREATE_COURSE,
    course
  };
}
