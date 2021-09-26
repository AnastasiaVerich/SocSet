import {toggleIsFetchingAC} from "./users-reducer";
import {profileAPI, usersAPI} from "../../DAL/api";
import {stopSubmit} from "redux-form";
import {setOneProfileAC, updatePhotoAC, updateStatusAC} from "./profile-reducer";
import {call, put, select, takeEvery} from "redux-saga/effects";
import {StoreStateType} from "../store";


export function* getOneProfileWorkerSaga(action: ReturnType<typeof getOneProfile>): any {
    yield put(toggleIsFetchingAC(true))
    let response = yield call(usersAPI.getProfile, action.id)
    yield put(setOneProfileAC(response.data))
    yield put(toggleIsFetchingAC(false))
}
// с сервера достает статус выбранного пользователя
export function* getStatusWorkerSaga(action: ReturnType<typeof getStatus>): any {
    yield put(toggleIsFetchingAC(true))
    let response = yield call(profileAPI.getStatus, action.id)
    yield put(updateStatusAC(response.data))
    yield put(toggleIsFetchingAC(false))
}
// обновляет статус на сервере
export function* updateStatusWorkwrSaga(action: ReturnType<typeof updateStatus>): any {
    yield put(toggleIsFetchingAC(true))
    try {
        let response = yield call(profileAPI.updateStatus,action.status)
        if (response.data.resultCode === 0) {
            yield put(updateStatusAC(action.status))
        }
    } catch (error: any) {
        console.log("я перехватил ошибку ")
        console.log(error)
    }
    yield put(toggleIsFetchingAC(false))
}
// обновляет фото на сервере
export function* updatePhotoTC (action: ReturnType<typeof updatePhoto> ):any{
        yield put(toggleIsFetchingAC(true))

        let response = yield call(profileAPI.updatePhoto, action.file)
        if (response.data.resultCode === 0) {
            yield put(updatePhotoAC(response.data.data.photos))
        }
        yield put(toggleIsFetchingAC(false))


}
// обновляет информацию о профиле на сервере
export function* updateInfoProfileWorkerSaga (action: ReturnType<typeof updateInfoProfile> ): any {
    yield put(toggleIsFetchingAC(true))
    const getCart = (state:StoreStateType) => state.auth.userId

    const userId = yield select(getCart)
    let response = yield call(profileAPI.updateInfoProfile,action.profile)
    if (response.data.resultCode === 0) {
        yield put(getOneProfile(userId))
    } else {
        yield put(stopSubmit("editProfile", {_error: response.data.messages[0]}))
        return Promise.reject()
    }
    yield put(toggleIsFetchingAC(false))

}

export const getOneProfile = (id: any) => {
    return {type: "PROFILE/GET_ONE_PROFILE", id}
}
export const getStatus = (id: any) => {
    return {type: "PROFILE/getStatus", id}

}
export const updateStatus = (status: string) => {
    return {type: "PROFILE/updateStatusTC", status}

}
export const updatePhoto = (file: any) => {
    return {type: "PROFILE/updatePhoto", file}

}
export const updateInfoProfile= (profile: any) => {
    return {type: "PROFILE/updateInfoProfileT", profile}

}


export function* profileSaga() {
    yield takeEvery("PROFILE/GET_ONE_PROFILE", getOneProfileWorkerSaga)
    yield takeEvery("PROFILE/getStatus", getStatusWorkerSaga)
    yield takeEvery("PROFILE/updateStatusTC", updateStatusWorkwrSaga)
    yield takeEvery("PROFILE/updatePhoto", updatePhotoTC)
    yield takeEvery("PROFILE/updateInfoProfileT", updateInfoProfileWorkerSaga)
}