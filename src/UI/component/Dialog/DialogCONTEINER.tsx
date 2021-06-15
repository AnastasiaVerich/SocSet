import React from "react";
import {Dialogs } from "./Dialog";
import {connect} from "react-redux";
import {StoreStateType} from "../../../BLL/StoreRedux";
import {compose} from "redux";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {
    getLUsersWHaveChatThunkCreater,
    getMessagesWithOneUserThunkCreater,
    sendSmsThunkCreater
} from "../../../BLL/dialogs-reducer";


let mapSttateToprops=(state:StoreStateType): any=>{
    return{
        stateServe: state.dialog.messages,
        authorazedUserId: state.auth.userId,
        usersArray: state.dialog.users
    }
}

 const DialogsConteiner: any =compose(connect(mapSttateToprops, {
         itemsOneDialog: getMessagesWithOneUserThunkCreater,
         sendSms: sendSmsThunkCreater,
         getUsersArray: getLUsersWHaveChatThunkCreater,


     })
     , WithAuthRedirect)(Dialogs)
export default DialogsConteiner