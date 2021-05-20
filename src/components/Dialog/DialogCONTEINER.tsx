import React from "react";
import {Dialogs, DispatchTypeDialog, StateTypeDialog} from "./Dialog";
import {connect} from "react-redux";
import {StoreStateType} from "../../redux/StoreRedux";
import {compose, Dispatch} from "redux";
import {sendMessageAC, textInTextAreaAC} from "../../redux/DialogsReducer";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";


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

 const DialogsConteiner: any =compose(connect(mapSttateToprops, mapDispatchToToprops)
     , WithAuthRedirect)(Dialogs)
export default DialogsConteiner