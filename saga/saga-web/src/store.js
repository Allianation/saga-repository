import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "./reducers/user";
import { userInfo } from "./sagas/user";

const reducer = combineReducers({
    users: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(reducer, {}, enhancer);

sagaMiddleware.run(userInfo);

export default store;