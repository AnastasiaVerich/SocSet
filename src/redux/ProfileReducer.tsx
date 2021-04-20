const addPost = "Add-post"
const textInTextArea = "changeTextInTextArea"

export const ProfileReducer = (state:any, action:any) => {


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