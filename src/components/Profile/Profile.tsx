import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsConteiner} from "./MyPosts/MyPostsCONTEINER";





export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsConteiner    />
        </div>

    )
}