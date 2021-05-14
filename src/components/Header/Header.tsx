import React from 'react';
import { NavLink } from 'react-router-dom';
import clas from './Header.module.css';

type HeaderPropsType={
    isAuth: any
    login: any
}

export const Header =(props: HeaderPropsType)=>{
    return (
        <header className={clas.header}>
            <img
                src='https://i.gifer.com/origin/5e/5e078a53db913f13fb65788d46fadb0b_w200.gif'/>
            <div className={clas.loginBlock}>
                {props.isAuth
                ? props.login
                :<NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}