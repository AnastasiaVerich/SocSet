import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsConteiner} from "./MyPosts/MyPostsCONTEINER";
import {Redirect} from "react-router-dom";





export const Profile = (props:any) => {
    if(props.isAuth===false) return <Redirect to={"/login"}/>
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsConteiner  />
        </div>

    )
}