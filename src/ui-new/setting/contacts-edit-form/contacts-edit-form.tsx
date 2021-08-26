import style from "../../../UI/component/Profile/ProfileInfo/ProfileInfo.module.css";
import {createFormField, Textarea} from "../../../UI/component/Common/FormsControl/FormsControl";
import {Input} from "@material-ui/core";
import {reduxForm} from "redux-form";
import React from "react";

const ContactsEdit = ({handleSubmit, profile, error}: any) => {
    return (
        <form onSubmit={handleSubmit} className={style.formContainer}>
            {error && <div className={style.formSunnierError}>
                {error}
            </div>}
            <div>
                <b>Contacts: {Object.keys(profile.contacts).map(key => {
                        return <div key={key}>
                            <b>{key}: {createFormField(key, "contacts." + key, [], Input)}</b>
                        </div>
                    }
                )}</b>
            </div>
            <button>save</button>
        </form>
    )
}
export const ContactsEditForm: any = reduxForm({form: 'editProfile'})(ContactsEdit)