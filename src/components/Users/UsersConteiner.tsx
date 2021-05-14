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
import {StoreStateType} from "../../redux/StoreRedux";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";


export type MapStateToPropsType = {
    users: UsersType[]
    pagesize: number
    totalUsersCount: number
    currentPages: number
}

export type MapDispatchTopropsType = {
    follower: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (x: []) => void
    SetCurrentPage: (x: number) => void
    setTotalUsersCount: (x: number) => void

}
let mapStateToProps = (state: StoreStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.usersData,
        pagesize: state.usersPage.pagesize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPages: state.usersPage.currentPages
    }
}

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
        }
    }
}


class UsersAPI extends React.Component<MapDispatchTopropsType & MapStateToPropsType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPages}&count=${this.props.pagesize}`)
            .then(response => {


                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })

    }

    onPageChanget = (pageNumber: number) => {
        this.props.SetCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesize}`)
            .then(response => {

                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return <Users users={this.props.users}
                      totalUsersCount={this.props.totalUsersCount}
                      currentPages={this.props.currentPages}
                      pagesize={this.props.pagesize}
                      follower={this.props.follower}
                      unfollow={this.props.unfollow}
                      onPageChanget={this.onPageChanget}/>
    }


}

export const UsersContainer = connect(mapStateToProps, mapDispatchToprops)(UsersAPI);