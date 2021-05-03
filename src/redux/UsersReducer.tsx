const Follow = "Follow"
const UnFollow = "UnFollow"
const SetUsers = "SetUsers"

type UsersType={
    id: number,
    followed: boolean,
    name: string,
    status: string,
    photos: any
    uniqueUrlName: any
}


type UsersTypeAll={
    usersData: Array<UsersType>
}
let initionState: UsersTypeAll  = {
    usersData: [ ]
}

export const UsersReducer = (state = initionState, action: any) => {
    if(state)
    switch (action.type) {
        case Follow:
            return {
                ...state,
                usersData: state.usersData.map((x) =>{
                    if(x.id === action.userId){
                        return {...x, followed: true}
                    }
                    else return x})}



        case UnFollow:
            return {
                ...state,
                usersData: state.usersData.map((x) =>{
                    if(x.id === action.userId){
                        return {...x, followed: false}
                    }
                    else return x})}

        case SetUsers:
            return {...state,usersData: [...state.usersData, ...action.users]}


        default:
            return state;
    }
}

export const followAC = (userId: any) => ({type: Follow, userId})
export const UNfollowAC = (userId: any) => ({type: UnFollow, userId})
export const setUsersAC = (users: any) => ({type: SetUsers, users})
