import React from 'react';
import { UsersType} from "../../../BLL/UsersReducer";
import {Paginator} from "./Paginator";
import {User} from "./oneUser";

type UsersComponentType = {
    users: UsersType[]
    pagesize: number
    totalUsersCount: number
    currentPages: number
    follower: (id: number) => void
    unfollow: (id: number) => void
    onPageChanget: (x: any) => void
    setIsFollowingProgress: (x: any, id: any) => void
    IsFollowingProgress: any
}

export let Users = (props: UsersComponentType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pagesize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div>
        <Paginator pagesize={props.pagesize}
                   totalItemsCount={props.totalUsersCount}
                   onPageChanget={props.onPageChanget}
                   currentPages={props.currentPages}/>
        {props.users.map((u: UsersType) =><User user={u}
                                                follower={props.follower}
                                                unfollow={props.unfollow}
                                                IsFollowingProgress={props.IsFollowingProgress}/>

        )
        }
    </div>
}