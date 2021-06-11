import {authAPI, securityAPI} from "../DAL/api";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";

const SetUserData = "SetUserData"
const getCaptchaURlSucsecc = "captchaURl"

/////type for Reduces
type DataSetUserType = {
    type: "SetUserData"
    payload: any
}
type getCaptchaURlSucseccType = {
    type: "captchaURl"
    captchaURl: any
}


///////type for Action
type ActionType = DataSetUserType | getCaptchaURlSucseccType

/////initial State
type AuthStateType = {
    userId: number | null
    email: string | null
    login: boolean | null
    isAuth: boolean | null
    captchaURl: any
}

let initialState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURl: null
}

export const AuthReducer = (state: AuthStateType = initialState, action: ActionType): AuthStateType => {
    if (state) {
        switch (action.type) {

            case SetUserData:
                return {
                    ...state,
                    ...action.payload
                }
                case getCaptchaURlSucsecc:
                return {
                    ...state,
                    captchaURl: action.captchaURl
                }
            default:
                return state;
        }
    } else return state
}

export const dataSetUserAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean | null): DataSetUserType => ({
    type: SetUserData,
    payload: {userId, email, login, isAuth}
})
export const getCaptchaURlSucseccAC = (captchaURl: any): getCaptchaURlSucseccType => ({
    type: getCaptchaURlSucsecc,
    captchaURl: captchaURl
})
export const getAuthThunkCreater = () => async (dispath: Dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispath(dataSetUserAC(id, email, login, true))
    }
}

export const loginThunkCreater = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispath: any) => {

    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispath(getAuthThunkCreater())
    }
    else {
        if (response.data.resultCode === 10){
            dispath(getCaptchaUrlThunkCreater())
        }
        let errorMessages = response.data.messages.length > 0
            ? response.data.messages[0]
            : "some error"
        dispath(stopSubmit("Login", {_error: errorMessages}))
    }

}
export const logoutThunkCreater = (email: string, password: string, rememberMe: boolean) => async (dispath: Dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispath(dataSetUserAC(null, null, null, false))
    }
}
export const getCaptchaUrlThunkCreater = () => async (dispath: Dispatch) => {
    let response = await securityAPI.getCaptchaUrl()
    let captchaUrl = response.data.url
debugger
    dispath(getCaptchaURlSucseccAC(captchaUrl))
}

