import {StoreStateType} from "../../BLL/store";
import {getSelectedDialogTC, getUsersTalkedWithTC, senMessageTC} from "../../BLL/Reducers/dialogs-reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {Messages} from "./messages";
import {getOneProfileTC} from "../../BLL/Reducers/profile-reducer";
import {WithAuthRedirect} from "../HOC/with-auth-redirect";
import {getIsFetching} from "../../BLL/users-selectors";

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
            dispatch(getSelectedDialogTC(id, currentPages,pagesize))
        },
        sendMessage: (id: number, text: string) => {
            dispatch(senMessageTC(id, text))
        },
        usersTalkedWith: () => {
            dispatch(getUsersTalkedWithTC())
        }, getOneProfile: (id: number) => {
            dispatch(getOneProfileTC(id))
        },
    }
}
const MessagesContainer: any = compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Messages)
export default MessagesContainer