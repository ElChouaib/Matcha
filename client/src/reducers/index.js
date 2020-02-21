import { connectRouter } from "connected-react-router";
import {combineReducers} from "redux";
import {reducer as form} from "redux-form";
import loginReducer from "./loginReducer";

const combinedReducer = (history)=> combineReducers({
    "router" : connectRouter(history),
    "login": loginReducer,
    form
});
export default combinedReducer;