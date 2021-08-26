import style from "../../../UI/component/Profile/ProfileInfo/ProfileInfo.module.css";
import {createFormField, Textarea} from "../../../UI/component/Common/FormsControl/FormsControl";
import {Input} from "@material-ui/core";
import {reduxForm} from "redux-form";
import React from "react";


const AboutMeEdit = ({handleSubmit, profile, error}: any) => {
    return (
        <form onSubmit={handleSubmit} className={style.formContainer}>
            {error && <div className={style.formSunnierError}>
                {error}
            </div>}


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
            <button>save</button>
        </form>
    )
}
export const AboutMeEditForm: any = reduxForm({form: 'editProfile'})(AboutMeEdit)