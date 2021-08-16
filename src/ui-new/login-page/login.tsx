import React, {useState} from 'react'
import s from "./login.module.scss"
import {NavLink} from "react-router-dom";
import style from "../../UI/component/Nav/Nav.module.css";

export const Login = () => {

    const on= false;

    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.rightPart}>
                    <div className={s.pathContainer}>
                        <div className={s.firstText}>Join the club</div>
                        <div className={s.secondText}>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Ut elit tellus, luctus.
                        </div>
                        <div className={s.oneAdvantage}>
                            <div className={s.icon}> ♥icon</div>
                            <div className={s.description}>
                                <div className={s.title}>Community</div>
                                <div className={s.desc}>At vero eos et accusamus et.</div>
                            </div>
                        </div>
                        <div className={s.oneAdvantage}>
                            <div className={s.icon}></div>
                            <div className={s.description}>
                                <div className={s.title}>Online shop</div>
                                <div className={s.desc}>At vero eos et accusamus et.</div>
                            </div>
                        </div>
                        <div className={s.oneAdvantage}>
                            <div className={s.icon}></div>
                            <div className={s.description}>
                                <div className={s.title}>Job search</div>
                                <div className={s.desc}>At vero eos et accusamus et.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.leftPart}>
                    <div className={s.pathContainer}>
                        <img  className={s.iconNetwork} src={"https://mythemestore.com/beehive-preview/wp-content/uploads/2020/07/logo-icon.svg"}/>
                        <div className={s.welcome}>Welcome</div>
                        <div className={s.loginForm}>
                            <input className={s.input}/>
                            <input className={s.input}/>
                            <div className={s.rememberMe}>
                                <input className={s.checkbox} type="checkbox"/>
                                <p>Remember</p>
                            </div >
                            {on &&<div className={s.captcha}>captcha</div>}
                            <NavLink to="/profile" className={s.button}>
                               Login In
                            </NavLink>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}