import React from 'react';
import style from './Post.module.css'


type MyProps = {
    onePostElement: string;
    likeCount: number;
}


export const Post = (props: MyProps) => {

    return (
        <div>
            <div className='posts'>
                <div className={style.item}>
                    <img src='https://klike.net/uploads/posts/2019-06/1560329641_2.jpg'/>
                    {props.onePostElement}
                    <div>
                        <span>"Like {props.likeCount}"</span>
                    </div>
                </div>
            </div>
        </div>
    )
}