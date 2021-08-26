import style from "../../../UI/component/Profile/ProfileInfo/ProfileInfo.module.css";
import {createFormField, Textarea} from "../../../UI/component/Common/FormsControl/FormsControl";
import {Input} from "@material-ui/core";
import {reduxForm} from "redux-form";
import React from "react";


const MainEdit = ({handleSubmit, profile, error}: any) => {
    return (
        <form onSubmit={handleSubmit} className={style.formContainer}>
            {error && <div className={style.formSunnierError}>
                {error}
            </div>}
            <div>
                <b>FullName: </b> {createFormField("Full name", "fullName", [], Input)}
            </div>
            <button>save</button>
        </form>
    )
}
export const MainEditForm: any = reduxForm({form: 'editProfile'})(MainEdit)