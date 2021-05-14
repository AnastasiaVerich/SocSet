import React from 'react';
import c from './Users.module.css'
import axios from "axios";
import nullAvatar from '../../assets/img/nullAvatar.jpg'
import {UsersType} from "../../redux/UsersReducer";

type UsersComponentType={
       users: UsersType[]
       pagesize: number
       totalUsersCount: number
       currentPages: number
    follower:(id:number)=>void
    unfollow:(id:number)=>void
    onPageChanget:(x:any)=> void
}

export let Users = (props: UsersComponentType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pagesize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {pages.map(x => <span className={props.currentPages === x ? c.selectPage : c.notselectPage}
                              onClick={(e) => {
                                  props.onPageChanget(x)
                              }}>{x}</span>)}
        {props.users.map((u:UsersType) =>
            <div key={u.id}>
                    <span>
                        <div>
                            <img width={"50px"} height={"50px"}
                                 src={u.photos.small != null ? u.photos.small : nullAvatar}/>
                        </div>

                        <div> {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                props.follower(u.id)
                            }}>Follow</button>}
                        </div>
                    </span>

                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>

                        </span>
                    </span>
            </div>
        )
        }
    </div>
}