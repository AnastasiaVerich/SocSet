import
{maxLength, requiredField} from "../../utils/validators/validators";
import s from "./send-message-form.module.scss";
import {Field, reduxForm} from "redux-form";
import {FiSend} from "react-icons/all";
import React from "react";
import {Textarea} from "../../Common/forms-control/FormsControl";

const maxLengthCreator = maxLength(1000)
const SendMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.sendField}>
            <div className={s.inputContainer}>
                <Field placeholder="Enter sms"
                       component={Textarea}
                       name={"massages"}
                       validate={[requiredField, maxLengthCreator]}
                       props={{className: s.printMess}}
                />
            </div>
            <button type='submit' className={s.sendMess}><FiSend/></button>
        </form>
    )
}
export const SendMessageReduxForm = reduxForm({
    form: "dialog"
})(SendMessageForm)