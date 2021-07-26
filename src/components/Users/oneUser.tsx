import React from 'react';
import nullAvatar from '../../assets/img/nullAvatar.jpg'
import {NavLink} from 'react-router-dom';

type UsersComponentType = {
    user: any
    follower: (id: number) => void
    unfollow: (id: number) => void
    IsFollowingProgress: any
}

export let User = (props: UsersComponentType) => {
let user = props.user

    return <div>
            <div >
                    <span>
                        <div>
                          <NavLink to={'/profile/' + user.id}>  <img width={"50px"} height={"50px"}
                                                                  src={user.photos.small != null ? user.photos.small : nullAvatar}/>
                          </NavLink>
                        </div>
                        <div>{user.followed
                            ?
                            <button disabled={props.IsFollowingProgress.some((id: any) => id === user.id)} onClick={() => {
                                props.unfollow(user.id)
                            }
                            }>Unfollow</button>
                            :
                            <button disabled={props.IsFollowingProgress.some((id: any) => id === user.id)} onClick={() => {
                                props.follower(user.id)
                            }
                            }>Follow</button>}
                        </div>
                    </span>

                <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>

                        </span>
                    </span>
            </div>
        )
    </div>
}