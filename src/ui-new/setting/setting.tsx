import React, {useState} from 'react'
import s from "./setting.module.scss"
import {Preloader} from "../Common/pr/Preloader";
import no_image from "../assets/img/no_image.png";
import {AboutMeEditForm} from "./aboutMe-edit-form/aboutMe-edit-form";
import {MainEdit} from "./contacts-edit-form/contacts-edit-form";

export const Setting = (props: any) => {
    let [x, setX] = useState(true)
    let [y, setY] = useState(false)
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

                {x && <MainEdit profile={props.profile}
                                updateInfoProfile={props.updateInfoProfile}
                                updatePhoto={props.updatePhoto} />

                }
                {y &&<div className={s.aboutMeBlock}>

                    <AboutMeEditForm onSubmit={onSubmit} initialValues={props.profile}
                                     profile={props.profile}/>
                </div>}
            </div>
            <div className={s.nav}>
                <div className={s.item} onClick={() => {
                    setX(true);
                    setY(false);
                }}>1</div>
                <div className={s.item} onClick={() => {
                    setX(false);
                    setY(true);
                }}>2</div>
            </div>
        </div>
    </div>

}

