import React from "react";
import {Contact} from "./ProfileInfo";
import {createFormField, Input, Textarea} from "../../Common/FormsControl/FormsControl";
import {reduxForm} from "redux-form";
import style from "../../Common/FormsControl/forms.module.css";

export const ProfileDataSetting=({handleSubmit, profile, error}: any)=>{
    console.log(profile)
    return(
        <form onSubmit={handleSubmit}>
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

export const ProfileRditeForm: any = reduxForm({ form: 'editProfile'})(ProfileDataSetting)


