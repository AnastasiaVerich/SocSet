const sendMessage = "sendMessage"

type SendMessageType = {
    type: "sendMessage"
    massages: string
}


//// type for Action
type ActionType = SendMessageType


////   Initial State
export type StateDialogReducesType = {

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

        case sendMessage:
            let text = action.massages;
            return {
                ...state,
                smsData: [{id: 5, sms: text}, ...state.smsData]
            };
        default:
            return state;
    }
}



export const sendMessageAC = (massages: string): SendMessageType => {
    return {type: sendMessage, massages}
}
