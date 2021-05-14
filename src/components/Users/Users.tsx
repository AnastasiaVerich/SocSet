import React from 'react';
import c from './Users.module.css'
import axios from "axios";
import nullAvatar from '../../assets/img/nullAvatar.jpg'
import {UsersType} from "../../redux/UsersReducer";
import {NavLink} from 'react-router-dom';

type UsersComponentType = {
    users: UsersType[]
    pagesize: number
    totalUsersCount: number
    currentPages: number
    follower: (id: number) => void
    unfollow: (id: number) => void
    onPageChanget: (x: any) => void
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
                            <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "603ef8c0-4933-4294-ab5f-b170d3ebe6d8"
                                    }
                                })
                                    .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                        }
                                    )
                            }
                            }>Unfollow</button> :
                            <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "603ef8c0-4933-4294-ab5f-b170d3ebe6d8"
                                    }
                                })
                                    .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follower(u.id)
                                            }
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