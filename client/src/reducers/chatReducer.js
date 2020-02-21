import {SELECT_CONVERSATION, LOAD_MESSAGES_SUCCESS, SEND_MESSAGE, GET_CONVERSATIONS_SUCCESS} from '../actions/chatAction';
import { RESET_STATE } from '../actions/resetStateAction';

const DEFAULT_STATE = {
    selectedConversation: {},
    conversations: [],
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case GET_CONVERSATIONS_SUCCESS:
            return {selectedConversation: {...state.selectedConversation},conversations: action.data};
        case SELECT_CONVERSATION:
        {
            const id = action.id;
            let arr  = [...state.conversations];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].id == id) {
                    return {selectedConversation: arr[i], conversations:[...state.conversations]};
                }
            }
        }
        case LOAD_MESSAGES_SUCCESS:
        {
            const id = action.conv_id;
            let arr  = [...state.conversations];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].id == id) {
                    arr[i].messages = action.data;
                    return {selectedConversation: {...state.selectedConversation, messages: action.data}, conversations:arr};
                }
            }
        }
        case SEND_MESSAGE:
        {
            const id = action.id;
            const ele = {path: action.profilePic, message: action.message, isMyMessage: true};
            let arr  = [...state.conversations];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].id == id) {
                    arr[i].messages.push(ele);
                    break;
                }
            }
            return {selectedConversation: {...state.selectedConversation, messages: arr[i].messages}, conversations:arr};
        }
        case RESET_STATE:
            return DEFAULT_STATE;
        default:
            return state;
    }
}