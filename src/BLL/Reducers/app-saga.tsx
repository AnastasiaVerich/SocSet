//Thunk Creator
import {getAuthorizationData} from "./auth-saga";
import {initializedSuccessAC} from "./app-reducer";
import {call, put, takeEvery} from "redux-saga/effects";

export function* initializeWorkerSaga(): any {
    yield put(getAuthorizationData());
    yield put(initializedSuccessAC());
}

export const initialize = ()  => {
    return {type: "xxxxxx"}
}

export function* appWorkers() {
    yield takeEvery("xxxxxx", initializeWorkerSaga)
}
