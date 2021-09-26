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