import {call, put, takeEvery} from "redux-saga/effects";
import {authorizationAPI, securityAPI} from "../../DAL/api";
import {setAuthorizationDataAC, setCaptchaAC} from "./authorization-reducer";
import {stopSubmit} from "redux-form";

//*******************************saga
// авторизируемся
/*
export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispath: any) => {
    let response = await authorizationAPI.login(email, password, rememberMe, captcha)
    // если авт прошла успешно, то выполняем это
    if (response.data.resultCode === 0) {
        dispath(getAuthorizationData())
    } else {
        if (response.data.resultCode === 10) {
            dispath(getCaptcha())
        }
        let errorMessages = response.data.messages.length > 0
            ? response.data.messages[0]
            : "some error"
        dispath(stopSubmit("Login", {_error: errorMessages}))
    }
}
*/
export function* loginWorkerSaga (action: ReturnType<typeof login >) {
    // @ts-ignore
    let response = yield call(authorizationAPI.login, action.email, action.password, action.rememberMe, action.captcha)
    // если авт прошла успешно, то выполняем это
    if (response.data.resultCode === 0) {
        yield put(getAuthorizationData())
    } else {
        if (response.data.resultCode === 10) {
            yield put(getCaptcha())
        }
        let errorMessages = response.data.messages.length > 0
            ? response.data.messages[0]
            : "some error"
        yield put(stopSubmit("Login", {_error: errorMessages}))
    }
}
//получаем данные о пользователе, который авторизировался
export function* getAuthorizationDataWorkerSaga():any {
    // т к авт прошла успешно, то делаем запрос,
    // от куда берем даные текущего пользователя

    let response =  yield call(authorizationAPI.me)
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        yield put(setAuthorizationDataAC(id, email, login, true))
    }
}
export function* logoutWorkerSaga() {

    // @ts-ignore
    let response = yield call(authorizationAPI.logout)
    if (response.data.resultCode === 0) {
        yield put(setAuthorizationDataAC(null, null, null, false));
    }
}
// делаем запрос на сервер, получаем картинку антибот
export function* getCaptchaWorkerSaga() {
    // @ts-ignore
    let response = yield call(securityAPI.getCaptchaUrl)
    let captchaUrl = response.data.url
    yield put(setCaptchaAC(captchaUrl))
}
//*******************************actions for activate saga
export const getAuthorizationData = () => {
    return {type: 'AUTH/GET_AUTH_DATA'}
}
export const logout = () => {
    return {type: 'AUTH/LOGOUT'}
}
export const getCaptcha = () => {
    return {type: 'AUTH/GET_CAPTCHA'}
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: any) => {
    return {type: 'AUTH/LOGIN', email, password, rememberMe, captcha}
}



export function* authSaga() {
    yield takeEvery("AUTH/GET_AUTH_DATA", getAuthorizationDataWorkerSaga)
    yield takeEvery("AUTH/LOGOUT", logoutWorkerSaga)
    yield takeEvery("AUTH/GET_CAPTCHA", getCaptchaWorkerSaga)
    yield takeEvery("AUTH/LOGIN", loginWorkerSaga)
}
