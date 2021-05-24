import {authAPI} from "../components/DAL/api";

const SetUsreData = "SetUsreData"

/////type for Reduces
type DataSetUserType = {
    type: "SetUsreData"
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
let initionState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const AuthReducer = (state: AuthStateType = initionState, action: ActionType): AuthStateType => {
    if (state) {
        switch (action.type) {
            case SetUsreData:
                return {
                    ...state,
                    ...action.payload
                }
            default:
                return state;
        }
    } else return state
}

export const dataSetUserAC = (userId: any, email: any, login: any, isAuth: boolean): DataSetUserType => ({
    type: SetUsreData,
    payload: {userId, email, login, isAuth}
})
export const getAuthThunkCreater = () => (dispath: any) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispath(dataSetUserAC(id, email, login, true))
        }
    })
}

export const loginThunkCreater = (email: any, password: any, rememberMe: any) => (dispath: any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispath(getAuthThunkCreater())
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
}

