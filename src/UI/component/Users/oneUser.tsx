import React from 'react';
import no_image from '../../assets/img/no_image.png'
import {NavLink} from 'react-router-dom';
import {Button} from "@material-ui/core";

type UsersComponentType = {
    user: any
    follower: (id: number) => void
    unfollow: (id: number) => void
    userIdForDisabled: any
}

export let User = (props: UsersComponentType) => {
    let user = props.user

    return <div>
        <div>
                    <span>
                        <div>
                          <NavLink to={'/profile/' + user.id}>  <img width={"50px"} height={"50px"}
                                                                     src={user.photos.small != null ? user.photos.small : no_image}/>
                          </NavLink>
                        </div>
                        <div>{user.followed
                            ?//arr.some возвращает true, если хотя бы для одного элемента массива условие верно
                            //при раздизабл. кнопки к нам прихоидот пустой массив
                            <Button color="primary"
                                    disabled={props.userIdForDisabled.some((id: any) => id === user.id)}
                                    onClick={() => {
                                        props.unfollow(user.id)
                                    }
                                    }>Unfollow</Button>
                            :
                            <Button color="primary" variant="contained"
                                    disabled={props.userIdForDisabled.some((id: any) => id === user.id)}
                                    onClick={() => {
                                        props.follower(user.id)
                                    }
                                    }>Follow</Button>}
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