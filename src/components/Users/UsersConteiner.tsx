import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, UNfollowAC} from "../../redux/UsersReducer";

let mapStateToProps=(state:any)=>{
    return {
        users: state.usersPage.usersData
    }
}

let mapDispatchToprops=(dispatch: any)=> {
    return {
        follower: (userId: any) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: any) => {
            dispatch(UNfollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}





export const UsersContainer = connect(mapStateToProps, mapDispatchToprops)(Users);