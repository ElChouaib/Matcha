import {
    GET_BLOCK_USER_SUCCESS,
    DELETE_BLOCK
} from "../actions/userAction";
const DEFAULT_STATE = {
    isUsers: false,
    users : null,
  };
export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case GET_BLOCK_USER_SUCCESS:
            return {isUsers : true, users:action.data};
        case DELETE_BLOCK:
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