import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../COMMON/Preloader/Preloader";
import {ProfileStatusHOC} from "./ProfileStatusHOC";


export const ProfileInfo = (props: any) => {
if(!props.profile){
    return <Preloader/>
}
    return (
        <div className={s.file}>
            <div className={s.img}>
                {props.profile.photos
                    ? <img src={props.profile.photos.large}/>
                    :<div>NO PHOTO</div>}
                Статус:
                <ProfileStatusHOC status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>)
}