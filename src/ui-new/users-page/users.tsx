import React from 'react'
import s from "./users.module.scss"
import {OneUsersType} from "../../BLL/Reducers/users-reducer";
import {OneUser} from "./one-user/oneUser";

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
                           placeholder={"Search Members"}></input>
                    <div className={s.spn}></div>
                </div>

                <div className={s.viewFriends}>
                    {props.users.map((user: OneUsersType) =>
                        <OneUser user={user}
                                 unfollow={props.unfollow}
                                 IsFollowingProgress={props.IsFollowingProgress}
                                 follower={props.follower}
                        />
                    )
                    }
                </div>
            </div>
        </div>
    )
}

