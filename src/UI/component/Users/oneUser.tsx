import React from 'react';
import no_image from '../../assets/img/no_image.png'
import {NavLink} from 'react-router-dom';
import {Button} from "@material-ui/core";
import style from "./oneUser.module.css"

type UsersComponentType = {
    user: any
    follower: (id: number) => void
    unfollow: (id: number) => void
    userIdForDisabled: any
}

export let User = (props: UsersComponentType) => {
    let user = props.user

    return <div className={style.container}>

        <div className={style.photo}>
            <NavLink to={'/profile/' + user.id}> <img width={"90px"} height={"90px"}
                                                      src={user.photos.small != null ? user.photos.small : no_image}/>
            </NavLink>
        </div>


        <div>
            <div>{user.name}</div>
            <div>что то о</div>
        </div>

        <div className={style.buttonFollow}>
            {user.followed
                ?//arr.some возвращает true, если хотя бы для одного элемента массива условие верно
                //при раздизабл. кнопки к нам прихоидот пустой массив
                <button
                    disabled={props.userIdForDisabled.some((id: any) => id === user.id)}
                    onClick={() => {
                        props.unfollow(user.id)
                    }
                    }>Unfollow</button>
                :
                <button
                    disabled={props.userIdForDisabled.some((id: any) => id === user.id)}
                    onClick={() => {
                        props.follower(user.id)
                    }
                    }>Follow</button>}
            <button>chat</button>
        </div>
        <div className={style.vewProffile}>
            <button>vew profile</button>
        </div>


    </div>


}