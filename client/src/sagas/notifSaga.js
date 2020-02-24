import {takeLatest, put, select, call, delay} from "redux-saga/effects";
import {request} from './helper';
import {resetNotifState} from '../actions/resetStateAction';
import {GetNotifSuccess, OpenNotifSuccess} from '../actions/notifAction';
import socket from '../socketConn';

const getNotif =
  function *getNotif () {
    try {
      const user_id = yield select(state => state.user.id);
      const data = {user_id : user_id}
      const token = yield select((state) => state.user.token);
      const response = yield call(request, {
          "url": "http://localhost:5000/getNotif",
          "method": "post",
          "data" : data
        },token);
      if(response.data)
      {
        yield put(GetNotifSuccess(response.data));
      }
    }catch (error) {
      if (error.response) {

      }
    }
};

const openNotif =
  function *openNotif () {
    try {
      const user_id = yield select(state => state.user.id)
      const token = yield select((state) => state.user.token);
      yield call(request, {
          "url": "http://localhost:5000/openNotif",
          "method": "post",
        },token);  
      yield put(OpenNotifSuccess());
      socket.emit('openNotif', {id: user_id});
    }catch (error) {
      if (error.response) {
        
      }
    }
};

const resetNotif =
  function *resetNotif () {
    try {
      yield delay (4000);
      yield put(resetNotifState());
    }catch (error) {
      console.log(error);
    }
};

export default function *() {
    yield takeLatest("GET_NOTIF", getNotif);
    yield takeLatest("OPEN_NOTIF", openNotif);
    yield takeLatest("NEW_NOTIF", resetNotif);
}