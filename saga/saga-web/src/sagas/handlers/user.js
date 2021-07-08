import { call, put } from "redux-saga/effects";
import { actions as userActions } from "../../reducers/user";
import { requestUserInfo} from "../requests/user";

export function* handlerUserInfo(action) {
   try {
      const response = yield call(requestUserInfo);
      const { data } = response;
      yield put(userActions.userInfoSuccess(data));
   } catch (error) {
      console.log(error);
   }
}