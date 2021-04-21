import React from "react";
import {Dialogs} from "./Dialog";


type DialogType = {
    store: any
}


export const DialogsConteiner = (props: DialogType) => {
let state= props.store.getState().dialog
    let sendMessage = () => {
        props.store.dispatch({type: "sendMessage"});
    }

    let NewMessageText = (text: string) => {
        props.store.dispatch({type: "changeTextInTextAreaMessage", sms:text})
    }

    return (
        <Dialogs state={state} sendMessage={sendMessage} NewMessageText={NewMessageText}/>
    )
}