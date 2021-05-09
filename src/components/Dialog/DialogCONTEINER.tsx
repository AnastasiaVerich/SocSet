import React from "react";
import {Dialogs, DispatchTypeDialog, StateTypeDialog} from "./Dialog";
import {connect} from "react-redux";
import {StoreStateType} from "../../redux/StoreRedux";
import {Dispatch} from "redux";
import {sendMessageAC, textInTextAreaAC} from "../../redux/DialogsReducer";


let mapSttateToprops=(state:StoreStateType): StateTypeDialog=>{
    return{
        state: state.dialog

    }
}
let mapDispatchToToprops=(dispatch: Dispatch): DispatchTypeDialog=>{
    return{
        sendMessage: ()=>{dispatch(sendMessageAC())},
        NewMessageText: (text:any)=>{dispatch(textInTextAreaAC(text))}

    }
}
export const DialogsConteiner = connect(mapSttateToprops, mapDispatchToToprops)(Dialogs);