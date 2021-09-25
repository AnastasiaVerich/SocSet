import {getAuthorizationDataTC} from "./authorization-reducer";
import {chatAPI, MessagesType, StatusType} from "../../DAL/chat-api";
import {Dispatch} from "redux";

const SN_CHAT_MESSAGES_RECEVIED = "SN/CHAT/MESSAGES_RECEVIED"
const SN_CHAT_STATUS_CHANGED = "SN_CHAT_STATUS_CHANGED"

//type for Reduces
type ChatMesType = {
    type: "SN/CHAT/MESSAGES_RECEVIED",
    payload: { messages: MessagesType[] }

}
type StatusChangetType = {
    type: "SN_CHAT_STATUS_CHANGED",
    payload: { status: StatusType}

}

//type for Action
type ActionType = ChatMesType | StatusChangetType

//initial State
type StateType = {
    messages: MessagesType[]
    status: StatusType
}
let initialState: StateType = {
    messages: [] as MessagesType[],
    status: "pending"
}

export const ChatReducer = (state = initialState, action: ActionType): StateType => {

    switch (action.type) {
        case SN_CHAT_MESSAGES_RECEVIED:
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }
        case SN_CHAT_STATUS_CHANGED:
            return {
                ...state,
                status: action.payload.status
            }

        default:
            return state;

    }
}

// Action Creator
export const actions = {
    messagesReceived: (messages: MessagesType[]) => ({
        type: SN_CHAT_MESSAGES_RECEVIED, payload: {messages}
    } as const),
    statusChanged: (status: StatusType) => ({
        type: SN_CHAT_STATUS_CHANGED, payload: {status}
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


let _statusChangedHandler: ((st: StatusType) => void) | null = null

const statusChengedHandler = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status:StatusType) => {
            dispatch(actions.statusChanged(status))
        }
    }
    return _statusChangedHandler
}

//Thunk Creator
export const startMessagesListening = () => async (dispath: Dispatch) => {
    chatAPI.start()
    chatAPI.subscribe('message-received',newMessageHandler(dispath))
    chatAPI.subscribe('statusChanget',statusChengedHandler(dispath))
}
export const stopMessagesListening = () => (dispath: Dispatch) => {
    chatAPI.unsubscribe('message-received',newMessageHandler(dispath))
    chatAPI.unsubscribe('statusChanget',statusChengedHandler(dispath))
    chatAPI.stop()
}
export const sendMessagesThunk = (messages: string) => (dispath: any) => {
    chatAPI.sendMessages(messages)
}



