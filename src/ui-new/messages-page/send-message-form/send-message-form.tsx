import
{maxLength, requiredField} from "../../utils/validators/validators";
import s from "./send-message-form.module.scss";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormsControl/FormsControl";
import {FiSend} from "react-icons/all";
import React from "react";

const maxLengthCreator = maxLength(10)
const SendMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.sendField}>
            <Field placeholder="Enter sms"
                   component={Textarea}
                   name={"massages"}
                   validate={[requiredField, maxLengthCreator]}
                   props={{className: s.printMess}}
            />
            <button type='submit' className={s.sendMess}><FiSend/></button>
        </form>
    )
}
export const SendMessageReduxForm = reduxForm({
    form: "dialog"
})(SendMessageForm)