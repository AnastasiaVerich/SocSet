import React from 'react';
import {DispatchTypePosts, MyPosts, StateTypePosts} from "./MyPosts";
import {connect} from "react-redux";
import {addPostAC, deletePostAC} from "../../../redux/ProfileReducer";
import {StoreStateType} from "../../../redux/StoreRedux";
import {Dispatch} from "redux";


let mapSttateToprops=(state:StoreStateType):StateTypePosts=>{
    return{
        posts: state.profile.postsDataArray

    }
}

let mapDispatchToToprops=(dispatch: Dispatch):DispatchTypePosts=>{
    return{
        addpost: (massages:string)=>{dispatch(addPostAC(massages))},
        deletePost: (id:number)=>{dispatch(deletePostAC(id))}
        }
    }


export const MyPostsConteiner = connect(mapSttateToprops, mapDispatchToToprops )(MyPosts);

