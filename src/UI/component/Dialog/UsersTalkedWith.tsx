import React from "react";
import c from "../Nav/Nav.module.css";
import style from "./userstalkedWith.module.css"
import {NavLink} from "react-router-dom";
import no_image from "../../assets/img/no_image.png";

type UsersType = {
    users: any
}
export const UsersTalkedWith = (props: UsersType) => {
    return (<div>
            {props.users.map((element: any) =>
                <div key={element.id} className={style.container}>

                    <NavLink to={'/dialogs/' + element.id} activeClassName={c.act}>

                    <div className={style.photo}><img width={"50px"} height={"50px"}
                                                      src={element.photos.small != null
                                                          ? element.photos.small
                                                          : no_image}/></div></NavLink>
                    <div className={style.info}>
                        <div className={style.userName}>{element.userName}</div>
                        <div className={style.sms}>типа сообщение с диалога и оно не влаз...</div>
                    </div>

                </div>)
            }
        </div>
    )
}