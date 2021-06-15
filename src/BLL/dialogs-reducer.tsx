import { messagesAPI} from "../DAL/api";
import {Dispatch} from "redux";

const GETLISTSMSWITHUSER = "GETLISTSMSWITHUSER"
const getUsersChats = "getUsersChats"
/////type for Reduces
type GetListOneDialogType = {
    type: "GETLISTSMSWITHUSER"
    items: any;
}
type GetUsersChatsType = {
    type: "getUsersChats"
    usersArray: any;
}

///////type for Action
type ActionType = GetListOneDialogType | GetUsersChatsType

/////initial State
type AuthStateType = {
    recipientId: number | null
    messages: any
    oneMessage: string
    users: any
}

let initialState: AuthStateType = {
    recipientId: null,
    messages: null,
    oneMessage: "",
    users: null
}

export const dial2Reducer = (state: AuthStateType = initialState, action: ActionType): AuthStateType => {
    if (state) {
        switch (action.type) {
            case GETLISTSMSWITHUSER:
                return {
                    ...state,
                    messages: action.items
                }
                case getUsersChats:
                return {
                    ...state,
                    users: action.usersArray
                }
            default:
                return state;
        }
    } else return state
}

export const dataMessagesWithOneUser = (items: any): GetListOneDialogType => ({
    type: GETLISTSMSWITHUSER,
    items: items
})

export const GetUsersChatsAC=(users: any):GetUsersChatsType=>({
    type: getUsersChats,
    usersArray: users
})


export const getMessagesWithOneUserThunkCreater = (id: any) => async (dispath: Dispatch) => {
    let response = await messagesAPI.getListMessagesWithUser(id)
        dispath(dataMessagesWithOneUser(response.items));

}
export const sendSmsThunkCreater = (userId:any, body:string) => async (dispath: any) => {
    let response = await messagesAPI.senSms(userId,body)
    if (response.data.resultCode === 0) {
        dispath(getMessagesWithOneUserThunkCreater(userId))
    }
}

export const getLUsersWHaveChatThunkCreater = () => async (dispath: Dispatch) => {
    let response = await messagesAPI.getLUsersWHaveChat()
    dispath(GetUsersChatsAC(response));

}

