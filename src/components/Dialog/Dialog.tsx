import React, {ChangeEvent} from "react";
import S from './Dialog.module.css'
import {UsersDialogs} from "./UsersDialogs/UsersDialogs";
import {OneMessage} from "./OneMessage/OneMessage";


type DialogType = {
    state: any
    sendMessage: any
    NewMessageText: any
}


export const Dialogs = (props: DialogType) => {

    let onClick_SendMessage_Callback = () => {
        props.sendMessage()
    }

    let onChange_ChangeTextIntextForNewMessageInState_CallBack = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.NewMessageText(e.currentTarget.value)
    }

    let newDialogData = props.state.dialogUsersArray.map((element: any) =>
        <div key={element.idLink}>
            <UsersDialogs name={element.name} idLink={element.idLink}/>
        </div>)

    let newSmsData = props.state.smsData.map((element: any) =>
        <div key={element.id}>
            <OneMessage massageText={element.sms}/>
        </div>)

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
                <textarea placeholder="Enter sms"
                          value={props.state.textInTextArea}
                          onChange={onChange_ChangeTextIntextForNewMessageInState_CallBack}
                />
                <button onClick={onClick_SendMessage_Callback}>
                    send sms
                </button>
            </div>
        </div>
    )
}