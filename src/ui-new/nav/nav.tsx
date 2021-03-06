import React from 'react';
import s from "./nav.module.scss"
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AiOutlineUser, AiOutlineWechat} from "react-icons/ai";
import {AiOutlineMessage} from "react-icons/ai";
import {AiOutlineTeam} from "react-icons/ai";
import {AiOutlineSetting} from "react-icons/ai";
import {FiMenu} from "react-icons/all";
import {logout} from "../../BLL/Reducers/auth-saga";


export const Nav = () => {
    const dispatch = useDispatch()
    const logOut = () => {

        dispatch(logout())
    }


    return (
        <div className={s.block}>

            <div className={s.iconMenu}>
                <FiMenu/>
            </div>
            <div className={s.container}>
                <div className={s.menu}>
                    <div className={s.item}>
                        <NavLink to="/profile" className={s.buttonItem}>
                            <AiOutlineUser/>

                        </NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/messages" className={s.buttonItem}>
                            <AiOutlineMessage/>
                        </NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/users" className={s.buttonItem}>
                            <AiOutlineTeam/>
                        </NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/setting" className={s.buttonItem}>
                            <AiOutlineSetting/>
                        </NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/messages/chat" className={s.buttonItem}>
                            <AiOutlineWechat/>
                        </NavLink>
                    </div>


                </div>
                <NavLink to="/login" className={s.logOut} onClick={() => logOut()}>
                    LogOut
                </NavLink>
            </div>
        </div>)
}