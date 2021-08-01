import React, {useState} from 'react';
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfileStatusHOC} from "./any/Status/ProfileStatusHOC";
import no_image from "../../../assets/img/no_image.png"
import {UserInfoEditForm} from "./any/UserInfoEdit";
import {Button, Grid, Input} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import c from "../../Nav/Nav.module.css";
import {UserInfo} from "./any/UserInfo";
import {ProfileStatus} from "./any/Status/ProfileStatus";
import style from "./ProfileInfo.module.css"
import {Contact} from "./any/Contact";
import {createFormField, Textarea} from "../../Common/FormsControl/FormsControl";
import {reduxForm} from "redux-form";

type ProfileInfoType = {
    profile: any
    status: any
    updateStatus: any
    ownerId: any
    updatePhoto: any
    updateInfoProfile: any
}

export const ProfileInfo = (props: ProfileInfoType) => {

    let [editMode, setEditMode] = useState(false)
// пока профайл не пришел с сервера, показываем загрузку страницы
    if (!props.profile) {
        return <Preloader/>
    }

    const updatePhoto = (e: any/*: ChangeEvent<HTMLInputElement>*/) => {
        if (e.target.files.length) {
            props.updatePhoto(e.target.files[0])
        }
    }
//отправка данных с формы на сервер через санку. когда данные отправились, то меняемм  режим редактирования
    const onSubmit = (formData: any) => {
        props.updateInfoProfile(formData)
            .then(() => {
                setEditMode(false);
            })
    }

    return (
        <div className={style.container}>
            <div className={style.firstBlock}>
                <div className={style.width100}>
                    <div className={style.divPhoto}/>
                    {props.profile.photos.large === null
                        ? <img className={style.photo} src={no_image}/>
                        : <img className={style.photo} src={props.profile.photos.large}/>}
                </div>
                <div>
                    {/*если мы на странице владельца то показываем изменение фото*/}
                    {props.ownerId && <div>
                        <label htmlFor="file-upload" className={style.customfileupload} onChange={updatePhoto}>
                            <input className={style.inputFile} id="file-upload" type="file"/>
                            Custom Upload
                        </label>
                    </div>}
                    {/*если на странице НЕ владельца, то показываем возможность начать диалог*/}
                    {!props.ownerId &&
                    <NavLink to={'/dialogs/' + props.profile.userId} activeClassName={c.act}>
                        <div className={style.customfileupload}>Start dialog</div>
                    </NavLink>}
                </div>
                <div className={style.info}>
                    <div className={style.infoItem}>
                        <b>looking for a job: </b>{props.profile.lookingForAJob ? "yes" : "no"}
                    </div>
                    <div className={style.infoItem}>
                        <b>I can: </b>{props.profile.lookingForAJobDescription}
                    </div>
                    <div className={style.infoItem}>
                        <ProfileStatusHOC status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                </div>
            </div>
            <div className={style.secondBlock}>
                <div className={style.fullName}>
                    <h2><b>{props.profile.fullName}</b></h2>
                </div>
                <div className={style.links}>
                    <div className={style.title}> Contacts( через пропсы в отд комп) или один ситиль</div>
                    <div className={style.contacts}>
                        {editMode
                            ? <UserInfoEditForm2 onSubmit={onSubmit} initialValues={props.profile}
                                                profile={props.profile}/>
                            : <UserInfo2 profile={props.profile} ownerId={props.ownerId} goToEditeMode={() => {
                                setEditMode(true)
                            }}/>
                        }
                    </div>
                </div>
            </div>
            <div className={style.endBlock}>
                <div className={style.title}> About me( как контакты)</div>
                <div className={style.aboutMe}>
                    <b>About me: </b>{props.profile.aboutMe}
                </div>
            </div>
        </div>
        // <div className={style.container}>
        //     <div className={style.photoBlock}>
        //         {props.profile.photos.large === null
        //             ? <img className={style.photo} src={no_image}/>
        //             : <img className={style.photo} src={props.profile.photos.large}/>}
        //
        //         {/*если мы на странице владельца то показываем изменение фото*/}
        //         <div>
        //             {props.ownerId && <div>
        //                 <label htmlFor="file-upload" className={style.customfileupload} onChange={updatePhoto}>
        //                     <input className={style.inputFile} id="file-upload" type="file"/>
        //                     Custom Upload
        //                 </label>
        //
        //             </div>}
        //         </div>
        //         <div>
        //             {/*если на странице НЕТ владельца, то показываем возможность начать диалог*/}
        //             {!props.ownerId &&
        //             <NavLink to={'/dialogs/' + props.profile.userId} activeClassName={c.act}>
        //                 <Button variant="contained" color="primary">Start dialog</Button>
        //             </NavLink>}
        //         </div>
        //     </div>
        //     <div className={style.mainInfoBlock}>
        //         <div>
        //             <h2><b>{props.profile.fullName}</b></h2>
        //         </div>
        //         <div>
        //             <b>looking for a job: </b>{props.profile.lookingForAJob ? "yes" : "no"}
        //         </div>
        //         {props.profile.lookingForAJobDescription &&
        //         <div>
        //             <b>I can: </b>{props.profile.lookingForAJobDescription}
        //         </div>}
        //         <div>
        //             <b>About me: </b>{props.profile.aboutMe}
        //         </div>
        //         {/*разные виды профайла*/}
        //         <ProfileStatusHOC status={props.status} updateStatus={props.updateStatus}/>
        //         {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
        //     </div>
        //     {/* Информация о пользователе */}
        //     <div className={style.contactsBlock}>
        //         {editMode
        //             ? <UserInfoEditForm onSubmit={onSubmit} initialValues={props.profile} profile={props.profile}/>
        //             : <UserInfo2 profile={props.profile} ownerId={props.ownerId} goToEditeMode={() => {
        //                 setEditMode(true)
        //             }}/>
        //         }
        //     </div>
        // </div>
    )
}
const UserInfo2 = (props: any) => {
    return (
        <>
            <b className={style.titleContact}>Contacts: </b>
            <div className={style.userInfoBlock}>

                {Object.keys(props.profile.contacts).map(key => {
                    return <Contact2 key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })}
            </div>
            {props.ownerId &&
            <Button variant="contained" color="primary" onClick={props.goToEditeMode}>edit Data</Button>}
        </>
    )
}

const Contact2 = (props: any) => {
    return (
        <div className={style.oneInfoContainer}><b>{props.contactTitle}: </b>{props.contactValue}</div>
    )
}
const UserInfoEdit=({handleSubmit, profile, error}: any)=>{
    return(
        <form onSubmit={handleSubmit} className={style.formContainer}>
            {error && <div className={style.formSunnierError}>
                {error}
            </div>}
            <div>
                <b>FullName: </b> {createFormField("Full name", "fullName", [], Input)}
            </div>

            <div>
                <b>looking for a job: </b>{createFormField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>

            <div>
                <b>I can: </b>
                {createFormField("skils", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div>
                <b>About me: </b>
                {createFormField("About me", "aboutMe", [], Textarea)}

            </div>
            <div>
                <b>Contacts: {Object.keys(profile.contacts).map(key=>{
                        return <div key={key}>
                            <b>{key}: {createFormField(key, "contacts."+key, [], Input)}</b>
                        </div>
                    }
                )}</b>
            </div>
            <button>save</button>
        </form>
    )
}

export const UserInfoEditForm2: any = reduxForm({ form: 'editProfile'})(UserInfoEdit)

