import s from "./view-contacts.module.scss";
import React from "react";

export const ViewContacts = (props: any) => {
    return (
        <div className={s.viewProfile}>
            <div className={s.titleMenu}> My contacts</div>
            <div className={s.selectionMainContainer}>
                {Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key}
                                    contactValue={props.profile.contacts[key]}/>
                })}
            </div>
        </div>
    )
}
const Contact = (props: any) => {
    return (
        <div className={s.oneContact}>
            <div className={s.titleColumn}>
                <div className={s.item}>{props.contactTitle}</div>
            </div>
            <div className={s.descriptionColumn}>
                <div className={s.item}>{props.contactValue}</div>
            </div>
        </div>
    )
}