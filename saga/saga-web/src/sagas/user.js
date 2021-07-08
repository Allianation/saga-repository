import { takeLatest } from "redux-saga/effects";
import { handlerUserInfo } from "./handlers/user";
import { types as userTypes } from "../reducers/user";

export function* userInfo() {
    yield takeLatest(userTypes.USER_INFO_REQUEST, handlerUserInfo);
}