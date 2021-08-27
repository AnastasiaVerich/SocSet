import s from "./contacts-edit-form.module.scss";
import {reduxForm} from "redux-form";
import React from "react";
import {createFormField, Input} from "../../Common/FormsControl/FormsControl";
import no_image from "../../assets/img/no_image.png";

 export const MainEdit=(props: any)=>{
     const updatePhoto = (e: any/*: ChangeEvent<HTMLInputElement>*/) => {
         if (e.target.files.length) {
             props.updatePhoto(e.target.files[0])
         }
     }
//отправка данных с формы на сервер через санку. когда данные отправились, то меняемм  режим редактирования
     const onSubmit = (formData: any) => {
         props.updateInfoProfile(formData)
             /*.then(() => {
                 setEditMode(false);
             })*/
     }
     return(
         <div className={s.mainInfo}>
             <div className={s.photoChangeBlock}>
                 {props.profile.photos.large === null
                     ? <img className={s.photo} src={no_image}/>
                     : <img className={s.photo} src={props.profile.photos.large}/>}
                 <label htmlFor="file-upload" className={s.customfileupload} onChange={updatePhoto}>
                     <input className={s.inputFile} id="file-upload" type="file"/>
                     Upgrade photo
                 </label>
             </div>
             <ContactsEditForm onSubmit={onSubmit} initialValues={props.profile}
                               profile={props.profile}/>
         </div>
     )

 }



const ContactsEdit = ({handleSubmit, profile, error}: any) => {
    return (
        <form onSubmit={handleSubmit} className={s.formContainer}>
            {error && <div className={s.formSunnierError}>
                {error}
            </div>}
            <div className={s.editName}>
                <div className={s.title}>FullName: </div>
                {createFormField("", "fullName", [], Input, {  className: s.input })}

            </div>
            <div className={s.editContacts}>
                <h4>Contacts</h4>
                <div className={s.contacts} >
                    {Object.keys(profile.contacts).map(key => {
                            return <div key={key} className={s.contact}>
                                <div className={s.title}>{key}:</div>
                                {createFormField("", "contacts." + key, [], Input, {  className: s.input })}
                            </div>
                        }
                    )}
                </div>
            </div>
            <button className={s.btn}>save</button>
        </form>
    )
}
 const ContactsEditForm: any = reduxForm({form: 'editProfileContacts'})(ContactsEdit)