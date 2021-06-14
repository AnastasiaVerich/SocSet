import { messagesAPI} from "../DAL/api";
import {Dispatch} from "redux";

const GETLISTSMSWITHUSER = "GETLISTSMSWITHUSER"

/////type for Reduces
type GetListOneDialogType = {
    type: "GETLISTSMSWITHUSER"
    items: any;
}



///////type for Action
type ActionType = GetListOneDialogType

/////initial State
type AuthStateType = {
    userId: number | null
    messages: any
    oneMessage: string
}

let initialState: AuthStateType = {
    userId: null,
    messages: null,
    oneMessage: ""
}

export const dial2Reducer = (state: AuthStateType = initialState, action: ActionType): AuthStateType => {
    if (state) {
        switch (action.type) {

            case GETLISTSMSWITHUSER:
                return {
                    ...state,
                    messages: action.items
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
export const getMessagesWithOneUserThunkCreater = (id: any) => async (dispath: Dispatch) => {
    debugger
    let response = await messagesAPI.getListMessagesWithUser(id)
    if (response.error === null) {
        dispath(dataMessagesWithOneUser(response.items));
    }
}

