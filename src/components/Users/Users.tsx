import React from 'react';
import c from './Users.module.css'
import axios from "axios";
import nullAvatar from '../../assets/img/nullAvatar.jpg'
import {setIsFollowingProgressAC, UsersType} from "../../redux/UsersReducer";
import {NavLink} from 'react-router-dom';
import {follow, unFollow} from "../DAL/api";

type UsersComponentType = {
    users: UsersType[]
    pagesize: number
    totalUsersCount: number
    currentPages: number
    follower: (id: number) => void
    unfollow: (id: number) => void
    onPageChanget: (x: any) => void
    setIsFollowingProgress: (x: any, id:any) => void
    IsFollowingProgress: any
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
        {props.users.map((u: UsersType) =>
            <div key={u.id}>
                    <span>
                        <div>
                          <NavLink to={'/profile/' + u.id}>  <img width={"50px"} height={"50px"}
                                                                  src={u.photos.small != null ? u.photos.small : nullAvatar}/>
                          </NavLink>
                        </div>

                        <div> {u.followed ?
                            <button disabled={props.IsFollowingProgress.some((id:any)=>id===u.id)} onClick={() => {
                                props.setIsFollowingProgress(true, u.id)
                                unFollow(u.id).then(response => {

                                        if (response.resultCode == 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.setIsFollowingProgress(false, u.id)
                                    }
                                )
                            }
                            }>Unfollow</button> :
                            <button disabled={props.IsFollowingProgress.some((id:any)=>id===u.id)}onClick={() => {
                                props.setIsFollowingProgress(true, u.id)
                                follow(u.id).then(response => {
                                        if (response.resultCode == 0) {
                                            props.follower(u.id)
                                        }
                                        props.setIsFollowingProgress(false, u.id)
                                    }
                                )
                            }
                            }>Follow</button>}
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