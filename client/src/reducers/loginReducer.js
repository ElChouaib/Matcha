import {
    LOGIN_USER,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR_FIELD,
} from "../actions/loginAction";

import { CLEAR_USER_INFORMATION } from '../actions/logoutAction'

import {
  RESET_STATE
} from '../actions/resetStateAction';

const DEFAULT_STATE = {
  status: 'offline',
  error: null
};
  
export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
      case LOGIN_USER:
        return{
          status: 'loading',
          error:null
        }
      case LOGIN_USER_SUCCESS:

        return {
          status:'online',
          error: null
        }
      case LOGIN_USER_ERROR:
        return {
          status: 'error',
          error: action.error,
        }
      case LOGIN_USER_ERROR_FIELD:
        return {
          status: 'errorField',
          error: action.errorField,
        }
      case CLEAR_USER_INFORMATION:
        return DEFAULT_STATE
      case RESET_STATE:
        return 'initial state';
      default:
        return state;
    }
}