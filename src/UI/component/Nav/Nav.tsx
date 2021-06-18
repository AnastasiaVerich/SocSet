import React from 'react';
import  c from './Nav.module.css'

import {NavLink} from "react-router-dom"
import {Grid} from "@material-ui/core";

export const Nav = () => {
    return (
        <Grid container
              direction="column"
              justify="center"
              alignItems="center">
            <div className={c.item}>
                <NavLink to="/profile" activeClassName={c.act}><b>Profile</b></NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/dialogs" activeClassName={c.act}><b>Messages</b></NavLink>
            </div>
            {/*<div className={c.item}>
                <NavLink to="/news" activeClassName={c.act}>News</NavLink>
            </div>*/}
            <div className={c.item}>
                <NavLink to="/music" activeClassName={c.act}><b>Friends</b></NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/findUsers" activeClassName={c.act}><b>Find Users</b></NavLink>
            </div>
            {/*<div className={c.item}>*/}
            {/*    <NavLink to="/setting" activeClassName={c.act}>Settings</NavLink>*/}
            {/*</div>*/}
        </Grid>
    )
}