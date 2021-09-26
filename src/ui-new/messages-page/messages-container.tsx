import {StoreStateType} from "../../BLL/store";
import {compose} from "redux";
import {connect} from "react-redux";
import {Messages} from "./messages";
import {WithAuthRedirect} from "../HOC/with-auth-redirect";
import {getIsFetching} from "../../BLL/users-selectors";
import {getSelectedDialog, getUsersTalkedWith, senMessage} from "../../BLL/Reducers/dialogs-saga";
import {getOneProfile} from "../../BLL/Reducers/profile-saga";

let mapStateToProps = (state: StoreStateType) => {
    return {
        messages: state.dialog.messages,
        authorizationUserId: state.auth.userId,
        users: state.dialog.users,
        profile: state.profile.profile,
        totalCount: state.dialog.totalCount,
        isFetching: getIsFetching(state)


    }
}
let mapDispatchToProps = (dispatch: any)  => {
    return {
        selectedDialogMessages: (id: number, currentPages: any, pagesize: any) => {
            dispatch(getSelectedDialog(id, currentPages,pagesize))
        },
        sendMessage: (id: number, text: string) => {
            dispatch(senMessage(id, text))
        },
        usersTalkedWith: () => {
            dispatch(getUsersTalkedWith())
        }, getOneProfile: (id: number) => {
            dispatch(getOneProfile(id))
        },
    }
}
const MessagesContainer: any = compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Messages)
export default MessagesContainer