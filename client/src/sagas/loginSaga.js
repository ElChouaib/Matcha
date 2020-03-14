import {takeLatest, put,call,delay} from "redux-saga/effects";
import {push} from "react-router-redux";
import {resetState} from '../actions/resetStateAction';
import {loginError, loginUserSuccess,loginErrorField} from "../actions/loginAction";
import {GetNotif} from '../actions/notifAction'
import {updateUserSuccess} from '../actions/userAction'
import {request} from './helper';
import socket from '../socketConn';

const login =
  function *login ({data}) {
    try {
    const username = data.username;
    const password = data.password;
      const response = yield call(request, {
        "url": "http://localhost:5000/login",
        "data": {
          username,
          password
        },
        "method": "post"
      });
     
      if(response.data.isValid)
      {
        const  user = response.data.user;
        yield put(loginUserSuccess());
        yield put(updateUserSuccess(user));
        
        socket.emit('join', {id: user.id});
        if(user.complete === 3){
          yield put(GetNotif())
          yield put(push("/profile"));
        }
        else
          yield put(push("/completeProfile"));
      }
      else
      {
        yield put(loginErrorField(response.data.errorField))
        yield delay(4000);
        yield put(resetState());
      }
    }catch (error) {
      if (error.response) {
        yield put(loginError("error.response.statusText", "error.response.status"));
      }
    }
  };
  const omniAuth =
  function *omniAuth ({data}) {
    try {
        const response = yield call(request, {
          "url": "http://localhost:5000/loginOmni",
          "data": {
          data,
          },
          "method": "post"
        });
       
        if(response.data.isValid)
        {
          const  user = response.data.user;
          yield put(loginUserSuccess());
          yield put(updateUserSuccess(user));
          
          socket.emit('join', {id: user.id});
          if(user.complete === 3){
            yield put(GetNotif())
            yield put(push("/profile"));
          }
          else
            yield put(push("/completeProfile"));
        }
        else
        {
          yield put(loginErrorField(response.data.errorField))
          yield delay(4000);
          yield put(resetState());
        }
      }catch (error) {
        if (error.response) {
          yield put(loginError("error.response.statusText", "error.response.status"));
        }
      }
  };

export default function *() {
  yield takeLatest("LOGIN_USER", login);
  yield takeLatest("SEND_TOKEN", omniAuth);
}