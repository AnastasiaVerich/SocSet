import s from "./contacts-edit-form.module.scss";
import {createFormField, Textarea} from "../../../UI/component/Common/FormsControl/FormsControl";
import {reduxForm} from "redux-form";
import React from "react";
import {Input} from "../../Common/FormsControl/FormsControl";

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


            <div className={s.btn}>save</div>
        </form>
    )
}
export const ContactsEditForm: any = reduxForm({form: 'editProfile'})(ContactsEdit)