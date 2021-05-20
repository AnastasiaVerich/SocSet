import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsConteiner} from "./MyPosts/MyPostsCONTEINER";
import {Redirect} from "react-router-dom";


export const Profile = (props: any) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsConteiner/>
        </div>

    )
}