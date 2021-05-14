const sendMessage = "sendMessage"
const textInTextArea = "changeTextInTextAreaMessage"

/// Type for Reduces
type TextInTextAreaType = {
    type: "changeTextInTextAreaMessage"
    sms: string
}
type SendMessageType = {
    type: "sendMessage"
}


//// type for Action
type ActionType = TextInTextAreaType | SendMessageType


////   Initial State
export type StateDialogReducesType = {

    textInTextArea: string
    smsData: {
        id: number;
        sms: string;
    }[];
    dialogUsersArray: {
        idLink: number;
        name: string;
    }[];

}
let initionState: StateDialogReducesType = {
    textInTextArea: "123",
    smsData: [
        {id: 1, sms: "Hi"},
        {id: 2, sms: "How are u?"},
        {id: 3, sms: "GOOOOODDD!"},
        {id: 4, sms: "lol!"}
    ],
    dialogUsersArray: [
        {idLink: 1, name: 'Anastasia'},
        {idLink: 2, name: 'Ruslan'},
        {idLink: 3, name: 'Veronica'},
        {idLink: 4, name: 'Maxim'},
        {idLink: 5, name: 'Dima'}
    ]
}


export const DialogReducerr = (state: StateDialogReducesType = initionState, action: ActionType): StateDialogReducesType => {
    switch (action.type) {
        case textInTextArea:
            return {
                ...state,
                textInTextArea: action.sms
            };

        case sendMessage:
            let text = state.textInTextArea;
            return {
                ...state,
                textInTextArea: "",
                smsData: [{id: 5, sms: text}, ...state.smsData]
            };
        default:
            return state;
    }
}


export const textInTextAreaAC = (text: string): TextInTextAreaType => {
    return {type: textInTextArea, sms: text}
}
export const sendMessageAC = (): SendMessageType => {
    return {type: sendMessage}
}
