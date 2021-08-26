import {messagesAPI} from "../../DAL/api";
import {Dispatch} from "redux";

const GET_SELECTED_DIALOG = "GET_SELECTED_DIALOG"
const GET_SELECTED_DIALOG_MORE = "GET_SELECTED_DIALOG_MORE"
const GET_USERS_TALKED_WITH = "GET_USERS_TALKED_WITH"
//type for Reduces
type GetSelectedDialogType = {
    type: "GET_SELECTED_DIALOG"
    items: any;
}
type GetSelectedDialogMoreType = {
    type: "GET_SELECTED_DIALOG_MORE"
    items: any;
}
type GetUsersTalkedWithType = {
    type: "GET_USERS_TALKED_WITH"
    usersArray: any;
}

//type for Action
type ActionType = GetSelectedDialogType | GetUsersTalkedWithType | GetSelectedDialogMoreType

//initial State
type StateType = {
    recipientId: number | null
    messages: any
    users: any
}
let initialState: StateType = {
    recipientId: null,
    messages: null,
    users: null
}

export const dialogReducer = (state: StateType = initialState, action: ActionType): StateType => {
    if (state) {
        switch (action.type) {
            case GET_SELECTED_DIALOG:
                /*let oldMessages = {...state}
                if (state.messages !== null) {
                    return {
                        ...state,
                        messages: action.items.concat(oldMessages.messages)
                    }
                } else */
                    return {
                    ...state,
                    messages: action.items
                }
                case GET_SELECTED_DIALOG_MORE:
                let oldMessages = {...state}

                    return {
                    ...state,
                    messages: action.items.concat(oldMessages.messages)
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
export const getSelectedDialogTC = (id: any, currentPages: any, pagesize: any) => async (dispatch: Dispatch) => {
    let response = await messagesAPI.getSelectedDialog(id, currentPages, pagesize)
    if(currentPages===1){
    dispatch(getSelectedDialogAC(response.items));}
    else {    dispatch(getSelectedDialogMoreAC(response.items));}
}
// отправить сообщение на сервер
export const senMessageTC = (userId: any, body: string) => async (dispatch: any) => {
    let response = await messagesAPI.sendMessage(userId, body)
    if (response.data.resultCode === 0) {
        dispatch(getSelectedDialogTC(userId, 1, 20))
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




export const getSelectedDialogMoreAC = (items: any): GetSelectedDialogMoreType => ({
    type: GET_SELECTED_DIALOG_MORE,
    items: items
})
export const getUsersTalkedWithAC = (users: any): GetUsersTalkedWithType => ({
    type: GET_USERS_TALKED_WITH,
    usersArray: users
})




