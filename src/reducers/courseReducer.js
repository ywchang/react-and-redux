import {ActionTypes} from "../actions/actionTypes";

export default function (state = [], action) {
  switch (action.type) {
    case ActionTypes.CREATE_COURSE:
      return [...state, Object.assign({}, action.course)];
    default:
      return state;
  }
}
