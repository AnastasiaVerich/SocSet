import s from "./one-user.module.scss";
import no_image from "../../assets/img/no_image.png";
import {NavLink} from "react-router-dom";
import React from "react";
import {AiOutlineUserAdd, AiOutlineUserDelete} from "react-icons/all";
import {AiOutlineMail} from "react-icons/ai";

export const OneUser = (props: any) => {
    const user = props.user;
    return (
        <div className={s.oneFriendContainer}>
            <img className={s.photo}
                 src={user.photos.small != null ? user.photos.small : no_image} alt={""}/>

            <div className={s.name}>{user.name}</div>
            <div className={s.btn}>
                {user.followed
                    ?//arr.some возвращает true, если хотя бы для одного элемента массива условие верно
                    //при раздизабл. кнопки к нам прихоидот пустой массив
                    <button className={s.item}
                            disabled={props.IsFollowingProgress.some((id: any) => id === user.id)}
                            onClick={() => {
                                props.unfollow(user.id)
                            }
                            }><AiOutlineUserDelete/></button>
                    :
                    <button className={s.item}
                            disabled={props.IsFollowingProgress.some((id: any) => id === user.id)}
                            onClick={() => {
                                props.follower(user.id)
                            }
                            }><AiOutlineUserAdd/></button>}
                <NavLink to={'/messages/' + user.id} className={s.item}>
                    <AiOutlineMail/>
                </NavLink>
            </div>
            <NavLink className={s.viewProfileBtn} to={'/profile/' + user.id}>
                view profile
            </NavLink>
        </div>

    )
}