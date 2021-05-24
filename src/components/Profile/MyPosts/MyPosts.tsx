import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {Field, reduxForm} from "redux-form";

export type StateTypePosts = {
    posts: {
        id: number;
        post: string;
        likeCount: number;
    }[];
}
export type DispatchTypePosts = {

    addpost: (massages: string) => void
}

type MyPostType = StateTypePosts & DispatchTypePosts


export const MyPosts = (props: MyPostType) => {



    let postArrayDefoult = props.posts.map((element: any) =>
        <div key={element.id}><Post onePostElement={element.post} likeCount={element.likeCount}/>
        </div>
    )

    let onSumbit=(value: any)=>{
        props.addpost(value.massages);
    }
    return (
        <div>
            <div className={s.post}>
                My post
                <div>
                    <div className={s.area}>
                        <PostReduxForm onSubmit={onSumbit}/>
                    </div>

                </div>
            </div>
            {postArrayDefoult}
        </div>
    )
}

const postForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"massages"}
                       component={"textarea"}
                       name={"massages"}
                />
            </div>
            <button>
                Add
            </button>
        </form>
    )
}
const PostReduxForm = reduxForm({
    form: 'post'
})(postForm)
