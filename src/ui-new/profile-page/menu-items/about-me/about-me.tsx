import s from "./about-me.module.scss";
import React from "react";

export const AboutMe = (props: any) => {
    return (
        <div className={s.viewProfile}>
            <div className={s.titleMenu}> about me</div>
            <div className={s.selectionMainContainer}>
                <div className={s.aboutMeField}>
                    {props.profile.aboutMe}
                </div>
            </div>
        </div>
    )
}