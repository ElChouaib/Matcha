import {
  INSCRIPTION_USER,
  INSCRIPTION_USER_ERROR,
  INSCRIPTION_USER_SUCCESS,
  EMAIL_CONFIRMATION,
  EMAIL_CONFIRMATION_SUCCESS,
  EMAIL_CONFIRMATION_ERROR,
} from "../actions/registerAction";
import {
  RESET_STATE
} from '../actions/resetStateAction';

export default function (state = '', action) {
  switch (action.type) {
  case INSCRIPTION_USER:
    return {registerStatus: 'loading'};
  case INSCRIPTION_USER_SUCCESS:
    return {registerStatus: 'success'};
  case INSCRIPTION_USER_ERROR:
    return {registerStatus: 'error', error: action.error};
  case EMAIL_CONFIRMATION:
    return {emailConfirmation: 'loading'};
  case EMAIL_CONFIRMATION_SUCCESS:
    return {emailConfirmation: 'success'};
  case EMAIL_CONFIRMATION_ERROR:
    return {emailConfirmation: 'error'};
    case RESET_STATE :
      return 'initial state';
  default:
    return state;
  }
}