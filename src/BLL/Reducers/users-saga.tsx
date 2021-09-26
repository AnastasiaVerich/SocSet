import {usersAPI} from "../../DAL/api";
import {
    followAC,
    setTotalUsersCountAC,
    setUserIdForDisabledAC,
    setUsersAC,
    toggleIsFetchingAC,
    unFollowAC
} from "./users-reducer";
import {call, put, takeEvery} from "redux-saga/effects";
import {
    getOneProfileWorkerSaga,
    getStatusWorkerSaga,
    updateInfoProfileWorkerSaga,
    updatePhotoTC,
    updateStatusWorkwrSaga
} from "./profile-saga";

export function* getUsersWorkerSaga(action: ReturnType<typeof getUsers>): any {
    yield put(toggleIsFetchingAC(true))
    let response;
    response = yield call(usersAPI.getUsers, action.currentPages, action.pagesize, action.follow, action.term)
    yield put(toggleIsFetchingAC(false))
    yield put(setUsersAC(response.items))
    yield put(setTotalUsersCountAC(response.totalCount))

}

// делает запрос на сервер, меняет на сервере свойство фоллоу на true
export function* folloWorkerSaga(action: ReturnType<typeof follow>): any {
    yield put(setUserIdForDisabledAC(true, action.id))
    let response = yield call(usersAPI.follow, action.id)
    if (response.resultCode === 0) {
        yield put(followAC(action.id))
    }
    yield put(setUserIdForDisabledAC(false, action.id))
}

// делает запрос на сервер, удаляет на сервере свойство фоллоу(ставит по умолчанию false)
export function* unFollowWorkerSaga(action: ReturnType<typeof unFollow>): any {
        yield put(setUserIdForDisabledAC(true, action.id))
        let response = yield call(usersAPI.unFollow, action.id)
        if (response.resultCode === 0) {
            yield put(unFollowAC(action.id))
        }
        yield put(setUserIdForDisabledAC(false, action.id))

}

export const getUsers = (currentPages: number, pagesize: number, follow: boolean, term: any) => {
    return {type: "USERS/GET_USERS", currentPages, pagesize, follow, term}
}
export const follow = (id: any) => {
    return {type: "USERS/FOLLOW", id}
}
export const unFollow = (id: any) => {
    return {type: "USERS/UN_FOLLOW", id}
}
export function* usersSaga() {
    yield takeEvery("USERS/GET_USERS", getUsersWorkerSaga)
    yield takeEvery("USERS/FOLLOW", folloWorkerSaga)
    yield takeEvery("USERS/UN_FOLLOW", unFollowWorkerSaga)
}