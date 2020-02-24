
import {put, takeLatest,call} from "redux-saga/effects";
import { select } from 'redux-saga/effects'; 
import {request} from './helper';
import { incStepperSuccess} from '../actions/stepperAction';
export const Stepper =
    function *Stepper () {
        try {
            const user = yield select(state => state.user);
            const token = yield select((state) => state.user.token);
            const response = yield call(request, {
                "url": "http://localhost:5000/updateStep",
                "data": {step : user.complete + 1,id : user.id},
                "method": "post"
              },token);
            if(response)
            {
                yield put(incStepperSuccess());
            }
        } catch (error) {
            console.log(error);
        }
    };
  
export default function *() {
    yield takeLatest("INC_STEPPER", Stepper);
}