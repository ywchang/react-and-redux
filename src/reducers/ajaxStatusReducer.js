import {initialState} from "./initialState";
import actionTypes from "../actions/actionTypes";

function actionTypeEndInSuccess(type) {
  return type.substring(type.length - 8) === '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
  if (action.type === actionTypes.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (actionTypeEndInSuccess(action.type)) {
    return state - 1;
  }
  return state;
}
