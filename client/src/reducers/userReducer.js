import {
  UPDATE_USER_SUCCESS,
} from "../actions/userAction";
import { CLEAR_USER_INFORMATION } from '../actions/logoutAction';
import { DEC_STEPPER ,INC_STEPPER_SUCCESS} from "../actions/stepperAction";
import { ADD_LOCATION_SUCCESS} from "../actions/addInfoAction";
import {SET_PROFILE_PIC_SUCCESS, GET_IMAGES_SUCCESS, SET_PROFILE_PIC} from "../actions/imagesAction";

export default function (state = null, action) {
    switch (action.type) {
      case UPDATE_USER_SUCCESS:
        return action.data;
      case CLEAR_USER_INFORMATION:
        return null;
      case DEC_STEPPER:
        return {...state, complete: state.complete - 1}
      case INC_STEPPER_SUCCESS:
        return {...state, complete: state.complete + 1}
      case ADD_LOCATION_SUCCESS:
        return {...state, marker: action.loc.marker ,lat: action.loc.lat, long: action.loc.lng}
      case SET_PROFILE_PIC:
        return {...state, profilePic: action.path}
      default:
        return state;
    }
}