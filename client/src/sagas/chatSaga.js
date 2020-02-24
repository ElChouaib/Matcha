import {takeLatest, put, select, delay,call} from "redux-saga/effects";
import {getConverSuccess, getConverError, LoadMessagesSuccess, LoadMessagesError, SendMessageError} from '../actions/chatAction';
import { resetChatState } from "../actions/resetStateAction";
import socket from '../socketConn';
import {request} from './helper';


const getConv =
  function *getConv () {
    try {
      const user_id = yield select(state => state.user.id);
      const data = {user_id : user_id}
      const token = yield select((state) => state.user.token);
      const response = yield call(request, {
          "url": "http://localhost:5000/getMatchs",
          "method": "post",
          "data" : data
        },token);  
      if(response.data)
      {
        yield put(getConverSuccess(response.data));
      }
    }catch (error) {
      if (error.response) {
        yield put(getConverError('An error has occured'));
      }
    }
};

const loadMsg =
  function *loadMsg ({conv_id}) {
    try {
      const user_id = yield select(state => state.user.id);
      const data = {user_id : user_id, conv_id: conv_id}
      const token = yield select((state) => state.user.token);
      const response = yield call(request, {
          "url": "http://localhost:5000/loadMessages",
          "method": "post",
          "data" : data
        },token);  
      if(response.data)
      {
        yield put(LoadMessagesSuccess(response.data, conv_id));
      }
    }catch (error) {
      if (error.response) {
        yield put(LoadMessagesError('An error has occured'));
      }
    }
};

const sendMsg =
  function *sendMsg ({id, message}) {
    try {
      const user = yield select(state => state.user);
      const data = {sender : user.id, receiver: id, message: message}
      const token = yield select((state) => state.user.token);
      const response = yield call(request, {
          "url": "http://localhost:5000/sendMessage",
          "method": "post",
          "data" : data
        },token);  
      if(response.data.sent === true)
      {
        const by = {id: user.id, username: user.username, profilePic: user.profilePic};
        socket.emit('chatMessage', {by: by, sender: user.id, receiver: data.receiver, profilePic: response.data.profilePic, message: message, content: `${user.username} sent you a message`});
      }
      else
      {
        yield put(SendMessageError(id, response.data.err));
        yield delay(4000);
        yield put(resetChatState());
      }
    }catch (error) {
      if (error.response) {
        yield put(SendMessageError('An error has occured'));
      }
    }
};

const reconnect =
  function *reconnect () {
    try {
      const user_id = yield select(state => state.user.id);
      socket.emit('join', {id: user_id});
    }catch (error) {
      if (error.response) {
        yield put(SendMessageError('An error has occured'));
      }
    }
};

export default function *() {
    yield takeLatest("GET_CONVERSATIONS", getConv);
    yield takeLatest("LOAD_MESSAGES", loadMsg);
    yield takeLatest("SEND_MESSAGE", sendMsg);
    yield takeLatest("REJOIN_ROOM", reconnect);
}