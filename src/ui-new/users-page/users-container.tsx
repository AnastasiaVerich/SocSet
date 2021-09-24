import React from 'react';
import {connect} from "react-redux";
import {
    followTC, getUsersTC, toggleFollowAC,
    setCurrentPageAC, toggleIsFetchingAC, setUserIdForDisabledAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowTC,
    OneUsersType, searchAC
} from "../../BLL/Reducers/users-reducer";
import {StoreStateType} from "../../BLL/store";
import {compose} from "redux";
import {
    getCurrentPages,
    getIsFetching,
    getIsFollowingProgress,
    getPageSize,
    getTotalUsersCount,
    getUsersCreateSelector
} from "../../BLL/users-selectors";
import {Users} from "./users";
import {Preloader} from "../Common/preloader/Preloader";


export type MapStateToPropsType = {
    users: OneUsersType[]
    pagesize: number
    totalUsersCount: number
    currentPages: number
    isFetching: boolean
    IsFollowingProgress:boolean
    isFollow: boolean
    search: string
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
    searchAC:any
}



class UsersAPI extends React.Component<MapDispatchTopropsType & MapStateToPropsType, any> {
    componentDidMount() {

        this.props.getUsersThunk(this.props.currentPages, this.props.pagesize, this.props.isFollow, this.props.search)

    }
    componentDidUpdate(prevProps: Readonly<MapDispatchTopropsType & MapStateToPropsType>, prevState: Readonly<any>, snapshot?: any) {
        if(this.props.search!==prevProps.search || this.props.isFollow!== prevProps.isFollow)
            this.props.getUsersThunk(this.props.currentPages, this.props.pagesize, this.props.isFollow,this.props.search)

    }

    onPageChanget = (pageNumber: number) => {
        this.props.getUsersThunk(pageNumber, this.props.pagesize,  this.props.isFollow,this.props.search)
        this.props.SetCurrentPage(pageNumber);
    }

    render() {
        /*if(this.props.isFetching){
          return  <Preloader/>
        }else */ return <>
            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPages={this.props.currentPages}
                   pagesize={this.props.pagesize}
                   follower={this.props.follower}
                   unfollow={this.props.unfollow}
                   onPageChanget={this.onPageChanget}
                   IsFollowingProgress={this.props.IsFollowingProgress}
                   setIsFollowingProgress={this.props.setIsFollowingProgress}
                   isFollow={this.props.isFollow}
                   FiendsAC={this.props.FiendsAC}
                   search={this.props.search}
                   searchAC={this.props.searchAC}
            />
        </>
    }
}

let mapStateToProps = (state: StoreStateType): MapStateToPropsType => {

    return {
        users: getUsersCreateSelector(state),
        pagesize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPages: getCurrentPages(state),
        isFetching: getIsFetching(state),
        IsFollowingProgress: getIsFollowingProgress(state),
        isFollow: state.usersPage.isFollow,
        search: state.usersPage.search
    }
}

export const UsersContainer:any = compose(/*WithAuthRedirect,*/connect(mapStateToProps, {

    follower:followTC,
    unfollow: unFollowTC,
    setUsers:setUsersAC,
    SetCurrentPage:setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setIsFollowingProgress: setUserIdForDisabledAC,
    toogleIsFetching:toggleIsFetchingAC,
    getUsersThunk: getUsersTC,
    FiendsAC: toggleFollowAC,
    searchAC: searchAC
    //getUsersThunk: getFriendsThunkCreater
}))(UsersAPI)


