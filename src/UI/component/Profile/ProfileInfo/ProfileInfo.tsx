import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfileStatusHOC} from "./ProfileStatusHOC";
import no_image from "../../../assets/img/no_image.png"
import {ProfileDataSetting, ProfileRditeForm} from "./ProfileEdit";
import {Grid} from "@material-ui/core";

export const ProfileInfo = (props: any) => {

    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const mainPhotoChange = (e: any/*: ChangeEvent<HTMLInputElement>*/) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSumbit = (formData: any) => {
        props.saveProfile(formData)
            .then(() => {
                setEditMode(false);
            })
    }

    return (
        <Grid container spacing={0}>
            <Grid item xs={12} sm={5}>
                {props.profile.photos.large === null
                    ? <img height={150} width={150} src={no_image}/>
                    : <img src={props.profile.photos.large}/>}
                {props.isOwner && <input type={"file"} onChange={mainPhotoChange}/>}
                <Grid>
                    <ProfileStatusHOC status={props.status} updateStatus={props.updateStatus}/>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={7}>
                {editMode
                    ? <ProfileRditeForm onSubmit={onSumbit} initialValues={props.profile} profile={props.profile}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditeMode={() => {
                        setEditMode(true)
                    }}/>
                }
            </Grid>
        </Grid>)
}


export const Contact = (props: any) => {
    return (
        <div><b>{props.contactTitle}: </b>{props.contactValue}</div>
    )
}

const ProfileData = (props: any) => {
    return (
        <div>
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
                <b>Contacts: </b>{Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
            </div>
            {props.isOwner && <button onClick={props.goToEditeMode}>edit Data</button>}
        </div>
    )
}
