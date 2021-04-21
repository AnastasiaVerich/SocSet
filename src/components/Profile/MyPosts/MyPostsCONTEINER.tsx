import React, {ChangeEvent} from 'react';
import {MyPosts} from "./MyPosts";


type MyPostType = {

    store: any
}



export const MyPostsConteiner = (props: MyPostType) => {
let state=props.store.getState()
    let addpost = () => {
       // props.addpost();
       props.store.dispatch({type:"Add-post"})
    }
    let updateNewPostText = (text:string) => {
       // props.updateNewPostText(e.currentTarget.value)
       props.store.dispatch({type: "changeTextInTextArea", sms: text})
    }
debugger
    return (
        <MyPosts updateNewPostText={updateNewPostText}
                 addpost={addpost}
                 posts={state.profile.postsDataArray}
                 newPostText={state.profile.textInTextArea} />
    )
}
