import React, {ChangeEvent} from "react";
import S from './Dialog.module.css'
import {UsersDialogs} from "./UsersDialogs/UsersDialogs";
import {OneMessage} from "./OneMessage/OneMessage";
import {StateDialogReducesType} from "../../../BLL/DialogsReducer";
import {Field, reduxForm} from "redux-form";
import {maxLenght, requiredField} from "../../utils/validators/validators";
import {Textarea} from "../Common/FormsControl/FormsControl";

export type StateTypeDialog = {
    state: StateDialogReducesType
}
export type DispatchTypeDialog = {
    sendMessage: (massages: string) => void
}

type DialogType = StateTypeDialog & DispatchTypeDialog


export const Dialogs = (props: DialogType) => {
    let newDialogData = props.state.dialogUsersArray.map((element: any) =>
        <div key={element.idLink}>
            <UsersDialogs name={element.name} idLink={element.idLink}/>
        </div>)

    let newSmsData = props.state.smsData.map((element: any) =>
        <div key={element.id}>
            <OneMessage massageText={element.sms}/>
        </div>)
    let addNewMessages = (values: any)=>{
        //massages, потому что такое значение name у field, которое нам надо
        props.sendMessage(values.massages)
    }
    return (

        <div className={S.dialogs}>
            <div className={S.dialogsItems}>
                МОИ ДИАЛОГИ
                {newDialogData}
            </div>
            <div className={S.massages}>
                СООБЩЕНИЯ В ДИАЛОГЕ:
                {newSmsData}
            </div>
            <div>
                <AddMessagesReduxForm onSubmit={addNewMessages}/>
            </div>

        </div>
    )
}
const maxLenghtCreater=maxLenght(10)
const AddMessagesForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder="Enter sms"
                   component={Textarea}
                   name={"massages"}
                   validate={[requiredField, maxLenghtCreater]}
            />
            <button >send sms</button>
        </form>
    )
}

const AddMessagesReduxForm = reduxForm({
    form: "dialog"
})(AddMessagesForm)