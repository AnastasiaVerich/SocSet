import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button} from "@material-ui/core";
import style from "./Header.module.css"
import {Nav} from "../Nav/Nav";


type HeaderPropsType = {
    isAuthorization: any
    login: any
    logOut: any
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div className={style.block}>
            <div className={style.icon}>

            </div>
            <div className={style.navR}>
                <div >
                    <Nav/>
                </div>
                <div >
                    {props.isAuthorization
                        ? <>{props.login} |
                            <Button color="inherit"
                                    onClick={props.logOut}
                                    component={NavLink}
                                    to={'/login'}>LogOut</Button>
                        </>
                        : <Button color="inherit"
                                  component={NavLink}
                                  to={'/login'}>Login</Button>}
                </div>
            </div>
        </div>
    )
}