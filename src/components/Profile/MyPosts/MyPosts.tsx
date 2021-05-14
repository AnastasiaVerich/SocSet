import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export type StateTypePosts = {
    posts: {
        id: number;
        post: string;
        likeCount: number;
    }[];
    newPostText: string
}
export type DispatchTypePosts = {

    addpost: () => void
    updateNewPostText: (e: string) => void
}

type MyPostType = StateTypePosts & DispatchTypePosts


export const MyPosts = (props: MyPostType) => {

    let onClick_AddPost_Callback = () => {
        props.addpost();
    }
    let onChange_ChangeTextIntextForNewPostInState_CallBack = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    let postArrayDefoult = props.posts.map((element: any) =>
        <div key={element.id}><Post onePostElement={element.post} likeCount={element.likeCount}/>
        </div>
    )
    return (
        <div>
            <div className={s.post}>
                My post
                <div>
                    <div className={s.area}>
                        <textarea
                            placeholder="Enter sms"
                            value={props.newPostText}
                            onChange={onChange_ChangeTextIntextForNewPostInState_CallBack}
                        />
                    </div>
                    <div className={s.add}>
                        <button onClick={onClick_AddPost_Callback}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
            {postArrayDefoult}
        </div>
    )
}
