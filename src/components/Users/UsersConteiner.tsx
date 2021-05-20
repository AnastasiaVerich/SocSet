import React from 'react';
import {connect} from "react-redux";
import {
    followAC, followThunkCreater, getUsersThunkCreater,
    setCurrentPageAC, setIsFetchingAC, setIsFollowingProgressAC,
    setTotalUsersCountAC,
    setUsersAC,
    UNfollowAC, UNfollowThunkCreater,
    UsersType
} from "../../redux/UsersReducer";
import {StoreStateType} from "../../redux/StoreRedux";
import {Users} from "./Users";
import {Preloader} from "../COMMON/Preloader/Preloader";
import {compose} from "redux";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";


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
    getUsersThunk: any
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

        this.props.getUsersThunk(this.props.currentPages, this.props.pagesize)

    }

    onPageChanget = (pageNumber: number) => {
        this.props.getUsersThunk(pageNumber, this.props.pagesize)

        this.props.SetCurrentPage(pageNumber);

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

export const UsersContainer:any = compose(WithAuthRedirect,connect(mapStateToProps, {
    follower:followThunkCreater,
    unfollow: UNfollowThunkCreater,
    setUsers:setUsersAC,
    SetCurrentPage:setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setIsFollowingProgress: setIsFollowingProgressAC,
    toogleIsFetching:setIsFetchingAC,
    getUsersThunk: getUsersThunkCreater
}))(UsersAPI)


