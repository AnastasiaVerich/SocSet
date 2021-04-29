import React, {ChangeEvent} from 'react';
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


let mapSttateToprops=(state:any)=>{
    return{
        posts: state.profile.postsDataArray,
        newPostText: state.profile.textInTextArea

    }
}

let mapDispatchToToprops=(dispatch: any)=>{
    debugger
    return{
        addpost: ()=>{dispatch({type:"Add-post"})},
        updateNewPostText: (text:any)=>{dispatch({type: "changeTextInTextArea", sms: text})}

    }
}

export const MyPostsConteiner = connect(mapSttateToprops, mapDispatchToToprops )(MyPosts);

