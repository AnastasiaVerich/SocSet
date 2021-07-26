import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPost/MyPostsContainer";


type ProfileType = {
    profile: any
    status: any
    updateStatus: any
    ownerId: any
    updatePhoto: any
    updateInfoProfile: any
}

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         ownerId={props.ownerId}
                         updatePhoto={props.updatePhoto}
                         updateInfoProfile={props.updateInfoProfile}/>
            <MyPostsContainer/>
        </div>

    )
}