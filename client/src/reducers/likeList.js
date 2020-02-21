import {
    GET_LIKE_USER_SUCCESS,
    DELETE_LIKE
} from "../actions/userAction";
const DEFAULT_STATE = {
    isUsers: false,
    users : null,
  };
export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case GET_LIKE_USER_SUCCESS:
            return {isUsers : true, users:action.data};
        case DELETE_LIKE:
        {
            const id = action.id;
            let arr  = state.users;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].id == id) {
                    arr.splice(i, 1);
                    i--;
                }
            }
            return {isUsers : true, users : arr};
        }
      default:
        return state;
    }
}