import {LOAD_AUTHORS_OK} from './types';
import authorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthors() {
  return function (dispatch) {

    dispatch(beginAjaxCall());
    
    authorApi.getAllAuthors()
      .then(function (authors) {
        dispatch(loadAuthorsOk(authors));
      })
      .catch(function (error) {
        throw error;
      });
  };
}

function loadAuthorsOk(authors) {
  return {
    type: LOAD_AUTHORS_OK,
    authors
  };
}



