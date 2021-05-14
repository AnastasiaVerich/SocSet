const addPost = "Add-post"
const textInTextArea = "changeTextInTextArea"


/// Type for Reduces
type TextInTextAreaType ={
    type: "changeTextInTextArea"
    text: string
}
type AddPostType={
    type: "Add-post"
}

//// type for Action
export type ActionType=TextInTextAreaType|AddPostType

////   Initial State
export type StatePropfilaType ={
    textInTextArea: string,
    postsDataArray: {
        id: number;
        post: string;
        likeCount: number;
    }[];
}
let initialState: StatePropfilaType = {
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


export const ProfileReducer = (state:StatePropfilaType = initialState, action: ActionType):StatePropfilaType => {


    switch (action.type) {
        case textInTextArea:
            return {
                ...state,
                textInTextArea: action.text}
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

export const textInTextAreaAC=(text: string):TextInTextAreaType=>
    ({type: textInTextArea, text})
export const addPostAC=():AddPostType=> ({type: addPost})