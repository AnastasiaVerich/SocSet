import React from 'react';
import {DispatchTypePosts, MyPosts, StateTypePosts} from "./MyPosts";
import {connect} from "react-redux";
import {addPostAC, textInTextAreaAC} from "../../../redux/ProfileReducer";
import {StoreStateType} from "../../../redux/StoreRedux";
import {Dispatch} from "redux";


let mapSttateToprops=(state:StoreStateType):StateTypePosts=>{
    return{
        posts: state.profile.postsDataArray,
        newPostText: state.profile.textInTextArea

    }
}

let mapDispatchToToprops=(dispatch: Dispatch):DispatchTypePosts=>{
    return{
        addpost: ()=>{dispatch(addPostAC())},
        updateNewPostText: (text:string)=>{dispatch(textInTextAreaAC(text))}
        }
    }


export const MyPostsConteiner = connect(mapSttateToprops, mapDispatchToToprops )(MyPosts);

