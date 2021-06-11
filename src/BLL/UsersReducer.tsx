import {usersAPI} from "../DAL/api";

const Follow = "Follow"
const UnFollow = "UnFollow"
const SetUsers = "SetUsers"
const SetCurrentPage = "SetCurrentPage"
const setTotalUsersCount = "setTotalUsersCount"
const ToogleIsFatching = "IsFetching"
const ToogleIsFollowingProgress = "IsFollowingProgress"

//type for Reduces
type FollowType = {
    type: "Follow"
    userId: number
}
type UNfollowType = {
    type: "UnFollow"
    userId: number
}
type SetUsersType = {
    type: "SetUsers"
    users: []
}
type SetCurrentPageType = {
    type: "SetCurrentPage"
    currentPages: number
}
type SetTotalUsersCountACType = {
    type: "setTotalUsersCount"
    totalCounter: number
}
type SetIsFetchingType = {
    type: "IsFetching"
    isFetching: boolean
}
type SetFollowingProgressType = {
    type: "IsFollowingProgress"
    IsFollowingProgress: boolean
    userId: any
}

//type for Action
type ActionType =
    FollowType
    | UNfollowType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCountACType
    | SetIsFetchingType
    | SetFollowingProgressType
//initial State type
export type UsersType = {
    id: number,
    followed: boolean,
    name: string,
    status: string,
    photos: any
    uniqueUrlName: any
}
type UsersTypeAll = {
    usersData: Array<UsersType>
    pagesize: number
    totalUsersCount: number
    currentPages: number
    isFetching: boolean
    followingInProgress: any
}
let initionState: UsersTypeAll = {
    usersData: [],
    pagesize: 5,
    totalUsersCount: 0,
    currentPages: 4,
    isFetching: true,
    followingInProgress: []
}

export const UsersReducer = (state: UsersTypeAll = initionState, action: ActionType): UsersTypeAll => {
    if (state) {
        switch (action.type) {

            case Follow:
                return {
                    ...state,
                    usersData: state.usersData.map((x) => {
                        if (x.id === action.userId) {
                            return {...x, followed: true}
                        } else return x
                    })
                }
            case UnFollow:
                return {
                    ...state,
                    usersData: state.usersData.map((x) => {
                        if (x.id === action.userId) {
                            return {...x, followed: false}
                        } else return x
                    })
                }

            case SetUsers:
                return {...state, usersData: [...action.users]}
            case SetCurrentPage:
                return {...state, currentPages: action.currentPages}
            case setTotalUsersCount:
                return {...state, totalUsersCount: /*50*/ action.totalCounter}
            case ToogleIsFatching:
                return {...state, isFetching: action.isFetching}
            case ToogleIsFollowingProgress:
                return {
                    ...state,
                    followingInProgress: action.IsFollowingProgress
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter((id: any) => id != action.userId)
                }
            default:
                return state;
        }
    } else return state
}

export const followAC = (userId: number): FollowType => ({type: Follow, userId})
export const UNfollowAC = (userId: number): UNfollowType => ({type: UnFollow, userId})
export const setUsersAC = (users: []): SetUsersType => ({type: SetUsers, users})
export const setCurrentPageAC = (currentPages: number): SetCurrentPageType => ({type: SetCurrentPage, currentPages})
export const setTotalUsersCountAC = (total: number): SetTotalUsersCountACType => ({
    type: setTotalUsersCount,
    totalCounter: total
})
export const setIsFetchingAC = (isFetching: boolean): SetIsFetchingType => ({
    type: ToogleIsFatching,
    isFetching: isFetching
})
export const setIsFollowingProgressAC = (IsFollowingProgress: boolean, userId: any): SetFollowingProgressType => ({
    type: ToogleIsFollowingProgress,
    IsFollowingProgress: IsFollowingProgress,
    userId
})
export const getUsersThunkCreater = (currentPages: number, pagesize: number) => {
    return async (dispatch: any) => {
        dispatch(setIsFetchingAC(true))
        let response = await usersAPI.getUsers(currentPages, pagesize)
        dispatch(setIsFetchingAC(false))
        dispatch(setUsersAC(response.items))
        dispatch(setTotalUsersCountAC(/*50*/ response.totalCount))

    }
}

export const followThunkCreater = (id: any) => {
    return async (dispatch: any) => {
        dispatch(setIsFollowingProgressAC(true, id))
        let response = await usersAPI.follow(id)
        if (response.resultCode === 0) {
            dispatch(followAC(id))
        }
        dispatch(setIsFollowingProgressAC(false, id))

    }
}
export const UNfollowThunkCreater = (id: any) => {
    return async (dispatch: any) => {
        dispatch(setIsFollowingProgressAC(true, id))
        let response = await usersAPI.unFollow(id)
        if (response.resultCode === 0) {
            dispatch(UNfollowAC(id))
        }
        dispatch(setIsFollowingProgressAC(false, id))

    }
}