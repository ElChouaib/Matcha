import { takeLatest,call, put ,select} from "redux-saga/effects";
import {request} from './helper';
import {setProfilePicError,getImages,getImagesSuccess,getImagesError,sendImagesError,delImagesError} from "../actions/imagesAction";

const getPictures =
  function *getPictures ({user_id}) {
    try {
     
      const token = yield select((state) => state.user.token);
      const response = yield call(request, {
                "url": "http://localhost:5000/getImages",
                "data": {user_id : user_id},
                "method": "post"
              },token);
        if(response.data.length > 0)
        {
            yield put(getImagesSuccess(response.data));
        }
       
    }catch (error) {
      if (error.response) {
        yield put(getImagesError(error.response));
      }
    }
};
const sendPictures =
  function *sendPictures ({data}) {
    try {
      const user_id = yield select(state => state.user.id);
      const token = yield select((state) => state.user.token);
      const response = yield call(request, {
                "url": "http://localhost:5000/upload",
                "data": data,
                "method": "post"
              },token);  
        if(response.data)
        {
          yield put(getImages(user_id));
        }
       
    }catch (error) {
      if (error.response) {
        yield put(sendImagesError(error.response));
      }
    }
};
const delPictures =
  function *delPictures ({img}) {
    try {
      const user_id = yield select(state => state.user.id);
      const data = {
        user_id : user_id,
        img_id : img.imgId,
        isProfilePic : img.isProfilePic
    }
      const token = yield select((state) => state.user.token);
      const response = yield call(request, {
                "url": "http://localhost:5000/deleteImages",
                "data": data,
                "method": "post"
              },token);  
        if(response.data)
        {
          yield put(getImages(user_id));
        }
    }catch (error) {
      if (error.response) {
        yield put(delImagesError(error.response));
      }
    }
};
const setProfilePicture =
  function *setProfilePicture ({imgId}) {
    try {

      const user_id = yield select(state => state.user.id);
      const data = {
        user_id : user_id,
        img_id : imgId
    }
      const token = yield select((state) => state.user.token);
      const response = yield call(request, {
                "url": "http://localhost:5000/setProfilePicture",
                "data": data,
                "method": "post"
              },token);  
        if(response.data)
        {
          yield put(getImages(user_id));
        }
    }catch (error) {
      if (error.response) {
        yield put(setProfilePicError(error.response));
      }
    }
};
export default function *() {
    yield takeLatest("GET_IMAGES", getPictures);
    yield takeLatest("SEND_IMAGES", sendPictures);
    yield takeLatest("DEL_IMAGES",delPictures);
    yield takeLatest("SET_PROFILE_PIC",setProfilePicture);
  }