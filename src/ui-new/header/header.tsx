import React from 'react';
import s from "./header.module.scss"
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className={s.block}>

            <div className={s.icon}>
                <img className={s.iconNetwork}
                     src={"https://mythemestore.com/beehive-preview/wp-content/uploads/2020/07/logo-icon.svg"}/>
            </div>
            <div className={s.container}>
                <div className={s.info}>
                    <div className={s.ava}></div>
                    <div className={s.name}>Anastasia Verich</div>
                </div>
                <div className={s.unLog}>
                    <NavLink to="/*" className={s.btn}>
                        Un login
                    </NavLink></div>

            </div>

        </div>
    )
}