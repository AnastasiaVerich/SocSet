import {authAPI} from "../components/DAL/api";
import {InitializeAction, stopSubmit} from "redux-form";
import {getAuthThunkCreater} from "./auth-reducer";

const SET_INITIALIXED = "SET_INITIALIXED"

/////type for Reduces
type InitializedType = {
    type: "SET_INITIALIXED"
}


///////type for Action
type ActionType = InitializedType

/////initial State
type AuthStateType = {
    initialized: boolean
}
let initionState: AuthStateType = {
    initialized: false
}

export const AppReducer = (state: AuthStateType = initionState, action: ActionType): AuthStateType => {
    if (state) {
        switch (action.type) {
            case SET_INITIALIXED:{
                return {
                    ...state,
                    initialized: true
                }
            }

            default:
                return state;
        }
    } else return state
}

export const initializedSuccessAC = (): InitializedType => ({type: SET_INITIALIXED})

export const initializeTC = () => (dispath: any) => {
   let promisse= dispath(getAuthThunkCreater());

    Promise.all([promisse]).then(()=>{
        dispath(initializedSuccessAC());
    })


}
/*

export const loginThunkCreater = (email: any, password: any, rememberMe: any) => (dispath: any) => {


    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispath(getAuthThunkCreater())
            } else {
                debugger
                let errorMessages = response.data.messages.length > 0
                    ? response.data.messages[0]
                    : "some error"
                dispath(stopSubmit("Login", {_error: errorMessages}))
            }
        })
}
export const logoutThunkCreater = (email: any, password: any, rememberMe: any) => (dispath: any) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispath(dataSetUserAC(null, null, null, false))
            }
        })
}*/

