import React from "react";
import {maxLength, requiredField} from "../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControl/FormsControl";
import {IconButton} from "@material-ui/core";

const maxLengthCreator = maxLength(10)
const AddMessagesForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder="Enter sms"
                   component={Textarea}
                   name={"massages"}
                   validate={[requiredField, maxLengthCreator]}
            />
            <IconButton type='submit' color="primary">Send message</IconButton>
        </form>
    )
}

export const AddMessagesReduxForm = reduxForm({
    form: "dialog"
})(AddMessagesForm)