import {LOAD_AUTHORS_OK} from '../actions/types';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case LOAD_AUTHORS_OK:
      return action.authors;

    default:
      return state;
  }
}
