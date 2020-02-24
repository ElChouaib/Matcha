import { connectRouter } from "connected-react-router";
import registerReducer from "./registerReducer";
import loginReducer from "./loginReducer";
import {combineReducers} from "redux";
import {reducer as form} from "redux-form";
import resetPasswordReducer from "./resetPasswordReducer";
import addInfoReducer from './addInfoReducer';
import imagesReducer from './imagesReducers';
import userReducer from './userReducer';
import usersReducer from './usersReducer';
import blockList from './blockList';
import likeList from './likeList';
import likedByList from './likedByList';
import chat from './chatReducer';
import notif from './notifReducer';
import viewProfileList from './viewProfileList';

const combinedReducer = (history)=> combineReducers({
    "router" : connectRouter(history),
    "register" : registerReducer,
    "login": loginReducer,
    "user" : userReducer,
    "users" : usersReducer,
    "resetPassword": resetPasswordReducer,
    "addInfo" : addInfoReducer,
    "images" : imagesReducer,
    "blockList" : blockList,
    "likeList" : likeList,
    "likedByList": likedByList,
    "viewProfileList": viewProfileList,
    "chat": chat,
    "notif": notif,
    form
});
export default combinedReducer;