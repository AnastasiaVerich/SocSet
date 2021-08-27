import React from 'react';
import s from "./header.module.scss"
import {NavLink} from "react-router-dom";

export const Header = (props: any) => {
    return (
        <div className={s.block}>
            <div className={s.icon}>
                <img className={s.iconNetwork}
                     src={"https://mythemestore.com/beehive-preview/wp-content/uploads/2020/07/logo-icon.svg"}/>
            </div>
            <div className={s.container}>
                {props.isAuthorization
                    ? <div className={s.info}>
                        <div className={s.name}>
                            {props.login}
                        </div>
                    </div>
                    : <></>}
                <div className={s.unLog}>
                    {props.isAuthorization
                        ? <NavLink to="/login" className={s.btn} onClick={props.logOut}>
                            LogOut
                        </NavLink>
                        : <></>}</div>
            </div>
        </div>
    )
}