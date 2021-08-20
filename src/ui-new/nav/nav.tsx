import React from 'react';
import s from "./nav.module.scss"
import {NavLink} from "react-router-dom";



export const Nav =()=> {
    return (<div className={s.block}>
<div className={s.container}>
    <div className={s.item}>
        <NavLink to="/profile" className={s.buttonItem}>
            Profile
        </NavLink>
    </div>
    <div className={s.item}>
        <NavLink to="/messages" className={s.buttonItem}>
            Messages
        </NavLink>
    </div>
    <div className={s.item}>
        <NavLink to="/users" className={s.buttonItem}>
            Users
        </NavLink>
    </div>
    <div className={s.item}>Set</div>

</div>
    </div>)
}