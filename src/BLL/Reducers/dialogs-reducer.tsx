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
    totalCount: any
}
let initialState: StateType = {
    recipientId: null,
    messages: null,
    users: null,
    totalCount: null
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
                    messages: action.items.items,
                    totalCount: action.items.totalCount
                }
            case GET_SELECTED_DIALOG_MORE:
                let oldMessages = {...state}

                return {
                    ...state,
                    messages: action.items.items.concat(oldMessages.messages),
                    totalCount: action.items.totalCount

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




