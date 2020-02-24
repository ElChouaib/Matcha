import { takeLatest, call,put,select, delay} from "redux-saga/effects";
import {resetState} from "../actions/resetStateAction";
import {editInfoError} from "../actions/profileAction";
import {addInfoError} from "../actions/addInfoAction";
import { updateUserSuccess} from '../actions/userAction';
import {request} from './helper';

const edit_Info =
function *edit_Info ({data}) {
    try {
        const id = yield select((state) => state.user.id);
        const info = {...data, id}
        const inter = data.interests.map(item => item.value)
        info.interests = inter;
        const token = yield select((state) => state.user.token);
        const response = yield call(request, {
                "url": "http://localhost:5000/editProfile",
                "data": info,
                "method": "post"
              },token);
        if(response.data.result.valid)
        {
            yield put(updateUserSuccess(response.data.uu));
        }
        else
        {
            yield put(editInfoError(response.data.err));
        }
        yield delay(4000);
        yield put(resetState());
    }catch (error) {
        if (error.response) {
            yield put(addInfoError('there has been an error'));
        }
    }
};

export default function *() {
  yield takeLatest("EDIT_INFO", edit_Info);
}