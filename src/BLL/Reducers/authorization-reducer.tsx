import {authorizationAPI, securityAPI} from "../../DAL/api";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";

const SET_USER_DATA = "SET_USER_DATA"
const GET_CAPTCHA = "CAPTCHA"

//type for Reduces
type SetUserType = {
    type: "SET_USER_DATA"
    userId: any,
    email: any,
    login: any,
    isAuthorization: any
}
type GetCaptchaType = {
    type: "CAPTCHA"
    captchaURl: any
}


///////type for Action
type ActionType = SetUserType | GetCaptchaType

/////initial State
type AuthorizationStateType = {
    userId: number | null
    email: string | null
    login: boolean | null
    isAuthorization: boolean | null
    captchaURl: any
}

let initialState: AuthorizationStateType = {
    userId: null,
    email: null,
    login: null,
    isAuthorization: false,
    captchaURl: null
}

export const AuthorizationReducer = (state: AuthorizationStateType = initialState, action: ActionType): AuthorizationStateType => {
    if (state) {
        switch (action.type) {
            case SET_USER_DATA:
                return {
                    ...state,
                    userId: action.userId,
                    email: action.email,
                    login: action.login,
                    isAuthorization: action.isAuthorization
                }
                case GET_CAPTCHA:
                return {
                    ...state,
                    captchaURl: action.captchaURl
                }
            default:
                return state;
        }
    } else return state
}
//Thunk Creator
// авторизируемся
export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispath: any) => {
    let response = await authorizationAPI.login(email, password, rememberMe, captcha)
    // если авт прошла успешно, то выполняем это
    if (response.data.resultCode === 0) {
        dispath(getAuthorizationDataTC())
    }
    else {
        if (response.data.resultCode === 10){
            dispath(getCaptchaTC())
        }
        let errorMessages = response.data.messages.length > 0
            ? response.data.messages[0]
            : "some error"
        dispath(stopSubmit("Login", {_error: errorMessages}))
    }
}
//получаем данные о пользователе, который авторизировался
export const getAuthorizationDataTC = () => async (dispath: Dispatch) => {
    // т к авт прошла успешно, то делаем запрос, от куда берем даные текущего пользователя
    let response = await authorizationAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispath(setAuthorizationDataAC(id, email, login, true))
    }
}
//делаем запрос на сервер, удаляем свои данные для автаризации
export const logoutTC = () => async (dispath: Dispatch) => {
    let response = await authorizationAPI.logout()
    if (response.data.resultCode === 0) {
        dispath(setAuthorizationDataAC(null, null, null, false));
    }
}
// делаем запрос на сервер, получаем картинку антибот
export const getCaptchaTC = () => async (dispath: Dispatch) => {
    let response = await securityAPI.getCaptchaUrl()
    let captchaUrl = response.data.url
    debugger
    dispath(setCaptchaAC(captchaUrl))
}

//ACTION CREATOR
// меняем данные в в стейте на данные авторизированного пользователя
export const setAuthorizationDataAC = (userId: number | null, email: string | null, login: string | null, isAuthorization: boolean | null): SetUserType => ({
    type: SET_USER_DATA,
    userId: userId,
    email: email,
    login: login,
    isAuthorization: isAuthorization
})
// добовляем капчу, пришедшую из сервера, в наш стейт
export const setCaptchaAC = (captchaURl: any): GetCaptchaType => ({
    type: GET_CAPTCHA,
    captchaURl: captchaURl
})