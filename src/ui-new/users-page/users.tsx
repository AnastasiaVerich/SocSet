import React from 'react'
import s from "./users.module.scss"
import {OneUsersType} from "../../BLL/Reducers/users-reducer";
import {OneUser} from "./one-user/oneUser";
import {Paginator} from "./paginator/Paginator";

export const Users = (props:any) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pagesize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.block}>
            {/*посмотреть друзей*/}
            <div className={s.container}>

                <div className={s.search}>
                    <input className={s.inp}
    placeholder={"Search Members"} value={props.search} onChange={(event) => {
    props.searchAC(event.currentTarget.value)
}}/>
                    <button onClick={()=>{props.FiendsAC(true)}}>show frind</button>
                    <button onClick={()=>{props.FiendsAC(false)}}>show all user</button>
                </div>
                <div className={s.userBlock}>
                    {props.users.map((user: OneUsersType) =>
                        <OneUser user={user}
                                 unfollow={props.unfollow}
                                 IsFollowingProgress={props.IsFollowingProgress}
                                 follower={props.follower}
                                 key={user.id}
                        />
                    )
                    }
                </div>
                <div className={s.paginator}>
                    <Paginator pagesize={props.pagesize}
                               totalItemsCount={props.totalUsersCount}
                               onPageChanget={props.onPageChanget}
                               currentPages={props.currentPages}/>
                </div>

            </div>
        </div>
    )
}

