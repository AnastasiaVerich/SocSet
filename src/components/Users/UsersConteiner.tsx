import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    UNfollowAC,
    UsersType
} from "../../redux/UsersReducer";
import {Users} from "./Users";
import {StoreStateType} from "../../redux/StoreRedux";
type MapStateToPropsType={
    users: UsersType[]
    pagesize: number
    totalUsersCount: number
    currentPages: number
}

type MapDispatchTopropsType={
    follower:(id:number)=>void
    unfollow:(id:number)=>void
    setUsers:(x:[])=>void
    SetCurrentPage:(x:number)=>void
    setTotalUsersCount:(x:number)=>void

}
let mapStateToProps=(state:StoreStateType):MapStateToPropsType =>{
    return {
        users: state.usersPage.usersData,
        pagesize: state.usersPage.pagesize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPages: state.usersPage.currentPages
    }
}

let mapDispatchToprops=(dispatch: any): MapDispatchTopropsType=> {
    return {
        follower: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(UNfollowAC(userId))
        },
        setUsers: (users: []) => {
            dispatch(setUsersAC(users))
        },
        SetCurrentPage: (pageNumber: number)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}





export const UsersContainer = connect(mapStateToProps, mapDispatchToprops)(Users);