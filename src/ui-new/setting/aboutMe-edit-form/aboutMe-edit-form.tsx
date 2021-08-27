import s from "./aboutMe-edit-form.module.scss"
import {reduxForm} from "redux-form";
import React from "react";
import {createFormField, Input, Textarea} from "../../Common/FormsControl/FormsControl";


const AboutMeEdit = ({handleSubmit, profile, error}: any) => {
    return (
        <form onSubmit={handleSubmit} className={s.formContainer}>
            {error && <div className={s.formSunnierError}>
                {error}
            </div>}

            <div className={s.editBlock}>
                <div className={s.item1}>
                    <h4>looking for a job: </h4>{createFormField("", "lookingForAJob", [], Input, {type: "checkbox",  className: s.input })}
                </div>

                <div className={s.item2}>
                    <h4>I can: </h4>
                    {createFormField("skils", "lookingForAJobDescription", [], Textarea, {  className: s.input })}
                </div>
                <div className={s.item2}>
                    <h4>About me: </h4>
                    {createFormField("About me", "aboutMe", [], Textarea, {  className: s.input })}

                </div>
            </div>
            <button className={s.btn}>save</button>
        </form>
    )
}
export const AboutMeEditForm: any = reduxForm({form: 'editProfileAbout'})(AboutMeEdit)