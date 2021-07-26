import { messagesAPI} from "../../DAL/api";
import {Dispatch} from "redux";

const GET_SELECTED_DIALOG = "GET_SELECTED_DIALOG"
const GET_USERS_TALKED_WITH = "GET_USERS_TALKED_WITH"
//type for Reduces
type GetSelectedDialogType = {
    type: "GET_SELECTED_DIALOG"
    items: any;
}
type GetUsersTalkedWithType = {
    type: "GET_USERS_TALKED_WITH"
    usersArray: any;
}

//type for Action
type ActionType = GetSelectedDialogType | GetUsersTalkedWithType

//initial State
type StateType = {
    recipientId: number | null
    messages: any
    oneMessage: string
    users: any
}
let initialState: StateType = {
    recipientId: null,
    messages: null,
    oneMessage: "",
    users: null
}

export const dialogReducer = (state: StateType = initialState, action: ActionType): StateType => {
    if (state) {
        switch (action.type) {
            case GET_SELECTED_DIALOG:
                return {
                    ...state,
                    messages: action.items
                }
                case GET_USERS_TALKED_WITH:
                return {
                    ...state,
                    users: action.usersArray
                }
            default:
                return state;
        }
    } else return state
}


//Thunk Creator
// получить с сервера список сообщений с выбранным пользователем
export const getSelectedDialogTC = (id: any) => async (dispatch: Dispatch) => {
    let response = await messagesAPI.getSelectedDialog(id)
    dispatch(getSelectedDialogAC(response.items));
}
// отправить сообщение на сервер
export const senMessageTC = (userId:any, body:string) => async (dispatch: any) => {
    let response = await messagesAPI.sendMessage(userId,body)
    if (response.data.resultCode === 0) {
        dispatch(getSelectedDialogTC(userId))
    }
}
// получить список пользователей с кем общался
export const getUsersTalkedWithTC = () => async (dispatch: Dispatch) => {
    let response = await messagesAPI.getUsersTalkedWith()
    dispatch(getUsersTalkedWithAC(response));

}

// Action Creator
export const getSelectedDialogAC = (items: any): GetSelectedDialogType => ({
    type: GET_SELECTED_DIALOG,
    items: items
})
export const getUsersTalkedWithAC=(users: any):GetUsersTalkedWithType=>({
    type: GET_USERS_TALKED_WITH,
    usersArray: users
})




