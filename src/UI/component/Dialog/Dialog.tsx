import React, {useEffect} from "react";
import style from './Dialog.module.css';
import {NavLink} from "react-router-dom";
import {Preloader} from "../../../ui-new/Common/pr/Preloader";
import {IconButton} from "@material-ui/core";
import RefreshIcon from '@material-ui/icons/Refresh';
import {Messages} from "./Messages";
import {UsersTalkedWith} from "./UsersTalkedWith";
import {AddMessagesReduxForm} from "./AddMessagesReduxForm";

export type StateTypeDialog = {
    messages: any
    authorizationUserId: any
    users: any
}
export type DispatchTypeDialog = {
    selectedDialogMessages: any
    sendMessage: (id: number, sms: string) => void
    usersTalkedWith: any
}
type MatchType = {
    match: any
}

type DialogType = StateTypeDialog & DispatchTypeDialog & MatchType


export const Dialogs = (props: DialogType) => {
    // от куда берется match???
    let recipientId = props.match.params.userID


    useEffect(() => {
        if (recipientId) {

            props.selectedDialogMessages(recipientId,1,20)
        }
    }, [recipientId])
    useEffect(() => {
        props.usersTalkedWith()
    }, [])


    let sendMessage = (values: any) => {
        //massages, потому что такое значение name у field, которое нам надо
        props.sendMessage(recipientId, values.massages)
    }


    let fieldMessages = () => {
        return recipientId !== undefined
            ? props.messages != null
                ? <Messages messages={props.messages} authorizationUserId={props.authorizationUserId}/>
                : <Preloader/>
            : <div>Выбери диалог</div>
    }
    let fieldUsers = () => {
        return props.users != null
            ? <UsersTalkedWith users={props.users}/>
            : <div>нет диалогов</div>
    }


    return (
        <div className={style.block}>
            <div className={style.container}>
            <div className={style.contact}>
                МОИ ДИАЛОГИ
                <NavLink to={'/dialogs/' + recipientId}>
                    <div>
                        <IconButton onClick={() => props.usersTalkedWith()}><RefreshIcon/></IconButton>
                    </div>
                </NavLink>
                {fieldUsers()}
            </div>
                <button onClick={()=>{ props.selectedDialogMessages(recipientId,2,20)}}>++</button>
            <div className={style.massages}>
                СООБЩЕНИЯ В ДИАЛОГЕ:
              <div className={style.fieldMessages}> {fieldMessages()}</div>
                <AddMessagesReduxForm onSubmit={sendMessage}/>
            </div>

            </div>
        </div>
    )
}