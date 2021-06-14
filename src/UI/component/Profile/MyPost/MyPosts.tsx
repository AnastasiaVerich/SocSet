import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLenght, requiredField} from '../../../utils/validators/validators';
import {Textarea} from "../../Common/FormsControl/FormsControl";
import {Button} from "@material-ui/core";

export type StateTypePosts = {
    posts: {
        id: number;
        post: string;
        likeCount: number;
    }[];
}
export type DispatchTypePosts = {
    addpost: (massages: string) => void
    deletePost: (id:number)=>void
}

type MyPostType = StateTypePosts & DispatchTypePosts


export const MyPosts=React.memo((props: MyPostType)=> {


    let postArrayDefoult = [...props.posts]

        .reverse()
        .map((element: any) =>
        <div key={element.id}><Post onePostElement={element.post} likeCount={element.likeCount} />
            <button onClick={()=>{props.deletePost(element.id)}}>x</button>
        </div>
    )

    let onSumbit = (value: any) => {
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
})

const maxLenghtCreater=maxLenght(10)
const postForm = (props: any) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"massages"}
                       component={Textarea}
                       name={"massages"}
                       validate={[requiredField, maxLenghtCreater]}
                />
            </div>
            <Button type="submit" variant="contained" color="primary">
                Add
            </Button>
        </form>
    )
}
const PostReduxForm = reduxForm({
    form: 'post'
})(postForm)
