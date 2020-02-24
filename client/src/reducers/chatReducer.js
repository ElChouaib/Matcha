import {SELECT_CONVERSATION, LOAD_MESSAGES_SUCCESS, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_ERROR, GET_CONVERSATIONS_SUCCESS, RECEIVE_MESSAGE} from '../actions/chatAction';
import { RESET_STATE, RESET_CHAT_STATE } from '../actions/resetStateAction';

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
                if (arr[i].id === parseInt(id)) {
                    return {selectedConversation: arr[i], conversations:[...state.conversations]};
                }
            }
            break;
        }
        case LOAD_MESSAGES_SUCCESS:
        {
            const id = action.conv_id;
            let arr  = [...state.conversations];
            for (var j = 0; j < arr.length; j++) {
                if (arr[j].id === parseInt(id)) {
                    arr[j].messages = action.data;
                    return {selectedConversation: {...state.selectedConversation, messages: action.data}, conversations:arr};
                }
            }
            break;
        }
        case SEND_MESSAGE_SUCCESS:
        {
            const id = action.id;
            const ele = {path: action.profilePic, message: action.message, isMyMessage: true};
            let arr  = [...state.conversations];
            for (var k = 0; k < arr.length; k++) {
                if (arr[k].id === parseInt(id)) {
                    arr[k].messages && arr[k].messages.push(ele);
                    break;
                }
            }
            if(state.selectedConversation.id === parseInt(id))
                return {selectedConversation: {...state.selectedConversation, messages: arr[k].messages}, conversations:arr};
            else
                return {selectedConversation: {...state.selectedConversation}, conversations:arr};
        }
        case SEND_MESSAGE_ERROR:
        {
            return {selectedConversation: {...state.selectedConversation}, conversations:[...state.conversations], err: action.err}
        }
        case RECEIVE_MESSAGE:
        {
            const id = action.data.sender;
            const ele = {path: action.data.profilePic, message: action.data.message, isMyMessage: false};
            let arr  = [...state.conversations];
            for (var m = 0; m < arr.length; m++) {
                if (arr[m].id === parseInt(id)) {
                    arr[m].messages && arr[m].messages.push(ele);
                    break;
                }
            }
            if(state.selectedConversation.id === parseInt(id))
                return {selectedConversation: {...state.selectedConversation, messages: arr[m].messages}, conversations:arr};
            else
                return {selectedConversation: {...state.selectedConversation}, conversations:arr};
        }
        case RESET_CHAT_STATE:
            return {selectedConversation: {...state.selectedConversation}, conversations: [...state.conversations]};
        case RESET_STATE:
            return DEFAULT_STATE;
        default:
            return state;
    }
}