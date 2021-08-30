import {
    followTC, getUsersTC,
    OneUsersType,
    setCurrentPageAC,
    setTotalUsersCountAC, setUserIdForDisabledAC,
    setUsersAC, toggleFollowAC, toggleIsFetchingAC,
    unFollowTC
} from "../../../../BLL/Reducers/users-reducer";
import {StoreStateType} from "../../../../BLL/store";
import {
    getCurrentPages, getIsFetching, getIsFollowingProgress,
    getPageSize,
    getTotalUsersCount,
    getUsersCreateSelector
} from "../../../../BLL/users-selectors";
import React from "react";
import {compose} from "redux";

 import {connect} from "react-redux";

import {ViewFrinds} from "./view-friends";
import {Preloader} from "../../../Common/preloader/Preloader";

export type MapStateToPropsType = {
    users: OneUsersType[]
    pagesize: number
    totalUsersCount: number
    currentPages: number
    isFetching: boolean
    IsFollowingProgress:boolean
    isFollow: boolean
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
    FiendsAC:any
}

let mapStateToProps = (state: StoreStateType): MapStateToPropsType => {

    return {
        users: getUsersCreateSelector(state),
        pagesize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPages: getCurrentPages(state),
        isFetching: getIsFetching(state),
        IsFollowingProgress: getIsFollowingProgress(state),
        isFollow: state.usersPage.isFollow
    }
}

class UsersAPI extends React.Component<MapDispatchTopropsType & MapStateToPropsType, any> {
    componentDidMount() {

        this.props.getUsersThunk(this.props.currentPages, this.props.pagesize, true)

    }
    componentDidUpdate(prevProps: Readonly<MapDispatchTopropsType & MapStateToPropsType>, prevState: Readonly<any>, snapshot?: any) {
        if(this.props.isFollow!==prevProps.isFollow)
            this.props.getUsersThunk(this.props.currentPages, this.props.pagesize, this.props.isFollow)
    }


    onPageChanget = (pageNumber: number) => {
        this.props.getUsersThunk(pageNumber, this.props.pagesize,  this.props.isFollow)

        this.props.SetCurrentPage(pageNumber);

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <ViewFrinds users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPages={this.props.currentPages}
                   pagesize={this.props.pagesize}
                   follower={this.props.follower}
                   unfollow={this.props.unfollow}
                   onPageChanget={this.onPageChanget}
                   IsFollowingProgress={this.props.IsFollowingProgress}
                   setIsFollowingProgress={this.props.setIsFollowingProgress}
                   isFollow={this.props.isFollow}
                   />
        </>
    }
}

export const ViewFriendsContainer:any = compose(/*WithAuthRedirect,*/connect(mapStateToProps, {

    follower:followTC,
    unfollow: unFollowTC,
    setUsers:setUsersAC,
    SetCurrentPage:setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setIsFollowingProgress: setUserIdForDisabledAC,
    toogleIsFetching:toggleIsFetchingAC,
    getUsersThunk: getUsersTC,
    FiendsAC: toggleFollowAC
    //getUsersThunk: getFriendsThunkCreater
}))(UsersAPI)