import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC, setIsFetchingAC, setIsFollowingProgressAC,
    setTotalUsersCountAC,
    setUsersAC,
    UNfollowAC,
    UsersType
} from "../../redux/UsersReducer";
import {StoreStateType} from "../../redux/StoreRedux";
import {Users} from "./Users";
import {Preloader} from "../COMMON/Preloader/Preloader";
import { usersAPI} from "../DAL/api";


export type MapStateToPropsType = {
    users: UsersType[]
    pagesize: number
    totalUsersCount: number
    currentPages: number
    isFetching: boolean
    IsFollowingProgress:boolean
}
export type MapDispatchTopropsType = {
    follower: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (x: []) => void
    SetCurrentPage: (x: number) => void
    setTotalUsersCount: (x: number) => void
    toogleIsFetching: (x: boolean) => void
    setIsFollowingProgress: any
}
let mapStateToProps = (state: StoreStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.usersData,
        pagesize: state.usersPage.pagesize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPages: state.usersPage.currentPages,
        isFetching: state.usersPage.isFetching,
        IsFollowingProgress: state.usersPage.followingInProgress
    }
}

//
//
///////////////////////////////////////////////////
class UsersAPI extends React.Component<MapDispatchTopropsType & MapStateToPropsType, any> {
    componentDidMount() {
        this.props.toogleIsFetching(true)
        usersAPI.getUsers(this.props.currentPages, this.props.pagesize ).then(response => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(response.items)
                this.props.setTotalUsersCount(response.totalCount)
            })
    }

    onPageChanget = (pageNumber: number) => {
        this.props.toogleIsFetching(true)
        this.props.SetCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pagesize ).then(response => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(response.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPages={this.props.currentPages}
                   pagesize={this.props.pagesize}
                   follower={this.props.follower}
                   unfollow={this.props.unfollow}
                   onPageChanget={this.onPageChanget}
                   IsFollowingProgress={this.props.IsFollowingProgress}
                   setIsFollowingProgress={this.props.setIsFollowingProgress}/>
        </>
    }
}
//////////////////////////////////////////
//
//

export const UsersContainer = connect(mapStateToProps, {
    follower:followAC,
    unfollow: UNfollowAC,
    setUsers:setUsersAC,
    SetCurrentPage:setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setIsFollowingProgress: setIsFollowingProgressAC,
    toogleIsFetching:setIsFetchingAC
})(UsersAPI);


