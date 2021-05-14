import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC, setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    UNfollowAC,
    UsersType
} from "../../redux/UsersReducer";
import {StoreStateType} from "../../redux/StoreRedux";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../COMMON/Preloader/Preloader";


export type MapStateToPropsType = {
    users: UsersType[]
    pagesize: number
    totalUsersCount: number
    currentPages: number
    isFetching: boolean
}
export type MapDispatchTopropsType = {
    follower: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (x: []) => void
    SetCurrentPage: (x: number) => void
    setTotalUsersCount: (x: number) => void
    toogleIsFetching: (x: boolean) => void

}
let mapStateToProps = (state: StoreStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.usersData,
        pagesize: state.usersPage.pagesize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPages: state.usersPage.currentPages,
        isFetching: state.usersPage.isFetching
    }
}
/*
let mapDispatchToprops = (dispatch: Dispatch): MapDispatchTopropsType => {
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
        SetCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toogleIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}
*/


//
//
///////////////////////////////////////////////////
class UsersAPI extends React.Component<MapDispatchTopropsType & MapStateToPropsType, any> {
    componentDidMount() {
        this.props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPages}&count=${this.props.pagesize}`,{
            withCredentials: true
        })
            .then(response => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanget = (pageNumber: number) => {
        this.props.toogleIsFetching(true)
        this.props.SetCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesize}`,{
            withCredentials: true
        })
            .then(response => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(response.data.items)
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
                   onPageChanget={this.onPageChanget}/>
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
    toogleIsFetching:setIsFetchingAC
})(UsersAPI);


