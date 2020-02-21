import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,
    DELETE_USER,
    GET_BLOCK_USER_SUCCESS
} from "../actions/userAction";
const DEFAULT_STATE = {
    status: 'DEFAULT STATE',
    isUsers: false,
    users : null,
    err : null
  };
export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case GET_USERS:
            return {status: 'loading', isUsers : false, users:null}
        case GET_USERS_SUCCESS:
            return {status: 'success', isUsers : true, users:action.data};
        case GET_USERS_ERROR:
            return {status: 'error', isUsers : false, err : action.err};
        case DELETE_USER:
            {
                const id = action.id;
                let arr  = [...state.users];
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].user.id == id) {
                        arr.splice(i, 1);
                        i--;
                    }
                }
                return {status: 'success', isUsers : true, users : arr};
            }
            
      default:
        return state;
    }
}