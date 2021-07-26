import React from 'react';
import  style from './Nav.module.css'

import {NavLink} from "react-router-dom"

export const Nav = () => {
    return (
        <div className={style.block} >
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.act}><b>Profile</b></NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.act}><b>Messages</b></NavLink>
            </div>

            <div className={style.item}>
                <NavLink to="/findUsers" activeClassName={style.act}><b>Find Users</b></NavLink>
            </div>
        </div>
    )
}