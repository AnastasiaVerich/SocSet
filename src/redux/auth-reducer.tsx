import {authAPI} from "../components/DAL/api";

const SetUsreData = "SetUsreData"

/////type for Reduces
type DataSetUserType ={
    type:"SetUsreData"
    data: any
}


///////type for Action
type ActionType=DataSetUserType

/////initial State
type AuthStateType = {
    userId: number|null
    email: string|null
    login: boolean|null
    isAuth: boolean|null
}
let initionState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const AuthReducer = (state:AuthStateType = initionState, action: ActionType):AuthStateType => {
    if (state) {
        switch (action.type) {
            case SetUsreData:
                return {
                    ...state,
                   ...action.data,
                    isAuth: true
                }




            default:
                return state;
        }
    }else return state
}

export const dataSetUserAC = (userId: any, email: any, login: any): DataSetUserType => ({type: SetUsreData, data:{userId, email, login}})
export const loginThunkCreater = ()=> {

    return(dispath: any)=>{
        authAPI.me().then(response => {

            if (response.resultCode === 0) {
                let {id, email, login} = response.data
                dispath(dataSetUserAC(id, email, login))
            }
        })
    }
}
