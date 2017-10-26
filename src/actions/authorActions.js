import AuthorApi from "../api/mockAuthorApi";
import ActionTypes from "./actionTypes";
import {beginAjaxCall} from "./ajaxStatusActions";

function loadAuthorsSuccess(authors) {
  return {
    type: ActionTypes.LOAD_AUTHORS_SUCCESS,
    authors
  };
}

export function loadAuthors() {
  return dispatch => {
    dispatch(beginAjaxCall());
    AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(err => {
      throw err;
    });
  };
}



