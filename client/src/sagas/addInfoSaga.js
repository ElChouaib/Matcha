import { takeLatest, call,put,select, delay} from "redux-saga/effects";
import {resetState} from '../actions/resetStateAction';
import { getOptionsSuccess, createOptionSuccess, createOptionError, addInfoError, addLocationSuccess} from "../actions/addInfoAction";
import { updateUserSuccess} from '../actions/userAction';
import {request} from './helper';
const getSelectOptions =
  function *getSelectOptions () {
    try {
       const token = yield select((state) => state.user.token);
            const response = yield call(request, {
                "url": "http://localhost:5000/getOptions",
                "method": "post"
              },token);  
        if(response.data)
        {
            yield put(getOptionsSuccess(response.data));
        }
        else
        {
            yield put(getOptionsSuccess());
        }
    }catch (error) {
      if (error.response) {
        yield put(getOptionsSuccess());
      }
    }
};
const createSelectOption =
  function *createSelectOption (act) {
    try {
        const id = yield select((state) => state.user.id);
        const option = act.data.value;
         const token = yield select((state) => state.user.token);
            const response = yield call(request, {
                "url": "http://localhost:5000/createOption",
                "data": {option: option, id: id},
                "method": "post"
              },token);
        if(response.data.created)
        {
          yield put(createOptionSuccess(response.data.option));
        }
        else
        {
          yield put(createOptionError(response.data.error));
        }
        yield delay(4000);
        yield put(resetState());
    }catch (error) {
      if (error.response) {
        yield put(createOptionError('there has been an error'));
      }
    }
};

const add_Info =
  function *add_Info ({data, id}) {
    try {
      const info = {...data, id}
      const inter = data.interests.map(item => item.value)
      info.interests = inter;
       const token = yield select((state) => state.user.token);
            const response = yield call(request, {
                "url": "http://localhost:5000/addInfo",
                "data": info,
                "method": "post"
              },token);

      if(response.data.added)
      {
        yield put(updateUserSuccess(response.data.uu));
      }
      else
      {
        yield put(addInfoError(response.data.error));
      }
      yield delay(4000);
      yield put(resetState());
    }catch (error) {
      if (error.response) {
        yield put(createOptionError('there has been an error'));
      }
    }
};

const getLocation =
  function *getLocation () {
    try {
      const id = yield select((state) => state.user.id);
       const token = yield select((state) => state.user.token);
            const response = yield call(request, {
                "url": "http://localhost:5000/getLocation",
                "data": {id: id},
                "method": "post"
              },token);
      if(response.data)
      {
        yield put(addLocationSuccess({marker: response.data.marker, lat: response.data.loc.lat, lng: response.data.loc.lng}));
      }
      else
      {
        yield put(addInfoError(response.data.error));
      }
      yield delay(4000);
      yield put(resetState());
    }catch (error) {
      if (error.response) {
        yield put(createOptionError('there has been an error'));
      }
    }
};

const AddLocation =
  function *AddLocation ({loc}) {
    try {
      const id = yield select((state) => state.user.id);
      const token = yield select((state) => state.user.token);
      yield call(request, {
          "url": "http://localhost:5000/addLocation",
          "data": {id: id, loc},
          "method": "post"
        },token);
    }catch (error) {
      if (error.response) {
        yield put(createOptionError('there has been an error'));
      }
      yield delay(4000);
      yield put(resetState());
    }
};

export default function *() {
  yield takeLatest("GET_OPTIONS", getSelectOptions);
  yield takeLatest("CREATE_OPTION", createSelectOption);
  yield takeLatest("ADD_INFO", add_Info);
  yield takeLatest("GET_LOC", getLocation);
  yield takeLatest("ADD_LOCATION", AddLocation);
}