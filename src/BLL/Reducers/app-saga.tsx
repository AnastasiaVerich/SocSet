//Thunk Creator
import {getAuthorizationData} from "./auth-watcher";
import {initializedSuccessAC} from "./app-reducer";
import {call, put, takeEvery} from "redux-saga/effects";

export function* initializeWorkerSaga () {
    // @ts-ignore
    let promise = yield call(getAuthorizationData());
        yield put(initializedSuccessAC());
}
export const initialize=()=>{
   return { type: "APP/INITIALIZE"}
}

export function* AppWorkers(){
    yield takeEvery("APP/INITIALIZE", initializeWorkerSaga)
}
