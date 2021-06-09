import {authAPI} from "../components/DAL/api";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";

const SetUserData = "SetUserData"

/////type for Reduces
type DataSetUserType = {
    type: "SetUserData"
    payload: any
}


///////type for Action
type ActionType = DataSetUserType

/////initial State
type AuthStateType = {
    userId: number | null
    email: string | null
    login: boolean | null
    isAuth: boolean | null
}

let initialState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const AuthReducer = (state: AuthStateType = initialState, action: ActionType): AuthStateType => {
    if (state) {
        switch (action.type) {
            case SetUserData:
                return {
                    ...state,
                    ...action.payload
                }
            default:
                return state;
        }
    } else return state
}

export const dataSetUserAC = (userId: number | null
    , email: string | null
    , login: string | null
    , isAuth: boolean | null): DataSetUserType => ({
    type: SetUserData,
    payload: {userId, email, login, isAuth}
})
export const getAuthThunkCreater = () => async (dispath: Dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispath(dataSetUserAC(id, email, login, true))
    }
}

export const loginThunkCreater = (email: string, password: string, rememberMe: boolean) => async (dispath: any) => {

    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispath(getAuthThunkCreater())
    } else {
        debugger
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

