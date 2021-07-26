import React from "react";
import {Dialogs, DispatchTypeDialog, StateTypeDialog} from "./Dialog";
import {connect} from "react-redux";
import {StoreStateType} from "../../../BLL/store";
import {compose} from "redux";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {
    getUsersTalkedWithTC,
    getSelectedDialogTC,
    senMessageTC
} from "../../../BLL/Reducers/dialogs-reducer"


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

const DialogsContainer: any = compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs)
export default DialogsContainer