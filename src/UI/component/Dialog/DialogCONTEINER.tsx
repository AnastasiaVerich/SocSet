import React from "react";
import {Dialogs, DispatchTypeDialog, StateTypeDialog} from "./Dialog";
import {connect} from "react-redux";
import {StoreStateType} from "../../../BLL/StoreRedux";
import {compose, Dispatch} from "redux";
import {sendMessageAC} from "../../../BLL/DialogsReducer";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {getMessagesWithOneUserThunkCreater} from "../../../BLL/dialogs-reducer";


let mapSttateToprops=(state:StoreStateType): any=>{
    return{
        state: state.dialog,
        stateServe: state.dialog2.messages
    }
}

/*let mapDispatchToToprops=(dispatch: Dispatch): DispatchTypeDialog=>{
    return{
        sendMessage: (massages: string)=>{dispatch(sendMessageAC(massages))},
        itemsOneDialog: (id:any)=>{dispatch(getMessagesWithOneUserThunkCreater(id))}
    }
}*/

 const DialogsConteiner: any =compose(connect(mapSttateToprops, {
         sendMessage: sendMessageAC,
         itemsOneDialog: getMessagesWithOneUserThunkCreater

     })
     , WithAuthRedirect)(Dialogs)
export default DialogsConteiner