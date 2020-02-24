import {OPEN_NOTIF_SUCCESS, NEW_NOTIF, GET_NOTIF_SUCCESS} from '../actions/notifAction';
import { RESET_NOTIF_STATE} from '../actions/resetStateAction';

const DEFAULT_STATE = {
    current_notif: '',
    notifications: [],
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case OPEN_NOTIF_SUCCESS:
        {
            let arr = [...state.notifications];
            arr.forEach(e => {
                if(e.seen === 0)
                    e.seen = 1;
            });
            return {current_notif: '', notifications: arr};
        }
        case NEW_NOTIF:
        {
            let ele = {by: action.data.by, content: action.data.content, seen: 0};
            let arr  = [...state.notifications];
            arr.unshift(ele);
            return {current_notif: action.data.content, notifications: arr};
        }
        case GET_NOTIF_SUCCESS:
        {
            return {current_notif: '', notifications: action.notif};
        }
        case RESET_NOTIF_STATE:
            return {current_notif: '', notifications: [...state.notifications]};
        default:
            return state;
    }
}