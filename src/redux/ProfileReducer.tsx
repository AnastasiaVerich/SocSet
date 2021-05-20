import {getUsersThunkCreater} from "./UsersReducer";
import {profileAPI, usersAPI} from "../components/DAL/api";

const addPost = "Add-post"
const textInTextArea = "changeTextInTextArea"
const setUserProfile = "setOneProfile"
const setStatus = "setStatus"
const upateStatus = "upateStatus"


/// Type for Reduces
type TextInTextAreaType = {
    type: "changeTextInTextArea"
    text: string
}
type AddPostType = {
    type: "Add-post"
}
type OneProfileType = {
    type: "setOneProfile"
    profile:any
}
type SetStatusType = {
    type: "setStatus"
    status:any
}
type UpdateStatusType = {
    type: "upateStatus"
    status:any
}

//// type for Action
export type ActionType = TextInTextAreaType | AddPostType |OneProfileType| SetStatusType| UpdateStatusType

////   Initial State
export type StatePropfilaType = {
    profile:any
    textInTextArea: string,
    postsDataArray: {
        id: number;
        post: string;
        likeCount: number;
    }[];
    status:string
}
let initialState: StatePropfilaType = {
    profile:null,
    textInTextArea: "hh",
    postsDataArray: [
        {
            id: 1,
            post: "Приветики??",
            likeCount: 1
        },
        {
            id: 2,
            post: "Ребята аууу...",
            likeCount: 0
        },
        {
            id: 3,
            post: "Это мой первый пост!",
            likeCount: 1200
        }
    ],
    status:""
}


export const ProfileReducer = (state: StatePropfilaType = initialState, action: ActionType): StatePropfilaType => {


    switch (action.type) {
        case textInTextArea:
            return {
                ...state,
                textInTextArea: action.text
            }
        case addPost:
            let text = state.textInTextArea
            return {
                ...state,
                textInTextArea: "",
                postsDataArray: [{id: 4, post: text, likeCount: 10}, ...state.postsDataArray]
            }
        case setUserProfile:
            return {
                ...state,
               profile : action.profile
            }
            case setStatus:
            return {
                ...state,
               status : action.status
            }



        default:
            return state
    }
}

export const textInTextAreaAC = (text: string): TextInTextAreaType =>
    ({type: textInTextArea, text})
export const addPostAC = (): AddPostType => ({type: addPost})
export const setOneProfileAC = (profile:any): OneProfileType => ({type: setUserProfile, profile})
export const getOneProfileThunkCreater = (id:any) => {
    return(dispatch: any)=>{
        usersAPI.profileGet(id)
            .then(response => {
               dispatch( setOneProfileAC(response.data))
            })
    }
}

export const setStatusAC = (status: string): SetStatusType => ({type: setStatus, status})

export const getStatusThunkCreater=(id:any)=>{
    return(dispatch:any)=>{
        profileAPI.getStatus(id)

            .then (response=>{
                dispatch(setStatusAC(response.data))

            }
        )
    }
}
export const updateStatusThunkCreater=(status:string)=>{
    return(dispatch:any)=>{
        profileAPI.updateStatus(status)
            .then (response=>{
                if(response.data.resultCode===0){
                    dispatch(setStatusAC(status))
                }
            }
        )
    }
}
