import {toggleIsFetchingAC} from "./users-reducer";
import {messagesAPI} from "../../DAL/api";
import {Dispatch} from "redux";
import {getSelectedDialogAC, getSelectedDialogMoreAC, getUsersTalkedWithAC} from "./dialogs-reducer";
import {call, put, takeEvery} from "redux-saga/effects";
import {getAuthorizationDataWorkerSaga, getCaptchaWorkerSaga, loginWorkerSaga, logoutWorkerSaga} from "./auth-saga";

/*export const getSelectedDialogTC = (id: any, currentPages: any, pagesize: any) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingAC(true))

    let response = await messagesAPI.getSelectedDialog(id, currentPages, pagesize)
    if (currentPages === 1) {
        dispatch(getSelectedDialogAC(response));
    } else {
        dispatch(getSelectedDialogMoreAC(response));
    }
    dispatch(toggleIsFetchingAC(false))

}*/
export function* getSelectedDialogWorkerSaga (action: ReturnType<typeof getSelectedDialog>): any {
    yield put(toggleIsFetchingAC(true))

    let response = yield call (messagesAPI.getSelectedDialog, action.id, action.currentPages, action.pagesize)
    if (action.currentPages === 1) {
        yield put(getSelectedDialogAC(response));
    } else {
        yield put(getSelectedDialogMoreAC(response));
    }
    yield put(toggleIsFetchingAC(false))
}
// отправить сообщение на сервер
// export const senMessageTC = (userId: any, body: string) => async (dispatch: any) => {
//     dispatch(toggleIsFetchingAC(true))
//
//     let response = await messagesAPI.sendMessage(userId, body)
//     if (response.data.resultCode === 0) {
//         dispatch(getSelectedDialog(userId, 1, 20))
//     }
//     dispatch(toggleIsFetchingAC(false))
//
// }
export function* senMessageWorkerSaga (action: ReturnType<typeof senMessage> ): any {
    yield put(toggleIsFetchingAC(true))
    let response = yield call(messagesAPI.sendMessage,action.userId, action.body)
    if (response.data.resultCode === 0) {
        yield put(getSelectedDialog(action.userId, 1, 20))
    }
    yield put(toggleIsFetchingAC(false))
}

// получить список пользователей с кем общался
// export const getUsersTalkedWithTC = () => async (dispatch: Dispatch) => {
//     dispatch(toggleIsFetchingAC(true))
//
//     let response = await messagesAPI.getUsersTalkedWith()
//     dispatch(getUsersTalkedWithAC(response));
//     dispatch(toggleIsFetchingAC(false))
// }
export function* getUsersTalkedWorkerSaga (): any{
    yield put(toggleIsFetchingAC(true))
    let response = yield call(messagesAPI.getUsersTalkedWith)
    yield put(getUsersTalkedWithAC(response));
    yield put(toggleIsFetchingAC(false))
}




export const getSelectedDialog=(id: any, currentPages: any, pagesize: any)=>{
    return{type: "DIALOGS/getSelectedDialog", id, currentPages, pagesize}
}
export const senMessage=(userId: any, body: string)=>{
    return {type: "DIALOGS/SENT_MESSAGE", userId, body}
}
export const getUsersTalkedWith=()=>{
    return {type: "DIALOGS/GET_USER_TALKED"}
}

export function* dialogSaga() {
    yield takeEvery("DIALOGS/getSelectedDialog", getSelectedDialogWorkerSaga)
    yield takeEvery("DIALOGS/SENT_MESSAGE", senMessageWorkerSaga)
    yield takeEvery("DIALOGS/GET_USER_TALKED", getUsersTalkedWorkerSaga)
}