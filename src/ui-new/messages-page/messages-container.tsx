
import React from "react";
import {StoreStateType} from "../../BLL/store";
import {DispatchTypeDialog, StateTypeDialog} from "../../UI/component/Dialog/Dialog";
import {getSelectedDialogTC, getUsersTalkedWithTC, senMessageTC} from "../../BLL/Reducers/dialogs-reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../UI/HOC/WithAuthRedirect";
import {Messages} from "./messages";

let mapStateToProps = (state: StoreStateType): StateTypeDialog => {
    return {
        messages: state.dialog.messages,
        authorizationUserId: state.auth.userId,
        users: state.dialog.users
    }
}
let mapDispatchToProps = (dispatch: any):DispatchTypeDialog  => {
    return {
        selectedDialogMessages: (id: number, currentPages: any, pagesize: any) => {
            dispatch(getSelectedDialogTC(id, currentPages,pagesize))
        },
        sendMessage: (id: number, text: string) => {
            dispatch(senMessageTC(id, text))
        },
        usersTalkedWith: () => {
            dispatch(getUsersTalkedWithTC())
        }
    }
}
const MessagesContainer: any = compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Messages)
export default MessagesContainer