import {usersAPI} from "../../DAL/api";

const FOLLOW = "FOLLOW"
const UN_FOLLOW = "UN_FOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const SET_USERID_FOR_DISABLE = "SET_USERID_FOR_DISABLE"
const TOGGLE_IS_FOLLOW = "TOGGLE_IS_FOLLOW"


//type for Reduces
type FollowType = {
    type: "FOLLOW"
    userId: number
}
type UNfollowType = {
    type: "UN_FOLLOW"
    userId: number
}
type SetUsersType = {
    type: "SET_USERS"
    users: []
}
type SetCurrentPageType = {
    type: "SET_CURRENT_PAGE"
    currentPages: number
}
type SetTotalUsersCountACType = {
    type: "SET_TOTAL_USERS_COUNT"
    totalCounter: number
}
type ToggleIsFetchingType = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
}
type SetUserIdForDisableType = {
    type: "SET_USERID_FOR_DISABLE"
    IsFollowingProgress: boolean
    userId: any
}
type ToggleIsFollowType = {
    type: "TOGGLE_IS_FOLLOW"
    follow: boolean
}

//type for Action
type ActionType =
    FollowType
    | UNfollowType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCountACType
    | ToggleIsFetchingType
    | SetUserIdForDisableType
    | ToggleIsFollowType

//initial State type
export type OneUsersType = {
    id: number,
    followed: boolean,
    name: string,
    status: string,
    photos: any
    uniqueUrlName: any
}
type UsersType = {
    usersData: Array<OneUsersType>
    pageSize: number
    totalUsersCount: number
    currentPages: number
    isFetching: boolean
    userIdForDisabled: any
    isFollow: boolean
}
let initialState: UsersType = {
    usersData: [],
    pageSize: 30,
    totalUsersCount: 0,
    currentPages: 1,
    isFetching: true,
    userIdForDisabled: [],
    isFollow: false
}

export const UsersReducer = (state: UsersType = initialState, action: ActionType): UsersType => {
    if (state) {
        switch (action.type) {
            case TOGGLE_IS_FOLLOW:
                return {
                    ...state,
                    isFollow: action.follow
                }
            case FOLLOW:
                return {
                    ...state,
                    usersData: state.usersData.map((x) => {
                        if (x.id === action.userId) {
                            return {...x, followed: true}
                        } else return x
                    })
                }
            case UN_FOLLOW:
                return {
                    ...state,
                    usersData: state.usersData.map((x) => {
                        if (x.id === action.userId) {
                            return {...x, followed: false}
                        } else return x
                    })
                }
            case SET_USERS:
                return {...state, usersData: [...action.users]}
            case SET_CURRENT_PAGE:
                return {...state, currentPages: action.currentPages}
            case SET_TOTAL_USERS_COUNT:
                return {...state, totalUsersCount: action.totalCounter}
            case TOGGLE_IS_FETCHING:
                return {...state, isFetching: action.isFetching}
            case SET_USERID_FOR_DISABLE:
                return {
                    ...state,
                    userIdForDisabled: action.IsFollowingProgress
                        ? [action.userId]
                        : []
                }
            default:
                return state;
        }
    } else return state
}

//Thunk Creator
// делает запрос на сервер, возвращет всех пользователей
export const getUsersTC = (currentPages: number, pagesize: number, follow: boolean) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetchingAC(true))
        let response;
        // если ищем друзей, то выполняем один запрос на серве
        if (follow) {
            response = await usersAPI.getFriendsUsers(currentPages, pagesize)
        } else {
            response = await usersAPI.getUsers(currentPages, pagesize)
        }
        dispatch(toggleIsFetchingAC(false))
        dispatch(setUsersAC(response.items))
        dispatch(setTotalUsersCountAC(response.totalCount))
    }
}
// делает запрос на сервер, меняет на сервере свойство фоллоу на true
export const followTC = (id: any) => {
    return async (dispatch: any) => {
        dispatch(setUserIdForDisabledAC(true, id))
        let response = await usersAPI.follow(id)
        if (response.resultCode === 0) {
            dispatch(followAC(id))
        }
        dispatch(setUserIdForDisabledAC(false, id))
    }
}
// делает запрос на сервер, удаляет на сервере свойство фоллоу(ставит по умолчанию false)
export const unFollowTC = (id: any) => {
    return async (dispatch: any) => {
        dispatch(setUserIdForDisabledAC(true, id))
        let response = await usersAPI.unFollow(id)
        if (response.resultCode === 0) {
            dispatch(unFollowAC(id))
        }
        dispatch(setUserIdForDisabledAC(false, id))
    }
}

//ActionCreator
export const followAC = (userId: number): FollowType =>
    ({type: FOLLOW, userId})
export const unFollowAC = (userId: number): UNfollowType =>
    ({type: UN_FOLLOW, userId})


export const setUsersAC = (users: []): SetUsersType =>
    ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPages: number): SetCurrentPageType =>
    ({type: SET_CURRENT_PAGE, currentPages})
export const setTotalUsersCountAC = (total: number): SetTotalUsersCountACType =>
    ({
        type: SET_TOTAL_USERS_COUNT,
        totalCounter: total
    })
// isFoll.Pr true, то в IsFollowingProgress в стейте записываем айди выбранного пользователя, иначе пустой массив
export const setUserIdForDisabledAC = (IsFollowingProgress: boolean, userId: any): SetUserIdForDisableType =>
    ({
        type: SET_USERID_FOR_DISABLE,
        IsFollowingProgress: IsFollowingProgress,
        userId
    })


// меняем в стейте значение isFetching. тру, значит, еще в процессе загрузки.
export const toggleIsFetchingAC = (isFetching: boolean): ToggleIsFetchingType =>
    ({
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    })
export const toggleFollowAC = (follow: boolean): ToggleIsFollowType =>
    ({type: TOGGLE_IS_FOLLOW, follow})

