import {takeLatest, put, delay} from "redux-saga/effects";
import {push} from "react-router-redux";
import {resetState} from '../actions/resetStateAction';
import { ResetPasswordSuccess, ResetPasswordError, SendEmailSuccess, SendEmailError} from "../actions/resetPasswordAction";
import axios from 'axios';

const resetPass =
  function *resetPass ({data}) {
    try {
      const response = yield axios.post('http://localhost:5000/resetPassword', {token: data.token, pass: data.form.password, c_pass: data.form.confirmPassword});
      if(response.data.reset)
      {
        yield put(ResetPasswordSuccess());
      }
      else
      {
        yield put(ResetPasswordError(response.data.error));
      }
      yield delay(4000);
      yield put(resetState());
      yield put(push('/login'));
    }catch (error) {
      if (error.response) {
        yield put(ResetPasswordError('Error, please retry'));
      }
    }
};

const sendEmailS =
function *sendEmailS (data) {
  try {
    const response = yield axios.post('http://localhost:5000/sendResetEmail', {email: data.data.email});
    if(response.data.sent)
    {
      yield put(SendEmailSuccess());
    }
    else if(response.data.error === 'Email not found')
    {
      yield put(SendEmailError('Email not found'));
    }
    yield delay(4000);
    yield put(resetState());
  }catch (error) {
    if (error.response) {
      yield put(SendEmailError('Error sending the email, please retry'));
    }
  }
};

export default function *() {
  yield takeLatest("SEND_EMAIL", sendEmailS);
  yield takeLatest("RESET_PASSWORD", resetPass);
}