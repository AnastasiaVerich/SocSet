import React from "react";
import {Dialogs} from "./Dialog";
import {connect} from "react-redux";


let mapSttateToprops=(state:any)=>{
    return{
        state: state.dialog

    }
}
let mapDispatchToToprops=(dispatch: any)=>{
    return{
        sendMessage: ()=>{dispatch({type: "sendMessage"});},
        NewMessageText: (text:any)=>{dispatch({type: "changeTextInTextAreaMessage", sms:text})}

    }
}

export const DialogsConteiner = connect(mapSttateToprops, mapDispatchToToprops)(Dialogs);