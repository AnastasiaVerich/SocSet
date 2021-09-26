import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {ProfileReducer} from "./Reducers/profile-reducer";
import {UsersReducer} from "./Reducers/users-reducer";
import {
        AuthorizationReducer
} from "./Reducers/authorization-reducer";
import thunkMiddlewere from "redux-thunk";//thunk as thunkMiddleWere
import {reducer as formReducer} from 'redux-form'
import {AppReducer} from "./Reducers/app-reducer";
import {dialogReducer} from "./Reducers/dialogs-reducer";
import {ChatReducer} from "./Reducers/chat-reducer";
import createSagaMiddleware from "redux-saga";
import {all, takeEvery } from "redux-saga/effects";
import {authSaga, getAuthorizationDataWorkerSaga, logoutWorkerSaga} from "./Reducers/auth-saga";
import {appWorkers, initializeWorkerSaga} from "./Reducers/app-saga";
import {dialogSaga} from "./Reducers/dialogs-saga";
import {profileSaga} from "./Reducers/profile-saga";
import {usersSaga} from "./Reducers/users-saga";


export const reducers = combineReducers(
    {
        profile: ProfileReducer,
        dialog: dialogReducer,
        usersPage: UsersReducer,
        auth: AuthorizationReducer,
        form: formReducer,
        app: AppReducer,
        chat: ChatReducer
    }
)
const sagaMiddleware = createSagaMiddleware()


const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddlewere, sagaMiddleware)));

sagaMiddleware.run(rootWatcher)
function* rootWatcher() {

        yield all([appWorkers(), authSaga(), dialogSaga(), profileSaga(), usersSaga()])

}


// @ts-ignore
window.store = store

export type StoreStateType = ReturnType<typeof reducers>
