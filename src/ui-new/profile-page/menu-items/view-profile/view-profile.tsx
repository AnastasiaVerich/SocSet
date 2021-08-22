import s from "./view-profile.module.scss";
import React from "react";

export const ViewProfile = (props: any) => {
    return (
        <div className={s.viewProfile}>
            <div className={s.titleMenu}> View Profile</div>
            <div className={s.selectionMainContainer}>
                <div className={s.titleColumn}>
                    <div className={s.item}>Name</div>
                    <div className={s.item}>Day of Birth</div>
                    <div className={s.item}>Sex</div>
                    <div className={s.item}>City</div>
                    <div className={s.item}>Country</div>
                </div>
                <div className={s.descriptionColumn}>
                    <div className={s.item}>{props.profile.fullName}</div>
                    <div className={s.item}>18.11.1996</div>
                    <div className={s.item}>W</div>
                    <div className={s.item}>Minsk</div>
                    <div className={s.item
                    }>Belarus
                    </div>
                </div>
            </div>
        </div>
    )
}