import {
    GET_LIKED_BY_SUCCESS,LIKE_USER,DISLIKE_USER_ACT
} from "../actions/userAction";
const DEFAULT_STATE = {
    isUsers: false,
    users : null,
  };
export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case GET_LIKED_BY_SUCCESS:
            return {isUsers : true, users:action.data};
        case LIKE_USER:
        {
            const liked_user_id = action.liked_user_id;
            let arr = [];
            if(state.users)
                arr = [...state.users];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].id === parseInt(liked_user_id)) {
                    if(arr[i].like === 'heLiked')
                        arr[i].like = "match";
                    break ;
                }
            }
            return {status: 'success', isUsers : true, users : arr};
        }
        case DISLIKE_USER_ACT :
        {
            const dislike_user_id = action.dislike_user_id;
            let arr = [];
            if(state.users)
                arr = [...state.users];
            for (i = 0; i < arr.length; i++) {
                if (arr[i].id === parseInt(dislike_user_id)) {
                    if(arr[i].like === "match")
                        arr[i].like = 'heLiked';
                    break ;
                }
            }
            return {status: 'success', isUsers : true, users : arr};
        }
      default:
        return state;
    }
}