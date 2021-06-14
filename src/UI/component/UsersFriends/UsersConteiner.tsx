import React from 'react';
import {connect} from "react-redux";
import {
    followThunkCreater, getFriendsThunkCreater, getUsersThunkCreater,
    setCurrentPageAC, setIsFetchingAC, setIsFollowingProgressAC,
    setTotalUsersCountAC,
    setUsersAC,
    UNfollowThunkCreater,
    UsersType
} from "../../../BLL/UsersReducer";
import {StoreStateType} from "../../../BLL/StoreRedux";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPages,
    getIsFetching,
    getIsFollowingProgress,
    getPageSize,
    getTotalUsersCount,
     getUsersCreateSelector
} from "../../../BLL/users-selectors";


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
        users: getUsersCreateSelector(state),
        pagesize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPages: getCurrentPages(state),
        isFetching: getIsFetching(state),
        IsFollowingProgress: getIsFollowingProgress(state)
    }
}

class UsersAPI extends React.Component<MapDispatchTopropsType & MapStateToPropsType, any> {
    componentDidMount() {

        this.props.getUsersThunk(this.props.currentPages, this.props.pagesize)

    }

    onPageChanget = (pageNumber: number) => {
        this.props.getUsersThunk(pageNumber, this.props.pagesize)

        this.props.SetCurrentPage(pageNumber);

    }

    render() {
        console.log("render")
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

export const FriendsConteiner:any = compose(/*WithAuthRedirect,*/connect(mapStateToProps, {
    follower:followThunkCreater,
    unfollow: UNfollowThunkCreater,
    setUsers:setUsersAC,
    SetCurrentPage:setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setIsFollowingProgress: setIsFollowingProgressAC,
    toogleIsFetching:setIsFetchingAC,
    getUsersThunk: getFriendsThunkCreater
}))(UsersAPI)


