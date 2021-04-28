const sendMessage = "sendMessage"
const textInTextArea = "changeTextInTextAreaMessage"
let initionState = {
    textInTextArea: "123",
    smsData: [
        {id: 1, sms: "Hi"},
        {
            id: 2,
            sms: "How are u?"
        },
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

export const DialogReducerr = (state = initionState, action: any) => {
    switch (action.type) {
        case textInTextArea:
            return  {
                ...state,
                textInTextArea: action.text
            };
        case sendMessage:
            let text = state.textInTextArea;
            return {
                ...state,
                textInTextArea: '',
                smsData: [...state.smsData, {id: 6, sms: text}]
            };
        default:
            return state;
    }
}
