import React from "react";
import {Contact} from "./ProfileInfo";
import {createFormField, Input, Textarea} from "../../COMMON/FormsControl/FormsControl";
import {reduxForm} from "redux-form";

export const ProfileDataSetting=({handleSubmit, profile}: any)=>{
    return(
        <form onSubmit={handleSubmit}>
            <button>save</button>
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
        </form>
    )
}

export const ProfileRditeForm = reduxForm({ form: 'editProfile'})(ProfileDataSetting)


