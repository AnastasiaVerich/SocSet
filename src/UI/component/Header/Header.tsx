import React from 'react';
import { NavLink } from 'react-router-dom';
import {Button} from "@material-ui/core";

type HeaderPropsType={
    isAuth: any
    login: any
    logOut: any
}

export const Header =(props: HeaderPropsType)=>{
    return (
        <header >
            <div >
                {props.isAuth
                ? <>{props.login} |
                        <Button color="inherit"
                                 onClick={props.logOut}
                                component={NavLink}
                                to={'/login'}>LogOut</Button></>
                :<Button color="inherit"
                         component={NavLink}
                         to={'/login'}>Login</Button>}

            </div>
        </header>
    )
}