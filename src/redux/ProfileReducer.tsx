const addPost = "Add-post"
const textInTextArea = "changeTextInTextArea"

let initionState={
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

export const ProfileReducer = (state=initionState, action:any) => {


    switch (action.type) {
        case addPost: {
            state.postsDataArray.push(
                {
                    id: 4,
                    post: state.textInTextArea,
                    likeCount: 10
                }
            )
            state.textInTextArea = ""
        }
            break;
        case textInTextArea: {
            state.textInTextArea = action.sms;
        }
            break;

    }
    return state
}