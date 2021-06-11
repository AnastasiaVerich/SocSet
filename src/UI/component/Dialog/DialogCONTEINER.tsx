import React from "react";
import {Dialogs, DispatchTypeDialog, StateTypeDialog} from "./Dialog";
import {connect} from "react-redux";
import {StoreStateType} from "../../../BLL/StoreRedux";
import {compose, Dispatch} from "redux";
import {sendMessageAC} from "../../../BLL/DialogsReducer";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";


let mapSttateToprops=(state:StoreStateType): StateTypeDialog=>{
    return{
        state: state.dialog
    }
}

let mapDispatchToToprops=(dispatch: Dispatch): DispatchTypeDialog=>{
    return{
        sendMessage: (massages: string)=>{dispatch(sendMessageAC(massages))}
    }
}

 const DialogsConteiner: any =compose(connect(mapSttateToprops, mapDispatchToToprops)
     , WithAuthRedirect)(Dialogs)
export default DialogsConteiner