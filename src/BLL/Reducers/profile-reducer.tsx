import {profileAPI, usersAPI} from "../../DAL/api";
import {stopSubmit} from "redux-form";
import {toggleIsFetchingAC} from "./users-reducer";

const ADD_POST = "ADD_POST"
const DELETE_POST = "DELETE_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const SAVE_PHOTO = "SAVE_PHOTO"

// Type for Reduces
type AddPostType = {
    type: "ADD_POST"
    massages: string
}
type DeletePostType = {
    type: "DELETE_POST"
    id: number
}
type SetProfileType = {
    type: "SET_USER_PROFILE"
    profile: any
}
type UpdateStatusType = {
    type: "SET_STATUS"
    status: any
}

type UpdatePhotoType = {
    type: "SAVE_PHOTO"
    photos: any
}

// type for Action
export type ActionType = AddPostType
    | SetProfileType
    | UpdateStatusType
    | DeletePostType
    | UpdatePhotoType

//   Initial State
export type StateType = {
    profile: any
    postsDataArray: {
        id: number;
        post: string;
        likeCount: number;
    }[];
    status: string
}
let initialState: StateType = {
    profile: null,
    postsDataArray: [
        {id: 1, post: "Приветики??", likeCount: 1},
        {id: 2, post: "Ребята аууу...", likeCount: 0},
        {id: 3, post: "Это мой первый пост!", likeCount: 1200}
    ],
    status: ""
}


export const ProfileReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case ADD_POST:
            let text = action.massages
            return {
                ...state,
                postsDataArray: [{id: 4, post: text, likeCount: 10}, ...state.postsDataArray]
            }
        case DELETE_POST:
            return {
                ...state,
                postsDataArray: state.postsDataArray.filter(x => x.id !== action.id)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state
    }
}
//Thunk Creator
// с сервера берет всю инфу о профайле выбранного пользователя
export const getOneProfileTC = (id: any) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetchingAC(true))

        let response = await usersAPI.getProfile(id)
        dispatch(setOneProfileAC(response.data))
        dispatch(toggleIsFetchingAC(false))

    }
}
// с сервера достает статус выбранного пользователя
export const getStatusTC = (id: any) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetchingAC(true))

        let response = await profileAPI.getStatus(id)
        dispatch(updateStatusAC(response.data))
        dispatch(toggleIsFetchingAC(false))

    }
}
// обновляет статус на сервере
export const updateStatusTC = (status: string) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetchingAC(true))

        try {
            let response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(updateStatusAC(status))
            }
        } catch (error: any) {
            console.log("я перехватил ошибку ")
            console.log(error)
        }
        dispatch(toggleIsFetchingAC(false))

    }
}
// обновляет фото на сервере
export const updatePhotoTC = (file: any) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetchingAC(true))

        let response = await profileAPI.updatePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(updatePhotoAC(response.data.data.photos))
        }
        dispatch(toggleIsFetchingAC(false))

    }
}
// обновляет информацию о профиле на сервере
export const updateInfoProfileTC = (profile: any) => async (dispatch: any, getState: any) => {
    dispatch(toggleIsFetchingAC(true))

    const userId = getState().auth.userId
    let response = await profileAPI.updateInfoProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getOneProfileTC(userId))
    } else {
        dispatch(stopSubmit("editProfile", {_error: response.data.messages[0]}))
        return Promise.reject()
    }
    dispatch(toggleIsFetchingAC(false))

}

//Action Creator
export const setOneProfileAC = (profile: any): SetProfileType => ({type: SET_USER_PROFILE, profile})
export const updateStatusAC = (status: string): UpdateStatusType => ({type: SET_STATUS, status})
export const updatePhotoAC = (photos: any): UpdatePhotoType => ({type: SAVE_PHOTO, photos})
export const addPostAC = (massages: string): AddPostType => ({type: ADD_POST, massages})
export const deletePostAC = (id: number): DeletePostType => ({type: DELETE_POST, id})


