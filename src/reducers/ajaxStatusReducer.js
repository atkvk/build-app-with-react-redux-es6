import {BEGIN_AJAX_CALL} from '../actions/types';
import initailState from './initialState';

function actionTypeEndsInOk(type) {
  return type.substring(type.length - 3) == '_OK';
}

export default function ajaxStatusReducer(state = initailState.countAjaxCallInProgress,
                                          action) {

  if (action.type === BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (actionTypeEndsInOk(action.type)) {
    return state - 1;
  }
  return state;
}
