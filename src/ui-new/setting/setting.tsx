import React, {useState} from 'react'
import s from "./setting.module.scss"
import {Preloader} from "../Common/pr/Preloader";
import style from "../../UI/component/Profile/ProfileInfo/ProfileInfo.module.css";
import no_image from "../../UI/assets/img/no_image.png";
import {NavLink} from "react-router-dom";
import c from "../../UI/component/Nav/Nav.module.css";
import {createFormField, Textarea} from "../../UI/component/Common/FormsControl/FormsControl";
import {Button, Input} from "@material-ui/core";
import {reduxForm} from "redux-form";
import {ContactsEditForm} from "./contacts-edit-form/contacts-edit-form";
import {AboutMeEditForm} from "./aboutMe-edit-form/aboutMe-edit-form";
import {MainEditForm} from "./main-edit-form/main-edit-form";

export const Setting = (props: any) => {
    let [x, setX] = useState(true)
    let [y, setY] = useState(false)
    let [z, setZ] = useState(false)
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

    return <div className={s.block}>
        <div className={s.container}>
            <div className={s.editContainer}>
                {x && <div className={s.mainInfo}>
                    <div className={s.photoChangeBlock}>
                        {props.profile.photos.large === null
                            ? <img className={s.photo} src={no_image}/>
                            : <img className={s.photo} src={props.profile.photos.large}/>}
                        <label htmlFor="file-upload" className={s.customfileupload} onChange={updatePhoto}>
                            <input className={s.inputFile} id="file-upload" type="file"/>
                            Upgrade photo
                        </label>
                    </div>
                    <MainEditForm nSubmit={onSubmit} initialValues={props.profile}
                                  profile={props.profile}/>
                </div>}
                {y &&<div className={s.aboutMeBlock}>

                    <AboutMeEditForm onSubmit={onSubmit} initialValues={props.profile}
                                     profile={props.profile}/>
                </div>}
                {z && <div className={s.contactBlock}>
                    <ContactsEditForm onSubmit={onSubmit} initialValues={props.profile}
                                      profile={props.profile}/>

                </div>}
            </div>
            <div className={s.nav}>
                <div className={s.item} onClick={() => {
                    setX(true);
                    setY(false);
                    setZ(false);
                }}>1</div>
                <div className={s.item} onClick={() => {
                    setX(false);
                    setY(true);
                    setZ(false);
                }}>2</div>
                <div className={s.item} onClick={() => {
                    setX(false);
                    setY( false);
                    setZ(true);
                }}>3</div>
            </div>


        </div>

    </div>

}

