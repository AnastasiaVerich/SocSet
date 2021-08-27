import {NavLink} from "react-router-dom";
import s from "./users.module.scss";
import no_image from "../../assets/img/no_image.png";
import React from "react";

export const Users = (props: any) => {
    let time = (t: any) => {
        let date = new Date()
        if (date.getMonth() == Number(t.substr(5, 2) - 1)
            && date.getDate() == t.substr(8, 2)
            && date.getFullYear() == t.substr(0, 4))
            return t.substr(11, 5);
        else return t.substr(5, 5)
    }
    return (
        <>
            {props.users.map((element: any) =>
                <NavLink to={'/messages/' + element.id} key={element.id} className={s.item}>
                    <div className={s.avatar}>
                        <img className={s.ava}
                             src={element.photos.small != null
                                 ? element.photos.small
                                 : no_image}/>
                    </div>
                    <div className={s.main}>
                        <div className={s.name}>{element.userName}</div>
                        {element.hasNewMessages && <div className={s.lastMessages}>New messages!</div>}
                    </div>
                    <div className={s.info}>
                        <div className={s.time}>{time(element.lastDialogActivityDate)}</div>
                        {element.newMessagesCount !== 0 &&
                        <div className={s.countUnread}>{element.newMessagesCount}</div>}

                    </div>
                </NavLink>)
            }
        </>
    )
}