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

//Action Creator
export const setOneProfileAC = (profile: any): SetProfileType => ({type: SET_USER_PROFILE, profile})
export const updateStatusAC = (status: string): UpdateStatusType => ({type: SET_STATUS, status})
export const updatePhotoAC = (photos: any): UpdatePhotoType => ({type: SAVE_PHOTO, photos})
export const addPostAC = (massages: string): AddPostType => ({type: ADD_POST, massages})
export const deletePostAC = (id: number): DeletePostType => ({type: DELETE_POST, id})


