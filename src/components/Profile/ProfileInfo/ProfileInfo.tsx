import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../COMMON/Preloader/Preloader";
import {ProfileStatusHOC} from "./ProfileStatusHOC";
import no_image from "./../../../assets/img/no_image.png"
import {ProfileDataSetting, ProfileRditeForm} from "./ProfileEdit";

export const ProfileInfo = (props: any) => {

    let[editMode, setEditMode]=useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const mainPhotoChange = (e: any/*: ChangeEvent<HTMLInputElement>*/) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSumbit = (formData: any)=>{
       props.saveProfile(formData)
       setEditMode(false)
    }

    return (
        <div className={s.file}>
            <div className={s.img}>
                {props.profile.photos.large === null
                    ? <img height={150} width={150} src={no_image}/>
                    : <img src={props.profile.photos.large}/>}
                {props.isOwner && <input type={"file"} onChange={mainPhotoChange}/>}
                <div>
                    Статус:
                    <ProfileStatusHOC status={props.status} updateStatus={props.updateStatus}/>
                </div>
                {editMode
                    ? <ProfileRditeForm onSubmit={onSumbit} initialValues={props.profile} />
                    :<ProfileData profile={props.profile} isOwner={props.isOwner} goToEditeMode={()=>{setEditMode(true)}}/>
                }
            </div>
        </div>)
}


export const Contact=(props: any)=>{
    return(
        <div><b>{props.contactTitle}: </b>{props.contactValue}</div>
    )
}

const ProfileData=(props: any)=>{
    return(
        <div>
            {props.isOwner && <button onClick={props.goToEditeMode}>edit Data</button>}
            <div>
                <b>FullName: </b>{props.profile.fullName}
            </div>

            <div>
                <b>looking for a job: </b>{props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            {props.profile.lookingForAJobDescription &&
            <div>
                <b>I can: </b>{props.profile.lookingForAJobDescription}
            </div>}
            <div>
                <b>About me: </b>{props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts: </b>{Object.keys(props.profile.contacts).map(key=>{
                return<Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}
