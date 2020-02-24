export const GET_CONVERSATIONS = "GET_CONVERSATIONS";

export const GET_CONVERSATIONS_SUCCESS = "GET_CONVERSATIONS_SUCCESS"

export const GET_CONVERSATIONS_ERROR = "GET_CONVERSATIONS_ERROR"

export const SELECT_CONVERSATION = "SELECT_CONVERSATION";

export const LOAD_MESSAGES = "LOAD_MESSAGES";

export const LOAD_MESSAGES_SUCCESS = "LOAD_MESSAGES_SUCCESS";

export const LOAD_MESSAGES_ERROR = "LOAD_MESSAGES_ERROR";

export const SEND_MESSAGE = "SEND_MESSAGE";

export const SEND_MESSAGE_SUCCESS = "SEND_MESSAGE_SUCCESS";

export const SEND_MESSAGE_ERROR = "SEND_MESSAGE_ERROR";

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

export const GetConversations = () => ({
    "type": GET_CONVERSATIONS,
});

export const getConverSuccess = (data) => ({
    "type": GET_CONVERSATIONS_SUCCESS,
    data: data,
});

export const getConverError = (err) => ({
    "type": GET_CONVERSATIONS_ERROR,
    err: err,
});

export const SelectConversation = (id) => ({
    "type": SELECT_CONVERSATION,
    id: id,
});

export const LoadMessages = (conv_id) => ({
    "type": LOAD_MESSAGES,
    conv_id: conv_id,
});

export const LoadMessagesSuccess = (data, conv_id) => ({
    "type": LOAD_MESSAGES_SUCCESS,
    data: data,
    conv_id: conv_id,
});

export const LoadMessagesError = (err) => ({
    "type": LOAD_MESSAGES_ERROR,
    err: err,
});

export const SendMessage = (id, profilePic, message) => ({
    "type": SEND_MESSAGE,
    id: id,
    profilePic: profilePic,
    message: message,
});

export const SendMessageSuccess = (id, profilePic, message) => ({
    "type": SEND_MESSAGE_SUCCESS,
    id: id,
    profilePic: profilePic,
    message: message,
});

export const SendMessageError = (conv_id, err) => ({
    "type": SEND_MESSAGE_ERROR,
    conv_id: conv_id,
    err: err,
});

export const ReceiveMsg = (data) => ({
    "type": RECEIVE_MESSAGE,
    data: data,
});