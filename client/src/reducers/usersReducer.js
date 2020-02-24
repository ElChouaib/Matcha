import {
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,
    DELETE_USER,
    DISLIKE_USER,   

} from "../actions/userAction";
import {RESET_STATE_USERS} from "../actions/resetStateAction";
const DEFAULT_STATE = {
    status: 'DEFAULT STATE',
    isUsers: false,
    users : null,
    err : null
  };
export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case GET_USERS_SUCCESS:{
             return {status: 'success', isUsers : true, users:action.data};
        }
        case GET_USERS_ERROR:
            return {status: 'error', isUsers : false, err : action.err};
        case DISLIKE_USER :
            {
                const dislike_user_id = action.dislike_user_id;
                let arr  = [...state.users];
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].user.id === parseInt(dislike_user_id)) {
                        if(arr[i].user.like === "iLike")
                            arr[i].user.like = null;
                        else if(arr[i].user.like === "match")
                            arr[i].user.like = 'heLiked';
                        break ;
                    }
                }
                return {status: 'success', isUsers : true, users : arr};
            }
        case DELETE_USER:
            {
                const id = action.id;
                let arr  = [...state.users];
                for (var j = 0; j < arr.length; j++) {
                    if (arr[j].user.id === parseInt(id)) {
                        arr.splice(j, 1);
                        break ;
                    }
                }
                return {status: 'success', isUsers : true, users : arr};
            }
        case RESET_STATE_USERS :
            return DEFAULT_STATE;
            
      default:
        return state;
    }
}