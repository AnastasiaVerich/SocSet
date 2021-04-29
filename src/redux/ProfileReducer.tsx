const addPost = "Add-post"
const textInTextArea = "changeTextInTextArea"
let initionState = {
    textInTextArea: "hh",
    postsDataArray: [
        {
            id: 1,
            post: "Приветики??",
            likeCount: 1
        },
        {
            id: 2,
            post: "Ребята аууу...",
            likeCount: 0
        },
        {
            id: 3,
            post: "Это мой первый пост!",
            likeCount: 1200
        }
    ]
}

export const ProfileReducer = (state = initionState, action: any) => {


    switch (action.type) {
        case textInTextArea:
            return {...state, textInTextArea: action.sms}
        case addPost:
            let text = state.textInTextArea
            return {
                ...state,
                textInTextArea: "",
                postsDataArray: [{id: 4, post: text, likeCount: 10}, ...state.postsDataArray]
            }


        default:
            return state
    }
}