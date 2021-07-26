import {getUsersThunkCreater} from "./UsersReducer";
import {profileAPI, usersAPI} from "../components/DAL/api";

const addPost = "Add-post"
const deletePost = "deletePost"
const setUserProfile = "setOneProfile"
const setStatus = "setStatus"
const upateStatus = "upateStatus"


/// Type for Reduces

type AddPostType = {
    type: "Add-post"
    massages: string
}
type DeletePostType = {
    type: "deletePost"
    id: number
}
type OneProfileType = {
    type: "setOneProfile"
    profile: any
}
type SetStatusType = {
    type: "setStatus"
    status: any
}
type UpdateStatusType = {
    type: "upateStatus"
    status: any
}

//// type for Action
export type ActionType = AddPostType | OneProfileType | SetStatusType | UpdateStatusType | DeletePostType

////   Initial State
export type StatePropfilaType = {
    profile: any
    postsDataArray: {
        id: number;
        post: string;
        likeCount: number;
    }[];
    status: string
}
let initialState: StatePropfilaType = {
    profile: null,
    postsDataArray: [
        {id: 1, post: "Приветики??", likeCount: 1},
        {id: 2, post: "Ребята аууу...", likeCount: 0},
        {id: 3, post: "Это мой первый пост!", likeCount: 1200}
    ],
    status: ""
}


export const ProfileReducer = (state: StatePropfilaType = initialState, action: ActionType): StatePropfilaType => {
    switch (action.type) {
        case addPost:
            let text = action.massages
            return {
                ...state,
                postsDataArray: [{id: 4, post: text, likeCount: 10}, ...state.postsDataArray]
            }
        case deletePost:
            return {
                ...state,
                postsDataArray: state.postsDataArray.filter(x => x.id !== action.id)
            }
        case setUserProfile:
            return {
                ...state,
                profile: action.profile
            }
        case setStatus:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}


export const addPostAC = (massages: string): AddPostType => ({type: addPost, massages})
export const deletePostAC = (id: number): DeletePostType => ({type: deletePost, id})
export const setOneProfileAC = (profile: any): OneProfileType => ({type: setUserProfile, profile})
export const getOneProfileThunkCreater = (id: any) => {
    return async (dispatch: any) => {
        let response = await usersAPI.profileGet(id)
        dispatch(setOneProfileAC(response.data))
    }
}
export const setStatusAC = (status: string): SetStatusType => ({type: setStatus, status})
export const getStatusThunkCreater = (id: any) => {
    return async (dispatch: any) => {
        let response = await profileAPI.getStatus(id)
        dispatch(setStatusAC(response.data))
    }
}
export const updateStatusThunkCreater = (status: string) => {
    return async (dispatch: any) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatusAC(status))
        }
    }
}