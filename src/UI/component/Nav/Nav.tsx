import React from 'react';
import  c from './Nav.module.css'

import {NavLink} from "react-router-dom"

export const Nav = () => {
    return (
        <div className={c.nav}>
            <div className={c.item}>
                <NavLink to="/profile" activeClassName={c.act}>Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/dialogs" activeClassName={c.act}>Messages</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/news" activeClassName={c.act}>News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/music" activeClassName={c.act}>Friends</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/findUsers" activeClassName={c.act}>Find Users</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/setting" activeClassName={c.act}>Settings</NavLink>
            </div>
        </div>
    )
}