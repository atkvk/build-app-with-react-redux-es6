import {LOAD_AUTHORS_OK} from './types';
import authorApi from '../api/mockAuthorApi';

export function loadAuthors() {
  return function (dispatch) {
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



