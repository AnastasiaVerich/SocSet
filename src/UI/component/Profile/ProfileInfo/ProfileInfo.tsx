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
            <div  >
                {props.profile.photos.large === null
                    ? <img className={style.photo}  src={no_image}/>
                    : <img className={style.photo}  src={props.profile.photos.large}/>}
                <div>
                    {/*разные виды профайла*/}
                    <ProfileStatusHOC status={props.status} updateStatus={props.updateStatus}/>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
                {/*если мы на странице владельца то показываем изменение фото*/}
                <div>
                    {props.ownerId && <Input color="primary" type={"file"} onChange={updatePhoto}/>}
                </div>
                <div>
                    {/*если на странице НЕТ владельца, то показываем возможность начать диалог*/}
                    {!props.ownerId &&
                    <NavLink to={'/dialogs/' + props.profile.userId} activeClassName={c.act}>
                        <Button variant="contained" color="primary">Start dialog</Button>
                    </NavLink>}
                </div>
            </div>
            {/* Информация о пользователе */}
            <div >
                {editMode
                    ? <UserInfoEditForm onSubmit={onSubmit} initialValues={props.profile} profile={props.profile}/>
                    : <UserInfo profile={props.profile} ownerId={props.ownerId} goToEditeMode={() => {
                        setEditMode(true)
                    }}/>
                }
            </div>
        </div>)
}