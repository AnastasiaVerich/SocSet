import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPostAction, changeTextInTextAreaAction} from "../../../redux/state";


type MyPostType = {
    state: any
    dispatch: any
}



export const MyPosts = (props: MyPostType) => {

    let onClick_AddPost_Callback = () => {
        props.dispatch(addPostAction())
    }
    let onChange_ChangeTextIntextForNewPostInState_CallBack = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeTextInTextAreaAction(e.currentTarget.value))
    }
    debugger;
    let postArrayDefoult = props.state.profile.postsDataArray.map( (element: any) =>
        <div key={element.id}><Post onePostElement={element.post} likeCount={element.likeCount}/>
        </div>
    )

    return (
        <div>
            <div className={s.post}>
                My post
                <div>
                    <div className={s.area}>
                        <textarea value={props.state.profile.textInTextArea}
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
