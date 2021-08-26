import s from "./contacts-edit-form.module.scss";
import {createFormField, Textarea} from "../../../UI/component/Common/FormsControl/FormsControl";
import {Input} from "@material-ui/core";
import {reduxForm} from "redux-form";
import React from "react";

const ContactsEdit = ({handleSubmit, profile, error}: any) => {
    return (
        <form onSubmit={handleSubmit} className={s.formContainer}>
            {error && <div className={s.formSunnierError}>
                {error}
            </div>}
            <h4>Contacts:</h4>
            <div className={s.contacts} >
                {Object.keys(profile.contacts).map(key => {
                        return <div key={key} className={s.contact}>
                            <h4>{key}:</h4> {createFormField(key, "contacts." + key, [], Input, {  className: s.input })}
                        </div>
                    }
                )}
            </div>
            <button className={s.btn}>save</button>
        </form>
    )
}
export const ContactsEditForm: any = reduxForm({form: 'editProfile'})(ContactsEdit)