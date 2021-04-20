import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


type ProfileType = {
   state: any
    dispatch: any
}


export const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state}
                     dispatch={props.dispatch}
            />
        </div>

    )
}