import {getAuthorizationDataTC} from "./authorization-reducer";
import {chatAPI, MessagesType} from "../../DAL/chat-api";
import {Dispatch} from "redux";

const SN_CHAT_MESSAGES_RECEVIED = "SN/CHAT/MESSAGES_RECEVIED"

//type for Reduces
type ChatMesType = {
    type: "SN/CHAT/MESSAGES_RECEVIED",
    payload: { messages: MessagesType[] }

}

//type for Action
type ActionType = ChatMesType

//initial State
type StateType = {
    messages: MessagesType[]
}
let initialState: StateType = {
    messages: [] as MessagesType[]
}

export const ChatReducer = (state = initialState, action: ActionType): StateType => {

    switch (action.type) {
        case SN_CHAT_MESSAGES_RECEVIED:
            debugger
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }

        default:
            return state;

    }
}

// Action Creator
export const actions = {
    messagesReceived: (messages: MessagesType[]) => ({
        type: SN_CHAT_MESSAGES_RECEVIED, payload: {messages}
    } as const)
}


let _messagesHandler: ((messages: MessagesType[]) => void) | null = null

const newMessageHandler = (dispatch: Dispatch) => {
    if (_messagesHandler === null) {
        _messagesHandler = (messages) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _messagesHandler
}

//Thunk Creator
export const startMessagesListening = () => async (dispath: Dispatch) => {
    chatAPI.start()
    chatAPI.subscribe(newMessageHandler(dispath))
}
export const stopMessagesListening = () => (dispath: Dispatch) => {
    chatAPI.unsubscribe(newMessageHandler(dispath))
    chatAPI.stop()
}
export const sendMessagesThunk = (messages: string) => (dispath: any) => {
    chatAPI.sendMessages(messages)
}



