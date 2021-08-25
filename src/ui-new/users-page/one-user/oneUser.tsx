import s from "./one-user.module.scss";
import no_image from "../../../UI/assets/img/no_image.png";
import {NavLink} from "react-router-dom";
import React from "react";
import {AiOutlineUserAdd, AiOutlineUserDelete} from "react-icons/all";
import {AiOutlineMail} from "react-icons/ai";

export const OneUser = (props: any) => {
    const user = props.user;
    return (
        <div className={s.friendContainer}>
            <img className={s.ava}
                 src={user.photos.small != null ? user.photos.small : no_image}/>

            <div className={s.name}>{user.name}</div>
            <div className={s.butt}>
                {user.followed
                    ?//arr.some возвращает true, если хотя бы для одного элемента массива условие верно
                    //при раздизабл. кнопки к нам прихоидот пустой массив
                    <button className={s.butItem}
                            disabled={props.IsFollowingProgress.some((id: any) => id === user.id)}
                            onClick={() => {
                                props.unfollow(user.id)
                            }
                            }><AiOutlineUserDelete/></button>
                    :
                    <button className={s.butItem}
                            disabled={props.IsFollowingProgress.some((id: any) => id === user.id)}
                            onClick={() => {
                                props.follower(user.id)
                            }
                            }><AiOutlineUserAdd/></button>}
                <NavLink to={'/messages/' + user.id} className={s.butItem}>
                    <AiOutlineMail/>
                </NavLink>
            </div>
            <NavLink className={s.viewProfileFriend} to={'/profile/' + user.id}>
                view profile
            </NavLink>
        </div>

    )
}