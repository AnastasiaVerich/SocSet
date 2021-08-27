import s from "./about-me.module.scss";
import React from "react";

export const AboutMe = (props: any) => {
    return (
        <div className={s.aboutMeBlock}>
            <div className={s.titleMenu}> about me</div>
            <div className={s.container}>
                <div className={s.aboutMeField}>
                    {props.profile.aboutMe}
                </div>
            </div>
        </div>
    )
}