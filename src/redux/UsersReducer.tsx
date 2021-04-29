const Follow = "Follow"
const UnFollow = "UnFollow"
const SetUsers = "SetUsers"

type UsersType={
    id: number,
    follow: boolean,
    fillName: string,
    status: string,
    location: any
}


type UsersTypeAll={
    usersData: Array<UsersType>
}
let initionState: UsersTypeAll  = {
    usersData: [
        {
            id: 1,
            follow: true,
            fillName: "Anastasia",
            status: "I am Bitch",
            location: {city: "Minsk", country: "Belarus"}
        }
    ]
}

export const UsersReducer = (state = initionState, action: any) => {
    switch (action.type) {
        case Follow:
            return {
                ...state,
                usersData: state.usersData.map((x) =>{
                    if(x.id === action.userId){
                        return {...x, follow: true}
                    }
                    else return x})}



        case UnFollow:
            return {
                ...state,
                usersData: state.usersData.map((x) =>{
                    if(x.id === action.userId){
                        return {...x, follow: false}
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
