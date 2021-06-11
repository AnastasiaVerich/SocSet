import React from 'react';
import { createSelector } from 'reselect';

export const getUsers=(state: any)=>{
    return state.usersPage.usersData
}

export const getUsersCreateSelector=createSelector(getUsers,(users)=>{
    return users.filter((x:any)=>true)
})



export const getPageSize=(state: any)=>{
    return state.usersPage.pagesize
}
export const getTotalUsersCount=(state: any)=>{
    return state.usersPage.totalUsersCount
}
export const getCurrentPages=(state: any)=>{
    return state.usersPage.currentPages
}
export const getIsFetching=(state: any)=>{
    return state.usersPage.isFetching
}
export const getIsFollowingProgress=(state: any)=>{
    return state.usersPage.followingInProgress
}
