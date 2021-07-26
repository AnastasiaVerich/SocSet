import React from 'react';
import { OneUsersType} from "../../../BLL/Reducers/users-reducer";
import {Paginator} from "./Paginator";
import {User} from "./oneUser";
import style from "./Users.module.css"

type UsersComponentType = {
    users: OneUsersType[]
    pagesize: number
    totalUsersCount: number
    currentPages: number
    follower: (id: number) => void
    unfollow: (id: number) => void
    onPageChanget: (x: any) => void
    setIsFollowingProgress: (x: any, id: any) => void
    IsFollowingProgress: any
    isFollow: boolean
    FiendsAC: any
}

export let Users = (props: UsersComponentType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pagesize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div className={style.block}>
        <Paginator pagesize={props.pagesize}
                   totalItemsCount={props.totalUsersCount}
                   onPageChanget={props.onPageChanget}
                   currentPages={props.currentPages}/>
        <button onClick={()=>{props.FiendsAC(true)}}>find friends</button>
        <button onClick={()=>{props.FiendsAC(false)}}>show all</button>
<div className={style.userContainer}>
        {props.users.map((u: OneUsersType) =><User user={u}
                                                   follower={props.follower}
                                                   unfollow={props.unfollow}
                                                   userIdForDisabled={props.IsFollowingProgress}/>

        )
        }
</div>
    </div>
}