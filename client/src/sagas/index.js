import {fork, all} from "redux-saga/effects";
import registerSaga from "./registerSaga";
import loginSaga from './loginSaga';
import logoutSaga from "./logoutSaga";
import resetPasswordSaga from './resetPasswordSaga';
import addInfoSaga from './addInfoSaga';
import imagesSaga from './imagesSaga';
import stepperSaga from './stepperSaga';
import usersSaga from './usersSaga'
import profileSaga from "./profileSaga";
import chatSaga from "./chatSaga";
import notifSaga from "./notifSaga";

export default function *() {
  yield all([
    fork(registerSaga),
    fork(loginSaga),
    fork(logoutSaga),
    fork(resetPasswordSaga),
    fork(addInfoSaga),
    fork(imagesSaga),
    fork(stepperSaga),
    fork(usersSaga),
    fork(profileSaga),
    fork(chatSaga),
    fork(notifSaga),
  ]);
}