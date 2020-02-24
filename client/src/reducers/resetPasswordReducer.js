import {
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  SEND_EMAIL,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_ERROR,
} from "../actions/resetPasswordAction";
import {
  RESET_STATE
} from '../actions/resetStateAction';
export default function (state = '', action) {
  switch (action.type) {
    case RESET_PASSWORD:
      return {status: 'loading', error: null}
    case RESET_PASSWORD_SUCCESS:
    return {status: 'success', error: null}
    case RESET_PASSWORD_ERROR:
      return {status: 'error', error: action.error}
    case SEND_EMAIL:
      return {status: "loading", errors: null}
    case SEND_EMAIL_SUCCESS:
      return {status: "success", errors: null}
    case SEND_EMAIL_ERROR:
      return {status: "error", errors: action.error}
    case RESET_STATE:
      return 'initial state';
    default:
      return state;
  }
}