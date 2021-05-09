const Follow = "Follow"
const UnFollow = "UnFollow"
const SetUsers = "SetUsers"
const SetCurrentPage = "SetCurrentPage"
const setTotalUsersCount = "setTotalUsersCount"

/////type for Reduces
type FollowType={
    type:"Follow"
    userId: number
}
type UNfollowType={
    type:"UnFollow"
    userId: number
}
type SetUsersType ={
    type:"SetUsers"
    users: []
}
type SetCurrentPageType={
    type:"SetCurrentPage"
    currentPages: number
}
type SetTotalUsersCountACType={
    type:"setTotalUsersCount"
    totalCounter: number
}

///////type for Action
type ActionType=FollowType| UNfollowType|SetUsersType|SetCurrentPageType| SetTotalUsersCountACType
/////initial State
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
}
let initionState: UsersTypeAll = {
    usersData: [],
    pagesize: 5,
    totalUsersCount: 0,
    currentPages: 4
}

export const UsersReducer = (state:UsersTypeAll = initionState, action: ActionType):UsersTypeAll => {
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
                return {...state, totalUsersCount: action.totalCounter}


            default:
                return state;
        }
    }else return state
}

export const followAC = (userId: number): FollowType => ({type: Follow, userId})
export const UNfollowAC = (userId: number):UNfollowType => ({type: UnFollow, userId})
export const setUsersAC = (users: []):SetUsersType => ({type: SetUsers, users})
export const setCurrentPageAC = (currentPages: number):SetCurrentPageType => ({type: SetCurrentPage, currentPages})
export const setTotalUsersCountAC = (total: number):SetTotalUsersCountACType => ({type: setTotalUsersCount, totalCounter:total})
